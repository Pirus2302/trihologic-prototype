/* Вариант 1 «Кабинет» – ближе всего к текущему сайту: светлый, чёрный + аква из логотипа, тот же порядок блоков.
   Чище сетка, подбор по проблеме и аргумент «основатель – трихолог» подняты наверх */
const { SC, icon, esc, price, switcher, legalHtml } = require('./data');

const mega = () => `<div class="mega"><div class="wrap mega-in">${SC.catalogGroups.map(g => `<div><h4><a href="${SC.site + g.href}">${g.t}</a></h4><ul>${g.items.map(i => `<li><a href="${i.href}">${i.t}</a></li>`).join('')}</ul></div>`).join('')}
<div class="mega-promo"><span class="caps">Не знаете, что выбрать?</span><p>Подберём уход под вашу ситуацию бесплатно</p><a class="btn sm" href="#consult">Получить подбор ${icon.arrow}</a></div></div></div>`;

const navHtml = () => SC.nav.map(n => n.mega
  ? `<li class="has-mega"><a href="${n.href}">${n.t}<i></i></a>${mega()}</li>`
  : `<li><a href="${n.href}"${n.t === 'Главная' ? ' aria-current="page"' : ''}>${n.t}</a></li>`).join('');

const card = p => `<article class="card">
  <a class="pic" href="${p.href}"><img src="${p.img}" alt="${esc(p.t)}" loading="lazy" width="570" height="570"></a>
  <span class="tag">${p.tag}</span>
  <h3><a href="${p.href}">${esc(p.t)}</a></h3>
  <div class="row"><span class="price">${price(p.price)}</span><button class="add" type="button" aria-label="В корзину">${icon.bag}<span>В корзину</span></button></div>
</article>`;

const head = (h, link, linkText = 'Весь каталог') => `<div class="sec-head"><h2>${h}</h2>${link ? `<a class="more" href="${link}">${linkText} ${icon.arrow}</a>` : ''}</div>`;

