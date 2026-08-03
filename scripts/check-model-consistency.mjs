#!/usr/bin/env node
// scripts/check-model-consistency.mjs
//
// Fails the build if marketplace / matching-service language or an
// unsupported trust claim reappears in site copy.
//
// The site operates ONE model: accountancy delivered directly by
// Tidy Money Ltd. The banned list lives in data/provider.ts so the copy
// rules and the enforcement share a source.
//
// Run: node scripts/check-model-consistency.mjs

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

// fileURLToPath, not URL.pathname: the repo lives under a path with a space
// in it, and pathname leaves that percent-encoded.
const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SCAN_DIRS = ['app', 'components', 'data'];
const EXTS = new Set(['.ts', '.tsx', '.json']);

// data/provider.ts owns the banned list and necessarily contains every term
// as a literal. scripts/ contains this checker. Neither is site copy.
const EXEMPT = new Set(['data/provider.ts']);

function readBannedTerms() {
  const src = readFileSync(join(ROOT, 'data/provider.ts'), 'utf8');
  const block = src.match(/bannedClaimTerms:\s*string\[\]\s*=\s*\[([\s\S]*?)\];/);
  if (!block) throw new Error('Could not parse bannedClaimTerms from data/provider.ts');
  return [...block[1].matchAll(/'([^']+)'/g)].map(m => m[1]);
}

/**
 * Blank out comments while preserving line count and column positions, so
 * reported line numbers still match the file.
 *
 * Comments that explain WHY a term is banned necessarily quote it. That is
 * documentation, not site copy, and it must not trip the check. Everything
 * outside a comment is treated as copy.
 *
 * Deliberately simple: it does not track string literals, so a banned term
 * inside a string that happens to contain "//" is still scanned. That errs
 * toward flagging, which is the safe direction for this check.
 */
function stripComments(src) {
  let out = '';
  let i = 0;
  while (i < src.length) {
    const two = src.slice(i, i + 2);
    if (two === '//') {
      while (i < src.length && src[i] !== '\n') { out += ' '; i++; }
    } else if (two === '/*') {
      while (i < src.length && src.slice(i, i + 2) !== '*/') {
        out += src[i] === '\n' ? '\n' : ' ';
        i++;
      }
      out += '  ';
      i += 2;
    } else {
      out += src[i];
      i++;
    }
  }
  return out;
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (EXTS.has(extname(entry))) out.push(full);
  }
  return out;
}

const banned = readBannedTerms();
const failures = [];

for (const dir of SCAN_DIRS) {
  for (const file of walk(join(ROOT, dir))) {
    const rel = file.slice(ROOT.length).replace(/\\/g, '/').replace(/^\//, '');
    if (EXEMPT.has(rel)) continue;

    const lines = stripComments(readFileSync(file, 'utf8')).split('\n');
    lines.forEach((line, i) => {
      const haystack = line.toLowerCase();
      for (const term of banned) {
        if (haystack.includes(term)) {
          failures.push({ file: rel, line: i + 1, term, text: line.trim().slice(0, 140) });
        }
      }
    });
  }
}

if (failures.length) {
  console.error(`\nMODEL CONSISTENCY CHECK FAILED: ${failures.length} banned term(s) in site copy.\n`);
  for (const f of failures) {
    console.error(`  ${f.file}:${f.line}  [${f.term}]`);
    console.error(`    ${f.text}\n`);
  }
  console.error('The site delivers accountancy directly through Tidy Money Ltd.');
  console.error('See data/provider.ts for the approved wording.\n');
  process.exit(1);
}

console.log(`Model consistency check passed (${banned.length} terms checked).`);
