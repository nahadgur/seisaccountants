"""
Visual audit screenshot capture for seisaccountants.uk local build.
Run: python scripts/capture_screenshots.py
"""

from playwright.sync_api import sync_playwright
import os

BASE_URL = "http://localhost:3737"
OUT_DIR = "/Users/nealdougan/seisaccountants/audit/screenshots"
os.makedirs(OUT_DIR, exist_ok=True)

PAGES = [
    ("home",        "/"),
    ("location",    "/location/"),
    ("edinburgh",   "/location/edinburgh/"),
    ("london",      "/location/london/"),
    ("seis-aa",     "/services/seis-advance-assurance/"),
    ("diagnostic",  "/tools/seis-diagnostic/"),
]

VIEWPORTS = [
    ("desktop", 1440, 900),
    ("mobile",  390,  844),
]


def capture(page, url, path, width, height):
    page.set_viewport_size({"width": width, "height": height})
    page.goto(url, wait_until="networkidle", timeout=30000)
    # Let fonts settle
    page.wait_for_timeout(1500)
    # Above-the-fold (viewport height only – not full_page)
    page.screenshot(path=path, full_page=False)
    print(f"  Saved: {path}")


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context()
    pg = ctx.new_page()

    for slug, route in PAGES:
        url = BASE_URL + route
        for vp_name, vp_w, vp_h in VIEWPORTS:
            out_path = os.path.join(OUT_DIR, f"{slug}-{vp_name}.png")
            print(f"Capturing {slug} @ {vp_name} ({vp_w}x{vp_h}) …")
            capture(pg, url, out_path, vp_w, vp_h)

    # Also capture full-page versions for thorough review
    for slug, route in PAGES:
        url = BASE_URL + route
        for vp_name, vp_w, vp_h in VIEWPORTS:
            out_path = os.path.join(OUT_DIR, f"{slug}-{vp_name}-full.png")
            print(f"Capturing full-page {slug} @ {vp_name} …")
            pg.set_viewport_size({"width": vp_w, "height": vp_h})
            pg.goto(url, wait_until="networkidle", timeout=30000)
            pg.wait_for_timeout(1500)
            pg.screenshot(path=out_path, full_page=True)
            print(f"  Saved: {out_path}")

    browser.close()
    print("\nAll screenshots captured.")