module.exports = () => `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>TRIHOLOGIC – вариант 1 «Кабинет»</title>
<link rel="icon" href="${SC.site}wp-content/uploads/2026/03/cropped-favicon-32x32.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet">
<style>
:root{--bg:#fff;--soft:#f2f6f7;--soft2:#e7eff1;--ink:#121a1b;--mute:#5a6668;--aqua:#1a9cb0;--aqua-d:#11788a;--aqua-l:#d8eff3;--line:#e2e8e9;--wrap:1320px;--r:18px}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--ink);font:400 16px/1.6 "DM Sans",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
ul{list-style:none;padding:0}
button{font:inherit;cursor:pointer}
h1,h2,h3.serif{font-family:"Cormorant Garamond",Georgia,serif;font-weight:400;line-height:1.1;letter-spacing:-.01em}
h2{font-size:clamp(32px,3.4vw,46px)}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 32px}
.caps{font:600 11px/1 "DM Sans";letter-spacing:.18em;text-transform:uppercase;color:var(--aqua-d)}
.btn{display:inline-flex;align-items:center;gap:10px;padding:16px 26px;border-radius:999px;background:var(--ink);color:#fff;font:500 14px/1 "DM Sans";border:1px solid var(--ink);transition:background .25s,border-color .25s,transform .25s}
.btn:hover{background:var(--aqua-d);border-color:var(--aqua-d)}
.btn.ghost{background:transparent;color:var(--ink)}.btn.ghost:hover{background:var(--ink);color:#fff}
.btn.aqua{background:var(--aqua);border-color:var(--aqua)}.btn.aqua:hover{background:var(--aqua-d)}
.btn.sm{padding:12px 18px;font-size:13px}
.btn svg{transition:transform .25s}.btn:hover svg{transform:translateX(3px)}
section{padding:clamp(56px,7vw,104px) 0}
.sec-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:clamp(28px,3vw,44px)}
.more{display:inline-flex;align-items:center;gap:8px;font-weight:500;color:var(--aqua-d);border-bottom:1px solid transparent;transition:border-color .2s}.more:hover{border-color:currentColor}
.rv{opacity:0;transform:translateY(22px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}
.rv.in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.rv{opacity:1;transform:none;transition:none}*{animation:none!important;transition:none!important}}

/* верхняя строка */
.top{background:var(--ink);color:#d9e4e6;font-size:13px}
.top .wrap{display:flex;justify-content:space-between;align-items:center;min-height:38px;gap:16px}
.top .l,.top .r{display:flex;gap:24px;align-items:center}
.top a{display:inline-flex;align-items:center;gap:7px}.top a:hover{color:#fff}
.top b{font-weight:500;color:#fff}

/* шапка */
.hdr{position:sticky;top:0;z-index:60;background:rgba(255,255,255,.94);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.hdr .wrap{display:flex;align-items:center;gap:40px;min-height:78px}
.logo img{height:34px;width:auto}
.menu{display:flex;gap:30px;flex:1}
.menu>li>a{display:inline-flex;align-items:center;gap:6px;padding:29px 0;font-weight:500;font-size:15px;position:relative}
.menu>li>a::after{content:"";position:absolute;left:0;right:100%;bottom:22px;height:2px;background:var(--aqua);transition:right .3s}
.menu>li:hover>a::after,.menu>li>a[aria-current]::after{right:0}
.menu i{width:6px;height:6px;border-right:1.5px solid;border-bottom:1.5px solid;transform:rotate(45deg) translateY(-2px)}
.mega{position:absolute;left:0;right:0;top:100%;background:#fff;border-bottom:1px solid var(--line);box-shadow:0 30px 60px -20px rgba(18,26,27,.18);opacity:0;visibility:hidden;transform:translateY(6px);transition:.25s}
.has-mega:hover .mega,.has-mega:focus-within .mega{opacity:1;visibility:visible;transform:none}
.mega-in{display:grid;grid-template-columns:1.1fr 1.4fr .9fr .8fr 1.2fr;gap:32px;padding:32px}
.mega h4{font:600 11px/1 "DM Sans";letter-spacing:.18em;text-transform:uppercase;color:var(--mute);margin-bottom:14px}
.mega li a{display:block;padding:5px 0;font-size:14px;color:var(--ink)}.mega li a:hover{color:var(--aqua-d)}
.mega-promo{background:var(--soft);border-radius:var(--r);padding:24px;display:flex;flex-direction:column;gap:12px;align-self:start}
.mega-promo p{font-family:"Cormorant Garamond",serif;font-size:24px;line-height:1.15}
.tools{display:flex;gap:18px;align-items:center}
.tools a,.tools button{position:relative;background:none;border:0;color:inherit;display:grid;place-items:center;width:40px;height:40px;border-radius:50%;transition:background .2s}
.tools a:hover,.tools button:hover{background:var(--soft)}
.tools em{position:absolute;top:4px;right:2px;min-width:17px;height:17px;border-radius:9px;background:var(--aqua);color:#fff;font:600 10px/17px "DM Sans";text-align:center;font-style:normal}
.burger{display:none}

/* первый экран */
.hero{padding:clamp(32px,4vw,56px) 0 0}
.hero .wrap{display:grid;grid-template-columns:1.05fr 1fr;gap:clamp(32px,5vw,80px);align-items:center}
.hero h1{font-size:clamp(42px,5.2vw,78px);margin:18px 0 20px;max-width:12em}
.hero h1 em{font-style:italic;color:var(--aqua-d)}
.hero p.lead{font-size:18px;color:var(--mute);max-width:34em;margin-bottom:32px}
.hero .cta{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:40px}
.trust{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding-top:28px;border-top:1px solid var(--line)}
.trust div{display:flex;gap:12px;align-items:flex-start;font-size:14px;color:var(--mute);line-height:1.4}
.trust svg{flex:none;color:var(--aqua);width:22px;height:22px}
.trust b{display:block;color:var(--ink);font-weight:500;margin-bottom:2px}
.photo{position:relative;aspect-ratio:5/6;border-radius:0 160px 0 160px;overflow:hidden;background:var(--soft2)}
.photo img{width:100%;height:100%;object-fit:cover;object-position:60% 20%;transform:scale(1.04);animation:ph 2.4s cubic-bezier(.2,.7,.2,1) both}
@keyframes ph{from{transform:scale(1.12)}}
.photo .chip{position:absolute;left:22px;bottom:22px;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);border-radius:14px;padding:14px 18px;display:flex;gap:12px;align-items:center;box-shadow:0 10px 30px rgba(18,26,27,.12);animation:up 1s .5s both}
.photo .chip img{width:46px;height:46px;border-radius:10px;object-fit:cover;transform:none;animation:none}
.photo .chip b{display:block;font-weight:500;font-size:14px}.photo .chip span{font-size:12px;color:var(--mute)}
@keyframes up{from{opacity:0;transform:translateY(16px)}}
.hero .caps,.hero h1,.hero .lead,.hero .cta,.hero .trust{animation:up .9s both}
.hero h1{animation-delay:.1s}.hero .lead{animation-delay:.2s}.hero .cta{animation-delay:.3s}.hero .trust{animation-delay:.45s}

/* проблемы */
.problems{background:var(--bg)}
.pgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.ptile{position:relative;border-radius:var(--r);overflow:hidden;background:var(--soft);display:block;aspect-ratio:4/5}
.ptile img{width:100%;height:100%;object-fit:cover;object-position:center 70%;transition:transform .9s cubic-bezier(.2,.7,.2,1)}
.ptile:hover img{transform:scale(1.05)}
.ptile::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.0) 40%,rgba(255,255,255,.96) 78%)}
.ptile .n{position:absolute;left:18px;top:16px;z-index:2;font:500 13px "DM Sans";color:var(--aqua-d);background:#fff;border-radius:999px;padding:6px 10px}
.ptile .txt{position:absolute;left:20px;right:20px;bottom:20px;z-index:2}
.ptile h3{font:500 22px/1.15 "Cormorant Garamond",serif;margin-bottom:4px}
.ptile p{font-size:14px;color:var(--mute)}
.ptile .go{position:absolute;right:16px;bottom:16px;z-index:2;width:40px;height:40px;border-radius:50%;background:var(--ink);color:#fff;display:grid;place-items:center;transition:background .25s,transform .25s}
.ptile:hover .go{background:var(--aqua-d);transform:translateX(3px)}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
.chips a{padding:10px 16px;border:1px solid var(--line);border-radius:999px;font-size:14px;transition:.2s}
.chips a:hover{border-color:var(--aqua);color:var(--aqua-d);background:var(--aqua-l)}

/* почему + консультация */
.why{background:var(--soft);border-radius:32px;margin:0 32px}
.why .wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(32px,5vw,80px);align-items:center}
.why h2{margin:14px 0 18px}
.why .lead{color:var(--mute);font-size:17px;margin-bottom:28px}
.why ul{display:grid;gap:18px}
.why li{display:flex;gap:14px;align-items:flex-start}
.why li span{flex:none;width:44px;height:44px;border-radius:12px;background:#fff;display:grid;place-items:center;color:var(--aqua-d)}
.why li b{display:block;font-weight:500}.why li small{font-size:14px;color:var(--mute)}
.consult{background:var(--ink);color:#fff;border-radius:24px;padding:clamp(28px,3vw,44px)}
.consult h3{font-family:"Cormorant Garamond",serif;font-weight:400;font-size:clamp(28px,2.6vw,38px);line-height:1.1;margin:10px 0 12px}
.consult p{color:#aebcbf;margin-bottom:24px;font-size:15px}
.consult form{display:grid;gap:10px}
.consult input{width:100%;padding:15px 18px;border-radius:12px;border:1px solid #324244;background:#1c2628;color:#fff;font:inherit}
.consult input::placeholder{color:#7f8f92}
.consult .btn{justify-content:center;width:100%}
.consult small{color:#7f8f92;font-size:12px}

/* бренды */
.bgrid{display:grid;grid-template-columns:repeat(6,1fr);gap:16px}
.brand{display:grid;gap:12px}
.brand .im{aspect-ratio:1;border-radius:var(--r);overflow:hidden;background:var(--soft)}
.brand img{width:100%;height:100%;object-fit:cover;transition:transform .8s cubic-bezier(.2,.7,.2,1)}
.brand:hover img{transform:scale(1.06)}
.brand b{display:block;font-weight:500}.brand small{color:var(--mute);font-size:13px}

/* товары */
.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:24px 20px}
.card{display:grid;grid-template-rows:auto auto 1fr auto;gap:8px}
.card .pic{display:block;aspect-ratio:1;border-radius:var(--r);overflow:hidden;background:var(--soft);position:relative}
.card .pic img{width:100%;height:100%;object-fit:cover;mix-blend-mode:multiply;transition:transform .8s cubic-bezier(.2,.7,.2,1)}
.card:hover .pic img{transform:scale(1.05)}
.card .tag{font:600 11px/1 "DM Sans";letter-spacing:.14em;text-transform:uppercase;color:var(--aqua-d);margin-top:6px}
.card h3{font:500 15px/1.4 "DM Sans"}
.card .row{display:flex;justify-content:space-between;align-items:center;gap:12px;padding-top:6px}
.price{font:500 18px/1 "DM Sans"}.price small{font-size:12px;color:var(--mute);font-weight:400}
.add{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid var(--line);background:#fff;font-size:13px;font-weight:500;transition:.2s}
.add:hover{background:var(--ink);color:#fff;border-color:var(--ink)}
.hits{background:var(--bg)}
.news{background:var(--soft)}
.rail{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:8px;scrollbar-width:none}
.rail::-webkit-scrollbar{display:none}
.rail .card{flex:0 0 calc(25% - 15px);scroll-snap-align:start}
.rail .card .pic{background:#fff}
.rnav{display:flex;gap:8px}
.rnav button{width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:#fff;display:grid;place-items:center;transition:.2s}
.rnav button:hover{background:var(--ink);color:#fff;border-color:var(--ink)}

/* статьи */
.posts{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.post .im{aspect-ratio:16/10;border-radius:var(--r);overflow:hidden;margin-bottom:16px}
.post img{width:100%;height:100%;object-fit:cover;transition:transform .8s cubic-bezier(.2,.7,.2,1)}
.post:hover img{transform:scale(1.04)}
.post .meta{display:flex;gap:12px;font-size:13px;color:var(--mute);margin-bottom:8px}
.post .meta b{color:var(--aqua-d);font-weight:500}
.post h3{font:500 clamp(20px,1.6vw,24px)/1.25 "Cormorant Garamond",serif}

/* faq */
.faq{background:var(--soft)}
.faq .wrap{display:grid;grid-template-columns:1fr 1.6fr;gap:clamp(32px,5vw,80px);align-items:start}
.faq h2{margin:14px 0 14px}
.faq .side p{color:var(--mute);margin-bottom:22px}
details{border-top:1px solid #cfdadd}
details:last-child{border-bottom:1px solid #cfdadd}
summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:20px;padding:22px 0;font:500 18px/1.35 "DM Sans"}
summary::-webkit-details-marker{display:none}
summary span{flex:none;width:30px;height:30px;border-radius:50%;border:1px solid #cfdadd;display:grid;place-items:center;transition:transform .3s,background .3s}
details[open] summary span{transform:rotate(45deg);background:var(--ink);color:#fff;border-color:var(--ink)}
details p{padding:0 0 22px;color:var(--mute);max-width:60ch}

/* о магазине */
.about .wrap{display:grid;grid-template-columns:1.2fr 1fr;gap:clamp(32px,5vw,80px)}
.about h2{margin:14px 0 18px;font-size:clamp(28px,2.8vw,40px)}
.about .lead{font-size:17px;color:var(--mute);margin-bottom:24px}
.about .tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px}
.about .tags span{padding:8px 14px;border-radius:999px;background:var(--aqua-l);color:var(--aqua-d);font-size:14px;font-weight:500}
.about .act{color:var(--mute);font-size:15px}
.about h3{font:500 20px/1.2 "DM Sans";margin-bottom:14px}
.about .list{display:grid;gap:10px;margin-bottom:32px}
.about .list li{display:flex;gap:12px;align-items:flex-start;color:var(--mute);font-size:15px}
.about .list svg{flex:none;color:var(--aqua);margin-top:4px}
.steps{display:grid;gap:14px}
.steps li{display:grid;grid-template-columns:40px 1fr;gap:14px;align-items:start}
.steps em{font:400 26px/1 "Cormorant Garamond",serif;color:var(--aqua-d);font-style:normal}
.steps b{display:block;font-weight:500}.steps small{color:var(--mute);font-size:14px}

/* подвал */
footer{background:var(--ink);color:#aebcbf;padding:clamp(48px,6vw,80px) 0 32px;font-size:14px}
footer .cols{display:grid;grid-template-columns:1.4fr 1fr 1.2fr 1fr 1fr;gap:32px;padding-bottom:40px;border-bottom:1px solid #2a3739}
footer h4{font:600 11px/1 "DM Sans";letter-spacing:.18em;text-transform:uppercase;color:#fff;margin-bottom:16px}
footer li a{display:block;padding:4px 0}footer li a:hover{color:#fff}
footer .contact{display:grid;gap:10px}
footer .contact a{display:flex;gap:10px;align-items:center;color:#fff;font-size:16px}
footer .contact .hrs{margin-top:8px;display:grid;gap:4px}
footer .legal{padding-top:24px;display:grid;gap:6px;font-size:12px;color:#7f8f92}
footer .legal p{max-width:none}
.flogo{height:38px;width:auto;margin-bottom:18px}

@media(max-width:1100px){.mega-in{grid-template-columns:repeat(3,1fr)}.mega-promo{grid-column:span 3}.pgrid,.grid4{grid-template-columns:repeat(2,1fr)}.rail .card{flex-basis:calc(50% - 10px)}.bgrid{grid-template-columns:repeat(3,1fr)}footer .cols{grid-template-columns:1fr 1fr}}
@media(max-width:900px){.top .l span:nth-child(2),.top .r a:nth-child(2){display:none}.menu{display:none}.burger{display:grid}
  .hero .wrap{grid-template-columns:1fr}.photo{aspect-ratio:4/3;border-radius:0 80px 0 80px}.trust{grid-template-columns:1fr}
  .why{margin:0 16px}.why .wrap,.faq .wrap,.about .wrap{grid-template-columns:1fr}.posts{grid-template-columns:1fr}
  .wrap{padding:0 20px}.sec-head{flex-direction:column;align-items:flex-start;gap:12px}}
@media(max-width:560px){.pgrid,.grid4{grid-template-columns:1fr 1fr;gap:16px 12px}.rail .card{flex-basis:78%}.bgrid{grid-template-columns:1fr 1fr}.hero h1{font-size:40px}.card .add span{display:none}.card .add{padding:10px}}
</style>
</head>
<body>
<div class="top"><div class="wrap">
  <div class="l"><a href="${SC.phoneHref}">${icon.phone}<b>${SC.phone}</b></a><span>Пн–Пт 10:00–20:00, Сб 11:00–18:00</span></div>
  <div class="r"><span>Бесплатная доставка по Минску от 300 BYN</span><a href="${SC.instagramHref}">${icon.inst}${SC.instagram}</a></div>
</div></div>

<header class="hdr"><div class="wrap">
  <a class="logo" href="${SC.site}"><img src="${SC.logoBlack}" alt="TRIHOLOGIC"></a>
  <ul class="menu">${navHtml()}</ul>
  <div class="tools">
    <button type="button" aria-label="Поиск">${icon.search}</button>
    <a href="${SC.account}" aria-label="Кабинет">${icon.user}</a>
    <a href="${SC.cart}" aria-label="Корзина">${icon.bag}<em>0</em></a>
    <button class="burger" type="button" aria-label="Меню"><svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
  </div>
</div></header>

<section class="hero"><div class="wrap">
  <div>
    <span class="caps">${SC.distributor}</span>
    <h1>Средства для волос, которые <em>назначают трихологи</em></h1>
    <p class="lead">Профессиональная косметика для кожи головы и волос: выпадение, алопеция, перхоть, истончение. Подобрана практикующим врачом, а не «по популярности»</p>
    <div class="cta"><a class="btn aqua" href="#problems">Подобрать по проблеме ${icon.arrow}</a><a class="btn ghost" href="${SC.catalog}">Смотреть каталог</a></div>
    <div class="trust">
      <div>${icon.stetho}<div><b>Основатель – врач-трихолог</b>ассортимент из реальной практики</div></div>
      <div>${icon.shield}<div><b>Только оригинал</b>официальные поставщики и бренды</div></div>
      <div>${icon.truck}<div><b>Доставка по Беларуси</b>курьер по Минску, почта по стране</div></div>
    </div>
  </div>
  <div class="photo">
    <img src="${SC.heroPhoto}" alt="Здоровые волосы" fetchpriority="high">
    <div class="chip"><img src="${SC.hits[2].img}" alt=""><div><b>Три-Энерджи Фактор 5,5%</b><span>хит против выпадения · ${SC.hits[2].price} BYN</span></div></div>
  </div>
</div></section>

<section class="problems" id="problems"><div class="wrap">
  ${head('С какой проблемой пришли?', SC.site + 'product-category/naznachenie/', 'Все назначения')}
  <div class="pgrid">${SC.problems.map(p => `<a class="ptile rv" href="${p.href}"><img src="${p.img}" alt="" loading="lazy"><span class="n">${p.n}</span><div class="txt"><h3>${p.t}</h3><p>${p.sub}</p></div><span class="go">${icon.arrow}</span></a>`).join('')}</div>
  <div class="chips rv">${SC.moreProblems.map(m => `<a href="${m.href}">${m.t}</a>`).join('')}</div>
</div></section>

<section class="why" id="consult"><div class="wrap">
  <div class="rv">
    <span class="caps">Почему TRIHOLOGIC</span>
    <h2>Магазин, который собрал врач</h2>
    <p class="lead">Основатель TRIHOLOGIC – практикующий врач-трихолог. Поэтому каталог устроен не как витрина косметики, а как система решений для конкретных задач</p>
    <ul>
      <li><span>${icon.stetho}</span><div><b>Подбор по принципу назначения</b><small>средства те же, что в реальной работе с пациентами</small></div></li>
      <li><span>${icon.drop}</span><div><b>Клинически используемые активы</b><small>пептиды, стимуляторы роста, нейроактивные формулы</small></div></li>
      <li><span>${icon.shield}</span><div><b>Официальный дистрибьютор Time to Grow</b><small>и только официальные поставщики других брендов</small></div></li>
    </ul>
  </div>
  <div class="consult rv">
    <span class="caps" style="color:#7fd3df">Бесплатная консультация</span>
    <h3>Подберём уход под вашу ситуацию</h3>
    <p>Опишите проблему, перезвоним в рабочее время и предложим схему ухода. Если нужен очный приём трихолога, скажем честно</p>
    <form onsubmit="return false"><input type="text" placeholder="Имя"><input type="tel" placeholder="Телефон или Telegram"><input type="text" placeholder="Что беспокоит: выпадение, перхоть, истончение…"><button class="btn aqua" type="submit">Получить подбор ${icon.arrow}</button><small>Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</small></form>
  </div>
</div></section>

<section class="brands"><div class="wrap">
  ${head('Бренды', SC.site + 'catalog/', 'Весь каталог')}
  <div class="bgrid">${SC.brands.map(b => `<a class="brand rv" href="${b.href}"><div class="im"><img src="${b.img}" alt="${b.t}" loading="lazy"></div><div><b>${b.t}</b><small>${b.sub}</small></div></a>`).join('')}</div>
</div></section>

<section class="hits"><div class="wrap">
  ${head('Хиты', SC.catalog)}
  <div class="grid4">${SC.hits.map(card).join('')}</div>
</div></section>

<section class="news"><div class="wrap">
  <div class="sec-head"><h2>Новинки</h2><div class="rnav"><button type="button" data-rail="prev" aria-label="Назад">${icon.arrowL}</button><button type="button" data-rail="next" aria-label="Вперёд">${icon.arrow}</button></div></div>
  <div class="rail" id="rail">${SC.news.map(card).join('')}</div>
</div></section>

<section class="tips"><div class="wrap">
  ${head('Советы трихолога о здоровье волос и кожи головы', SC.tips, 'Все статьи')}
  <div class="posts">${SC.posts.map(p => `<a class="post rv" href="${p.href}"><div class="im"><img src="${p.img}" alt="" loading="lazy"></div><div class="meta"><span>${p.date}</span><b>${p.cat}</b></div><h3>${p.t}</h3></a>`).join('')}</div>
</div></section>

<section class="faq"><div class="wrap">
  <div class="side rv"><span class="caps">FAQ</span><h2>Частые вопросы</h2><p>Не нашли ответ – позвоните, подскажем за пять минут</p><a class="btn ghost" href="${SC.phoneHref}">${icon.phone} ${SC.phone}</a></div>
  <div class="rv">${SC.faq.map((f, i) => `<details${i === 0 ? ' open' : ''}><summary>${f.q}<span>${icon.plus}</span></summary><p>${f.a}</p></details>`).join('')}</div>
</div></section>

<section class="about"><div class="wrap">
  <div class="rv">
    <span class="caps">О магазине</span>
    <h2>${SC.about.h}</h2>
    <p class="lead">${SC.about.lead}</p>
    <div class="tags">${SC.about.problems.map(p => `<span>${p}</span>`).join('')}</div>
    <p class="act">${SC.about.actives} Поэтому результат – не временный эффект, а системное улучшение состояния волос и кожи головы</p>
  </div>
  <div class="rv">
    <h3>Кому подойдёт</h3>
    <ul class="list">${SC.about.forWhom.map(f => `<li>${icon.check}<span>${f}</span></li>`).join('')}</ul>
    <h3>Как купить</h3>
    <ol class="steps">${SC.about.howToBuy.map(([b, s], i) => `<li><em>0${i + 1}</em><div><b>${b}</b><small>${s}</small></div></li>`).join('')}</ol>
  </div>
</div></section>

<footer><div class="wrap">
  <div class="cols">
    <div><img class="flogo" src="${SC.logoWhite}" alt="TRIHOLOGIC"><div class="contact"><a href="${SC.phoneHref}">${icon.phone}${SC.phone}</a><a href="mailto:${SC.email}">${icon.mail}${SC.email}</a><a href="${SC.instagramHref}">${icon.inst}${SC.instagram}</a><div class="hrs">${SC.hours.map(([d, h]) => `<span>${d}: ${h}</span>`).join('')}</div></div></div>
    ${SC.catalogGroups.slice(0, 3).map(g => `<div><h4>${g.t}</h4><ul>${g.items.map(i => `<li><a href="${i.href}">${i.t}</a></li>`).join('')}</ul></div>`).join('')}
    <div><h4>Информация</h4><ul><li><a href="${SC.delivery}">Доставка</a></li><li><a href="${SC.payment}">Оплата</a></li><li><a href="${SC.returns}">Возврат товара</a></li><li><a href="${SC.tips}">Советы трихолога</a></li></ul><h4 style="margin-top:24px">Аксессуары</h4><ul><li><a href="${SC.catalogGroups[3].items[0].href}">Расчёски</a></li></ul></div>
  </div>
  <div class="legal">${legalHtml()}</div>
</div></footer>

${switcher('v1.html')}
<script>
(function(){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
  var rail=document.getElementById('rail');
  document.querySelectorAll('[data-rail]').forEach(function(b){b.addEventListener('click',function(){var w=rail.querySelector('.card').getBoundingClientRect().width+20;rail.scrollBy({left:b.dataset.rail==='next'?w:-w,behavior:'smooth'})})});
})();
</script>
</body>
</html>`;
