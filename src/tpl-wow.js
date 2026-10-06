/* WOW «Корень» – тёмный, кинематографичный. В первом экране на canvas из кожи головы растут волосы и тянутся к курсору.
   Список проблем с картинкой за курсором, лента хитов тянется мышью, бренды бегущей строкой, путь к результату рисуется по скроллу */
const { SC, icon, esc, price, switcher, legalHtml } = require('./data');

const card = p => `<article class="card">
  <a class="pic" href="${p.href}"><img src="${p.img}" alt="${esc(p.t)}" loading="lazy" draggable="false"></a>
  <span class="tag">${p.tag}</span>
  <h3><a href="${p.href}" draggable="false">${esc(p.t)}</a></h3>
  <div class="row"><span class="price">${price(p.price)}</span><button class="add" type="button" aria-label="В корзину">${icon.plus}</button></div>
</article>`;

module.exports = () => `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>TRIHOLOGIC – WOW «Корень»</title>
<link rel="icon" href="${SC.site}wp-content/uploads/2026/03/cropped-favicon-32x32.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=Unbounded:wght@300;400&display=swap" rel="stylesheet">
<style>
:root{--bg:#07100f;--bg2:#0c1817;--bg3:#122221;--ink:#e9f2f1;--mute:#8ea4a3;--aqua:#35c3d6;--aqua-d:#1d8e9e;--line:rgba(233,242,241,.1);--wrap:1360px}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--ink);font:400 16px/1.6 Manrope,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
ul,ol{list-style:none;padding:0}
button{font:inherit;cursor:pointer}
h1,h2,h3.d{font-family:Unbounded,system-ui,sans-serif;font-weight:300;line-height:1.08;letter-spacing:-.02em}
h2{font-size:clamp(30px,3.6vw,52px)}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 32px}
.caps{font:600 11px/1 Manrope;letter-spacing:.22em;text-transform:uppercase;color:var(--aqua)}
.btn{display:inline-flex;align-items:center;gap:10px;padding:16px 26px;border-radius:999px;background:var(--ink);color:var(--bg);font:600 14px/1 Manrope;border:1px solid var(--ink);transition:.3s;position:relative;overflow:hidden}
.btn:hover{background:var(--aqua);border-color:var(--aqua);color:#031012}
.btn.ghost{background:transparent;color:var(--ink);border-color:rgba(233,242,241,.3)}.btn.ghost:hover{border-color:var(--ink);background:var(--ink);color:var(--bg)}
.btn.aqua{background:var(--aqua);border-color:var(--aqua);color:#031012}.btn.aqua:hover{background:#5fd6e6}
.btn svg{transition:transform .3s}.btn:hover svg{transform:translateX(4px)}
section{padding:clamp(64px,8vw,128px) 0;position:relative}
.sec-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:clamp(32px,4vw,56px)}
.sec-head .more{display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:14px;color:var(--mute)}.sec-head .more:hover{color:var(--aqua)}
.rv{opacity:0;transform:translateY(28px);transition:opacity 1s cubic-bezier(.2,.7,.2,1),transform 1s cubic-bezier(.2,.7,.2,1)}
.rv.in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.rv{opacity:1;transform:none;transition:none}*{animation:none!important;transition:none!important}}

/* шапка */
.hdr{position:fixed;left:0;right:0;top:0;z-index:60;transition:background .4s,backdrop-filter .4s,border-color .4s;border-bottom:1px solid transparent}
.hdr.on{background:rgba(7,16,15,.78);backdrop-filter:blur(14px);border-color:var(--line)}
.hdr .wrap{display:flex;align-items:center;gap:40px;min-height:80px}
.logo img{height:34px;width:auto}
.menu{display:flex;gap:28px;flex:1;justify-content:center}
.menu a{font-size:14px;font-weight:500;color:var(--mute);transition:color .2s;position:relative}
.menu a:hover,.menu a[aria-current]{color:var(--ink)}
.menu a::after{content:"";position:absolute;left:50%;bottom:-8px;width:4px;height:4px;border-radius:50%;background:var(--aqua);transform:translateX(-50%) scale(0);transition:transform .3s}
.menu a:hover::after,.menu a[aria-current]::after{transform:translateX(-50%) scale(1)}
.tools{display:flex;gap:6px;align-items:center}
.tools a,.tools button{position:relative;background:none;border:0;color:inherit;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;transition:background .2s}
.tools a:hover,.tools button:hover{background:rgba(233,242,241,.08)}
.tools em{position:absolute;top:5px;right:3px;min-width:17px;height:17px;border-radius:9px;background:var(--aqua);color:#031012;font:700 10px/17px Manrope;text-align:center;font-style:normal}
.burger{display:none}

/* первый экран */
.hero{min-height:100vh;min-height:100svh;display:grid;align-items:end;padding:140px 0 72px;overflow:hidden}
#hair{position:absolute;inset:0;width:100%;height:100%;display:block}
.hero::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 50% at 70% 60%,rgba(53,195,214,.14),transparent 70%)}
.hero::after{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(90deg,rgba(7,16,15,.82) 0%,rgba(7,16,15,.55) 38%,rgba(7,16,15,0) 68%),linear-gradient(0deg,rgba(7,16,15,.6) 0%,rgba(7,16,15,0) 30%)}
.hero .wrap{position:relative;z-index:2;display:grid;grid-template-columns:1.3fr .7fr;gap:40px;align-items:end}
.hero h1{font-size:clamp(44px,6.4vw,100px);margin:22px 0 26px}
.hero h1 em{font-style:normal;color:var(--aqua)}
.hero .lead{font-size:clamp(16px,1.3vw,19px);color:var(--mute);max-width:36em;margin-bottom:34px}
.hero .cta{display:flex;gap:12px;flex-wrap:wrap}
.hero aside{display:grid;gap:14px;justify-items:end;text-align:right}
.hero aside .k{padding:18px 20px;border:1px solid var(--line);border-radius:18px;background:rgba(12,24,23,.55);backdrop-filter:blur(8px);max-width:300px;text-align:left;display:flex;gap:14px;align-items:center}
.hero aside .k img{width:56px;height:56px;border-radius:12px;object-fit:cover;background:#fff}
.hero aside .k b{display:block;font-weight:600;font-size:14px;line-height:1.3}.hero aside .k small{color:var(--mute);font-size:12px}
.hero aside .scroll{font:600 11px/1 Manrope;letter-spacing:.22em;text-transform:uppercase;color:var(--mute);display:flex;gap:10px;align-items:center}
.hero aside .scroll i{width:1px;height:48px;background:linear-gradient(var(--aqua),transparent);display:block;animation:fall 2s infinite}
@keyframes fall{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
.hero .caps,.hero h1,.hero .lead,.hero .cta,.hero aside{animation:up 1.2s cubic-bezier(.2,.7,.2,1) both}
.hero h1{animation-delay:.15s}.hero .lead{animation-delay:.3s}.hero .cta{animation-delay:.45s}.hero aside{animation-delay:.6s}
@keyframes up{from{opacity:0;transform:translateY(30px)}}
.trustbar{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--bg2)}
.trustbar .wrap{display:grid;grid-template-columns:repeat(3,1fr)}
.trustbar div{display:flex;gap:14px;align-items:center;padding:22px 24px 22px 0;color:var(--mute);font-size:14px;border-right:1px solid var(--line)}
.trustbar div:nth-child(n+2){padding-left:24px}.trustbar div:last-child{border-right:0}
.trustbar svg{flex:none;color:var(--aqua);width:22px;height:22px}
.trustbar b{display:block;color:var(--ink);font-weight:600}

/* проблемы – список с картинкой за курсором */
.plist{position:relative}
.plist li{border-top:1px solid var(--line)}
.plist li:last-child{border-bottom:1px solid var(--line)}
.plist a{display:grid;grid-template-columns:70px 1fr auto;gap:24px;align-items:center;padding:30px 0;transition:padding .4s cubic-bezier(.2,.7,.2,1)}
.plist a:hover{padding-left:16px}
.plist .n{font:300 15px Unbounded;color:var(--mute)}
.plist h3{font:300 clamp(26px,3.4vw,50px)/1.05 Unbounded;letter-spacing:-.02em;transition:color .3s}
.plist a:hover h3{color:var(--aqua)}
.plist p{color:var(--mute);margin-top:6px;font-size:15px}
.plist .go{width:52px;height:52px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;transition:.3s}
.plist a:hover .go{background:var(--aqua);border-color:var(--aqua);color:#031012;transform:rotate(-45deg)}
.plist .mimg{display:none}
.float{position:fixed;left:0;top:0;width:280px;aspect-ratio:1;border-radius:20px;overflow:hidden;pointer-events:none;z-index:5;opacity:0;transform:translate(-50%,-50%) scale(.85) rotate(-4deg);transition:opacity .35s,transform .5s cubic-bezier(.2,.7,.2,1);box-shadow:0 40px 80px -20px rgba(0,0,0,.6)}
.float.on{opacity:1;transform:translate(-50%,-50%) scale(1) rotate(0)}
.float img{width:100%;height:100%;object-fit:cover}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}
.chips a{padding:10px 16px;border:1px solid var(--line);border-radius:999px;font-size:14px;color:var(--mute);transition:.25s}
.chips a:hover{border-color:var(--aqua);color:var(--aqua)}

/* врач */
.doctor{background:var(--bg2)}
.doctor .wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,100px);align-items:center}
.doctor .ph{position:relative;aspect-ratio:1;border-radius:50%;overflow:hidden;max-width:520px;margin:0 auto}
.doctor .ph img{width:100%;height:100%;object-fit:cover;object-position:60% 15%;filter:saturate(.85) contrast(1.05)}
.doctor .ph::after{content:"";position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 0 1px rgba(53,195,214,.5),inset 0 0 120px rgba(7,16,15,.6)}
.doctor .ring{position:absolute;inset:-26px;border-radius:50%;border:1px dashed rgba(53,195,214,.35);animation:spin 40s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.doctor h2{margin:16px 0 22px}
.doctor h2 em{font-style:normal;color:var(--aqua)}
.doctor p{color:var(--mute);font-size:17px;margin-bottom:30px;max-width:34em}
.facts{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px;padding-top:28px;border-top:1px solid var(--line)}
.facts b{display:block;font:300 36px/1 Unbounded;margin-bottom:8px;color:var(--aqua)}
.facts small{font-size:14px;color:var(--mute)}

/* лента хитов */
.rail-wrap{overflow:hidden;margin:0 -32px;padding:0 32px}
.rail{display:flex;gap:20px;overflow-x:auto;scrollbar-width:none;cursor:grab;user-select:none;padding-bottom:6px}
.rail::-webkit-scrollbar{display:none}
.rail.drag{cursor:grabbing;scroll-snap-type:none}
.card{flex:0 0 clamp(240px,22vw,320px);display:grid;grid-template-rows:auto auto 1fr auto;gap:8px}
.card .pic{display:block;aspect-ratio:1;border-radius:22px;overflow:hidden;background:#f3f6f6;position:relative}
.card .pic img{width:100%;height:100%;object-fit:cover;transition:transform .9s cubic-bezier(.2,.7,.2,1)}
.card:hover .pic img{transform:scale(1.06)}
.card .tag{font:600 11px/1 Manrope;letter-spacing:.16em;text-transform:uppercase;color:var(--aqua);margin-top:8px}
.card h3{font:500 15px/1.4 Manrope}
.card .row{display:flex;justify-content:space-between;align-items:center;padding-top:6px}
.price{font:600 18px/1 Manrope}.price small{font-size:12px;color:var(--mute);font-weight:400}
.add{width:40px;height:40px;border-radius:50%;border:1px solid var(--line);background:transparent;color:var(--ink);display:grid;place-items:center;transition:.25s}
.add:hover{background:var(--aqua);border-color:var(--aqua);color:#031012;transform:rotate(90deg)}
.rnav{display:flex;gap:8px}
.rnav button{width:48px;height:48px;border-radius:50%;border:1px solid var(--line);background:transparent;color:var(--ink);display:grid;place-items:center;transition:.25s}
.rnav button:hover{background:var(--ink);color:var(--bg)}
.hint{font-size:13px;color:var(--mute);margin-top:18px;display:flex;gap:10px;align-items:center}

/* бренды бегущей строкой */
.marq{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:28px 0;overflow:hidden;background:var(--bg2)}
.marq .track{display:flex;gap:0;width:max-content;animation:marq 40s linear infinite}
.marq:hover .track{animation-play-state:paused}
@keyframes marq{to{transform:translateX(-50%)}}
.marq a{display:flex;align-items:center;gap:18px;padding:0 40px;border-right:1px solid var(--line);white-space:nowrap}
.marq b{font:300 clamp(22px,2.4vw,34px) Unbounded;letter-spacing:-.02em}
.marq small{color:var(--mute);font-size:13px}
.marq img{width:54px;height:54px;border-radius:12px;object-fit:cover}

/* новинки */
.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:24px 20px}
.grid4 .card{flex:none}

/* путь */
.path .wrap>p{color:var(--mute);max-width:48em;font-size:17px;margin-bottom:48px}
.tl{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;position:relative;padding-top:34px}
.tl::before{content:"";position:absolute;left:0;right:0;top:6px;height:1px;background:var(--line)}
.tl::after{content:"";position:absolute;left:0;top:6px;height:1px;width:0;background:var(--aqua);transition:width 2.4s cubic-bezier(.2,.7,.2,1)}
.tl.in::after{width:100%}
.tl li{position:relative}
.tl li::before{content:"";position:absolute;left:0;top:-34px;width:13px;height:13px;border-radius:50%;background:var(--bg);border:1px solid var(--aqua);transition:background .4s}
.tl.in li::before{background:var(--aqua)}
.tl .m{display:block;font:600 11px/1 Manrope;letter-spacing:.2em;text-transform:uppercase;color:var(--aqua);margin-bottom:12px}
.tl b{display:block;font:300 22px/1.2 Unbounded;margin-bottom:10px;letter-spacing:-.02em}
.tl small{color:var(--mute);font-size:14px}

/* статьи */
.posts{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.post{display:grid;gap:14px;padding:16px;border:1px solid var(--line);border-radius:24px;transition:border-color .3s,transform .5s}
.post:hover{border-color:rgba(53,195,214,.5);transform:translateY(-4px)}
.post .im{aspect-ratio:16/10;border-radius:14px;overflow:hidden}
.post img{width:100%;height:100%;object-fit:cover;transition:transform .9s}
.post:hover img{transform:scale(1.05)}
.post .meta{display:flex;gap:12px;font-size:13px;color:var(--mute)}.post .meta b{color:var(--aqua);font-weight:600}
.post h3{font:500 clamp(17px,1.3vw,20px)/1.35 Manrope;padding-bottom:6px}

/* faq + о магазине */
.faq .wrap{display:grid;grid-template-columns:1fr 1.5fr;gap:clamp(40px,6vw,100px);align-items:start}
details{border-top:1px solid var(--line)}
details:last-child{border-bottom:1px solid var(--line)}
summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:20px;padding:24px 0;font:500 18px/1.35 Manrope}
summary::-webkit-details-marker{display:none}
summary span{flex:none;width:34px;height:34px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;transition:.3s}
details[open] summary span{transform:rotate(45deg);background:var(--aqua);border-color:var(--aqua);color:#031012}
details p{padding:0 0 24px;color:var(--mute);max-width:60ch}
.about{background:var(--bg2)}
.about .wrap{display:grid;grid-template-columns:1.2fr 1fr;gap:clamp(40px,6vw,100px)}
.about h2{font-size:clamp(26px,2.6vw,38px);margin:16px 0 20px}
.about .lead{color:var(--mute);font-size:17px;margin-bottom:24px}
.about .tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px}
.about .tags span{padding:8px 14px;border-radius:999px;border:1px solid rgba(53,195,214,.4);color:var(--aqua);font-size:14px}
.about h3{font:500 18px Manrope;margin-bottom:14px;color:var(--ink)}
.about .list{display:grid;gap:10px;margin-bottom:32px}
.about .list li{display:flex;gap:12px;color:var(--mute);font-size:15px}
.about .list svg{flex:none;color:var(--aqua);margin-top:4px}
.steps li{display:grid;grid-template-columns:40px 1fr;gap:12px;padding:14px 0;border-top:1px solid var(--line)}
.steps em{font:300 20px/1.3 Unbounded;color:var(--aqua);font-style:normal}
.steps b{display:block;font-weight:600}.steps small{color:var(--mute);font-size:14px}

/* подвал */
footer{padding:clamp(56px,7vw,96px) 0 32px;border-top:1px solid var(--line);font-size:14px;color:var(--mute)}
footer .cols{display:grid;grid-template-columns:1.4fr 1fr 1.2fr 1fr 1fr;gap:32px;padding-bottom:40px;border-bottom:1px solid var(--line)}
footer h4{font:600 11px/1 Manrope;letter-spacing:.2em;text-transform:uppercase;color:var(--ink);margin-bottom:16px}
footer li a{display:block;padding:4px 0}footer li a:hover{color:var(--aqua)}
footer .contact a{display:flex;gap:10px;align-items:center;color:var(--ink);font-size:16px;padding:3px 0}
footer .hrs{margin-top:10px;display:grid;gap:3px}
footer .legal{padding-top:24px;display:grid;gap:6px;font-size:12px;color:#6b7f7e}
.flogo{height:38px;width:auto;margin-bottom:18px}

@media(max-width:1100px){.grid4{grid-template-columns:repeat(2,1fr)}.posts{grid-template-columns:1fr}footer .cols{grid-template-columns:1fr 1fr}.tl{grid-template-columns:1fr 1fr}.tl::before,.tl::after{display:none}.tl li::before{display:none}.tl{padding-top:0}}
@media(max-width:900px){.menu{display:none}.burger{display:grid}.hero .wrap{grid-template-columns:1fr}.hero aside{justify-items:start;text-align:left}.hero aside .scroll{display:none}.hero{padding-top:120px}
  .trustbar .wrap{grid-template-columns:1fr}.trustbar div{border-right:0;border-bottom:1px solid var(--line);padding:16px 0!important}.trustbar div:last-child{border-bottom:0}
  .plist a{grid-template-columns:1fr auto;gap:16px;padding:22px 0}.plist .n{display:none}.plist .mimg{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;object-position:center 70%;border-radius:14px;grid-column:1/-1;order:-1}.float{display:none}
  .doctor .wrap,.faq .wrap,.about .wrap{grid-template-columns:1fr}.doctor .ph{max-width:320px}.facts{gap:12px}.facts b{font-size:28px}
  .wrap{padding:0 20px}.rail-wrap{margin:0 -20px;padding:0 20px}.sec-head{flex-direction:column;align-items:flex-start;gap:12px}}
@media(max-width:560px){.grid4{grid-template-columns:1fr 1fr;gap:16px 12px}.card{flex-basis:72vw}.hero h1{font-size:40px}.tl{grid-template-columns:1fr}.marq a{padding:0 22px}}
</style>
</head>
<body>
<header class="hdr" id="hdr"><div class="wrap">
  <a class="logo" href="${SC.site}"><img src="${SC.logoWhite}" alt="TRIHOLOGIC"></a>
  <ul class="menu">${SC.nav.map(n => `<li><a href="${n.href}"${n.t === 'Главная' ? ' aria-current="page"' : ''}>${n.t}</a></li>`).join('')}</ul>
  <div class="tools">
    <a href="${SC.phoneHref}" aria-label="Позвонить">${icon.phone}</a>
    <a href="${SC.account}" aria-label="Кабинет">${icon.user}</a>
    <a href="${SC.cart}" aria-label="Корзина">${icon.bag}<em>0</em></a>
    <button class="burger" type="button" aria-label="Меню"><svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
  </div>
</div></header>

<section class="hero" id="top">
  <canvas id="hair" aria-hidden="true"></canvas>
  <div class="wrap">
    <div>
      <span class="caps">${SC.distributor}</span>
      <h1>Всё начинается<br><em>с корня</em></h1>
      <p class="lead">${SC.tagline.charAt(0).toUpperCase() + SC.tagline.slice(1)}. Подобраны практикующим врачом-трихологом: выпадение, алопеция, перхоть, истончение</p>
      <div class="cta"><a class="btn aqua" href="#problems">Подобрать по проблеме ${icon.arrow}</a><a class="btn ghost" href="${SC.catalog}">Каталог</a></div>
    </div>
    <aside>
      <a class="k" href="${SC.hits[3].href}"><img src="${SC.hits[3].img}" alt=""><div><b>Экзосомно-пептидный стимулятор БИО-ЭНЕРДЖИ</b><small>хит · ${SC.hits[3].price} BYN</small></div></a>
      <span class="scroll"><i></i>листайте</span>
    </aside>
  </div>
</section>

<div class="trustbar"><div class="wrap">
  <div>${icon.stetho}<div><b>Основатель – врач-трихолог</b>средства из реальной практики</div></div>
  <div>${icon.shield}<div><b>Только оригинал</b>официальные поставщики и бренды</div></div>
  <div>${icon.truck}<div><b>Доставка по Беларуси</b>курьер по Минску, почта по стране</div></div>
</div></div>

<section class="problems" id="problems"><div class="wrap">
  <div class="sec-head"><div><span class="caps">Подобрать уход</span><h2 style="margin-top:12px">С какой проблемой пришли?</h2></div><a class="more" href="${SC.site}product-category/naznachenie/">Все назначения ${icon.arrow}</a></div>
  <ul class="plist" id="plist">${SC.problems.map(p => `<li class="rv"><a href="${p.href}" data-img="${p.img}"><img class="mimg" src="${p.img}" alt="" loading="lazy"><span class="n">${p.n}</span><div><h3>${p.t}</h3><p>${p.sub}</p></div><span class="go">${icon.arrow}</span></a></li>`).join('')}</ul>
  <div class="float" id="float"><img src="${SC.problems[0].img}" alt=""></div>
  <div class="chips rv">${SC.moreProblems.map(m => `<a href="${m.href}">${m.t}</a>`).join('')}</div>
</div></section>

<section class="doctor"><div class="wrap">
  <div class="ph rv"><span class="ring"></span><img src="${SC.heroPhoto}" alt="" loading="lazy"></div>
  <div class="rv">
    <span class="caps">Почему TRIHOLOGIC</span>
    <h2>Магазин, который <em>собрал врач</em></h2>
    <p>Основатель TRIHOLOGIC – практикующий врач-трихолог. Поэтому ассортимент сформирован не как витрина косметики, а как система решений, которые реально используются в работе с пациентами</p>
    <a class="btn" href="#consult">Бесплатная консультация ${icon.arrow}</a>
    <div class="facts"><div><b>6</b><small>профессиональных брендов, только официальные поставщики</small></div><div><b>12</b><small>назначений в каталоге: от АГА до чувствительной кожи</small></div><div><b>3–4</b><small>месяца до честной первой оценки результата</small></div></div>
  </div>
</div></section>

<section class="hits"><div class="wrap">
  <div class="sec-head"><h2>Хиты</h2><div class="rnav"><button type="button" data-rail="prev" aria-label="Назад">${icon.arrowL}</button><button type="button" data-rail="next" aria-label="Вперёд">${icon.arrow}</button></div></div>
  <div class="rail-wrap"><div class="rail" id="rail">${SC.hits.map(card).join('')}</div></div>
  <p class="hint">${icon.arrowL} тяните ленту мышью или пальцем ${icon.arrow}</p>
</div></section>

<div class="marq" aria-label="Бренды"><div class="track">${[...SC.brands, ...SC.brands].map(b => `<a href="${b.href}"><img src="${b.img}" alt="" loading="lazy"><div><b>${b.t}</b><br><small>${b.sub}</small></div></a>`).join('')}</div></div>

<section class="news"><div class="wrap">
  <div class="sec-head"><h2>Новинки</h2><a class="more" href="${SC.catalog}">Весь каталог ${icon.arrow}</a></div>
  <div class="grid4">${SC.news.map(p => card(p).replace('<article class="card">', '<article class="card rv">')).join('')}</div>
</div></section>

<section class="path"><div class="wrap">
  <span class="caps">Как это работает</span>
  <h2 style="margin:12px 0 18px">Путь к результату</h2>
  <p>Реакция на средства индивидуальна, а эффект при выпадении оценивают не раньше чем через 3–4 месяца. Мы говорим о сроках честно и сопровождаем на каждом этапе</p>
  <ol class="tl" id="tl">
    <li><span class="m">Неделя 0</span><b>Подбор схемы</b><small>по проблеме, давности и назначению врача. Бесплатно, по телефону или в мессенджере</small></li>
    <li><span class="m">Месяц 1</span><b>Кожа головы</b><small>очищение, снятие зуда и жирности, подготовка к активным средствам</small></li>
    <li><span class="m">Месяцы 2–3</span><b>Активная фаза</b><small>лосьоны и стимуляторы роста ежедневно, фото для сравнения раз в месяц</small></li>
    <li><span class="m">Месяц 4</span><b>Оценка результата</b><small>трихоскопия или фототрихограмма у врача, корректировка схемы</small></li>
  </ol>
</div></section>

<section class="tips"><div class="wrap">
  <div class="sec-head"><h2>Советы трихолога</h2><a class="more" href="${SC.tips}">Все статьи ${icon.arrow}</a></div>
  <div class="posts">${SC.posts.map(p => `<a class="post rv" href="${p.href}"><div class="im"><img src="${p.img}" alt="" loading="lazy"></div><div class="meta"><span>${p.date}</span><b>${p.cat}</b></div><h3>${p.t}</h3></a>`).join('')}</div>
</div></section>

<section class="faq" id="consult"><div class="wrap">
  <div class="rv"><span class="caps">FAQ</span><h2 style="margin:12px 0 16px">Частые вопросы</h2><p style="color:var(--mute);margin-bottom:22px">Не нашли ответ – позвоните, подскажем за пять минут</p><a class="btn ghost" href="${SC.phoneHref}">${icon.phone} ${SC.phone}</a></div>
  <div class="rv">${SC.faq.map((f, i) => `<details${i === 0 ? ' open' : ''}><summary>${f.q}<span>${icon.plus}</span></summary><p>${f.a}</p></details>`).join('')}</div>
</div></section>

<section class="about"><div class="wrap">
  <div class="rv"><span class="caps">О магазине</span><h2>${SC.about.h}</h2><p class="lead">${SC.about.lead}</p><div class="tags">${SC.about.problems.map(p => `<span>${p}</span>`).join('')}</div><p style="color:var(--mute);font-size:15px">${SC.about.actives}</p></div>
  <div class="rv"><h3>Кому подойдёт</h3><ul class="list">${SC.about.forWhom.map(f => `<li>${icon.check}<span>${f}</span></li>`).join('')}</ul><h3>Как купить</h3><ol class="steps">${SC.about.howToBuy.map(([b, s], i) => `<li><em>0${i + 1}</em><div><b>${b}</b><small>${s}</small></div></li>`).join('')}</ol></div>
</div></section>

<footer><div class="wrap">
  <div class="cols">
    <div><img class="flogo" src="${SC.logoWhite}" alt="TRIHOLOGIC"><div class="contact"><a href="${SC.phoneHref}">${icon.phone}${SC.phone}</a><a href="mailto:${SC.email}">${icon.mail}${SC.email}</a><a href="${SC.instagramHref}">${icon.inst}${SC.instagram}</a><div class="hrs">${SC.hours.map(([d, h]) => `<span>${d}: ${h}</span>`).join('')}</div></div></div>
    ${SC.catalogGroups.slice(0, 3).map(g => `<div><h4>${g.t}</h4><ul>${g.items.map(i => `<li><a href="${i.href}">${i.t}</a></li>`).join('')}</ul></div>`).join('')}
    <div><h4>Информация</h4><ul><li><a href="${SC.delivery}">Доставка</a></li><li><a href="${SC.payment}">Оплата</a></li><li><a href="${SC.returns}">Возврат товара</a></li><li><a href="${SC.tips}">Советы трихолога</a></li><li><a href="${SC.catalogGroups[3].items[0].href}">Расчёски</a></li></ul></div>
  </div>
  <div class="legal">${legalHtml()}</div>
</div></footer>

${switcher('wow.html')}
<script>
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* появление блоков */
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.rv,#tl').forEach(function(el,i){el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)});
  /* шапка */
  var hdr=document.getElementById('hdr');addEventListener('scroll',function(){hdr.classList.toggle('on',scrollY>40)},{passive:true});

  /* волосы: из кожи головы (нижний край) растут пряди, качаются и тянутся к курсору */
  var cv=document.getElementById('hair'),ctx=cv.getContext('2d'),W,H,S=[],mx=-9999,my=-9999,t0=performance.now(),dpr=Math.min(2,devicePixelRatio||1),raf;
  function build(){S=[];var n=W<700?55:W<1200?110:160;for(var i=0;i<n;i++){var x=(i+Math.random())*W/n;S.push({x:x,len:H*(0.32+Math.random()*0.5),ph:Math.random()*6.28,sp:0.35+Math.random()*0.5,bend:(Math.random()-0.5)*140,w:0.5+Math.random()*1.3,a:0.35+Math.random()*0.5})}}
  function resize(){var r=cv.parentElement.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);build()}
  function draw(now){var t=(now-t0)/1000,g=Math.min(1,t/2.4),e=1-Math.pow(1-g,3);ctx.clearRect(0,0,W,H);
    for(var i=0;i<S.length;i++){var s=S[i],L=s.len*e,sway=Math.sin(t*s.sp+s.ph)*16,tx=s.x+s.bend+sway,ty=H-L,dx=mx-tx,dy=my-ty,d=Math.sqrt(dx*dx+dy*dy),inf=Math.max(0,1-d/360);inf*=inf;
      tx+=dx*inf*0.45;ty+=dy*inf*0.45;var cx=s.x+sway*0.5+s.bend*0.35,cy=H-L*0.55;
      var gr=ctx.createLinearGradient(0,H,0,ty);gr.addColorStop(0,'rgba(53,195,214,0)');gr.addColorStop(0.35,'rgba(53,195,214,'+(s.a*0.5+inf*0.5)+')');gr.addColorStop(1,'rgba(233,246,248,'+Math.min(1,s.a+inf*0.6)+')');
      ctx.strokeStyle=gr;ctx.lineWidth=s.w+inf*1.4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(s.x,H+6);ctx.quadraticCurveTo(cx,cy,tx,ty);ctx.stroke();
      if(inf>0.02){ctx.fillStyle='rgba(233,246,248,'+inf*0.9+')';ctx.beginPath();ctx.arc(tx,ty,1.2+inf*1.6,0,6.28);ctx.fill()}}
    if(!reduce)raf=requestAnimationFrame(draw)}
  resize();addEventListener('resize',resize);
  cv.parentElement.addEventListener('pointermove',function(ev){var r=cv.getBoundingClientRect();mx=ev.clientX-r.left;my=ev.clientY-r.top});
  cv.parentElement.addEventListener('pointerleave',function(){mx=-9999;my=-9999});
  if(reduce){t0=-1e9;draw(performance.now())}else{raf=requestAnimationFrame(draw)}
  /* не рисуем, когда первый экран вне окна */
  new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){if(!raf&&!reduce)raf=requestAnimationFrame(draw)}else{cancelAnimationFrame(raf);raf=0}})}).observe(cv);

  /* картинка за курсором в списке проблем */
  var fl=document.getElementById('float'),fim=fl.querySelector('img'),pl=document.getElementById('plist'),fx=0,fy=0,tx=0,ty=0,on=false;
  pl.querySelectorAll('a').forEach(function(a){a.addEventListener('pointerenter',function(){if(matchMedia('(hover:hover)').matches){fim.src=a.dataset.img;fl.classList.add('on');on=true}});a.addEventListener('pointerleave',function(){fl.classList.remove('on');on=false})});
  pl.addEventListener('pointermove',function(ev){tx=ev.clientX+150;ty=ev.clientY});
  (function loop(){fx+=(tx-fx)*0.14;fy+=(ty-fy)*0.14;if(on||Math.abs(tx-fx)>0.5){fl.style.left=fx+'px';fl.style.top=fy+'px'}requestAnimationFrame(loop)})();

  /* лента хитов: кнопки и перетаскивание */
  var rail=document.getElementById('rail'),down=false,sx=0,sl=0,moved=false;
  document.querySelectorAll('[data-rail]').forEach(function(b){b.addEventListener('click',function(){var w=rail.querySelector('.card').getBoundingClientRect().width+20;rail.scrollBy({left:b.dataset.rail==='next'?w*2:-w*2,behavior:'smooth'})})});
  rail.addEventListener('pointerdown',function(e){down=true;moved=false;sx=e.clientX;sl=rail.scrollLeft;rail.classList.add('drag')});
  addEventListener('pointermove',function(e){if(!down)return;var d=e.clientX-sx;if(Math.abs(d)>4)moved=true;rail.scrollLeft=sl-d});
  addEventListener('pointerup',function(){down=false;rail.classList.remove('drag')});
  rail.addEventListener('click',function(e){if(moved){e.preventDefault();e.stopPropagation()}},true);
})();
</script>
</body>
</html>`;
