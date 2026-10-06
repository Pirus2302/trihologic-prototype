"""Скриншоты вариантов: python tools/shots.py [port]
Снимает первый экран и всю страницу на 1440 и 390, проверяет ошибки консоли и горизонтальный скролл.
Нужен локальный сервер (по умолчанию порт 3129) и playwright с chromium."""
import asyncio, sys, json
from pathlib import Path
from playwright.async_api import async_playwright

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3129
PAGES = ['index.html', 'v1.html', 'v2.html', 'wow.html', 'wow2.html']
OUT = Path(__file__).resolve().parent.parent / 'docs' / 'screens'
OUT.mkdir(parents=True, exist_ok=True)

async def shoot(b, page, w, h, tag):
    ctx = await b.new_context(viewport={'width': w, 'height': h}, device_scale_factor=1)
    pg = await ctx.new_page()
    errors = []
    pg.on('pageerror', lambda e: errors.append(str(e)))
    pg.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
    await pg.goto(f'http://localhost:{PORT}/{page}', wait_until='networkidle', timeout=90000)
    await pg.wait_for_timeout(1200)
    await pg.evaluate("document.querySelectorAll('.sw').forEach(e=>e.style.display='none')")
    await pg.screenshot(path=str(OUT / f'{page[:-5]}-{tag}-top.jpg'), quality=82)
    # прокрутка для ленивых картинок и анимаций появления
    total = await pg.evaluate('document.documentElement.scrollHeight')
    y = 0
    while y < total:
        await pg.evaluate(f'window.scrollTo(0,{y})')
        await pg.wait_for_timeout(120)
        y += h // 2
        total = await pg.evaluate('document.documentElement.scrollHeight')
    await pg.evaluate('window.scrollTo(0,0)')
    await pg.wait_for_timeout(600)
    await pg.screenshot(path=str(OUT / f'{page[:-5]}-{tag}-full.jpg'), full_page=True, quality=70)
    hscroll = await pg.evaluate('document.documentElement.scrollWidth > document.documentElement.clientWidth + 1')
    broken = await pg.evaluate("[...document.images].filter(i=>i.complete && i.naturalWidth===0 && i.loading!=='lazy').map(i=>i.src)")
    await ctx.close()
    return {'page': page, 'tag': tag, 'errors': errors[:5], 'hscroll': hscroll, 'broken': broken[:5], 'height': total}

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=['--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu'])
        res = []
        for page in PAGES:
            res.append(await shoot(b, page, 1440, 900, 'd'))
            res.append(await shoot(b, page, 390, 844, 'm'))
        await b.close()
    for r in res:
        flag = 'OK ' if not r['errors'] and not r['hscroll'] and not r['broken'] else 'BAD'
        print(flag, r['page'], r['tag'], 'h=' + str(r['height']), 'hscroll' if r['hscroll'] else '', r['errors'], r['broken'])

asyncio.run(main())
