/* Вариант 2 «Назначение» – редакционный, как лист назначений врача: бумажный фон, Lora + Golos Text,
   подбор ухода в три шага на первом экране, товары строками, путь к результату по месяцам */
const { SC, icon, esc, price, switcher, legalHtml } = require('./data');

const row = (p, i) => `<article class="prow rv">
  <span class="num">${String(i + 1).padStart(2, '0')}</span>
  <a class="pic" href="${p.href}"><img src="${p.img}" alt="${esc(p.t)}" loading="lazy" width="570" height="570"></a>
  <div class="info"><span class="tag">${p.tag} · ${p.brand}</span><h3><a href="${p.href}">${esc(p.t)}</a></h3></div>
  <span class="price">${price(p.price)}</span>
  <button class="add" type="button">В корзину ${icon.arrow}</button>
</article>`;

const tile = p => `<article class="tcard rv"><a class="pic" href="${p.href}"><img src="${p.img}" alt="${esc(p.t)}" loading="lazy"></a><span class="tag">${p.tag}</span><h3><a href="${p.href}">${esc(p.t)}</a></h3><div class="r"><span class="price">${price(p.price)}</span><button class="add" type="button" aria-label="В корзину">${icon.plus}</button></div></article>`;

module.exports = () => `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>TRIHOLOGIC – вариант 2 «Назначение»</title>
<link rel="icon" href="${SC.site}wp-content/uploads/2026/03/cropped-favicon-32x32.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
<style>
:root{--paper:#f6f4ef;--paper2:#eeeae2;--ink:#17201f;--mute:#5f6866;--teal:#0f6f7c;--teal-l:#dcebec;--sand:#c9a46a;--line:#d9d4c9;--wrap:1240px}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{background:var(--paper);color:var(--ink);font:400 16px/1.6 "Golos Text",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
ul,ol{list-style:none;padding:0}
button{font:inherit;cursor:pointer}
h1,h2,.serif{font-family:Lora,Georgia,serif;font-weight:400;line-height:1.12;letter-spacing:-.01em}
h2{font-size:clamp(30px,3.2vw,44px)}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 28px}
.caps{font:600 11px/1 "Golos Text";letter-spacing:.2em;text-transform:uppercase;color:var(--teal)}
.btn{display:inline-flex;align-items:center;gap:10px;padding:15px 24px;background:var(--ink);color:var(--paper);font:500 14px/1 "Golos Text";border:1px solid var(--ink);border-radius:4px;transition:.25s}
.btn:hover{background:var(--teal);border-color:var(--teal)}
.btn.ghost{background:transparent;color:var(--ink)}.btn.ghost:hover{background:var(--ink);color:var(--paper)}
.btn.teal{background:var(--teal);border-color:var(--teal)}.btn.teal:hover{background:#0b5964}
section{padding:clamp(56px,7vw,96px) 0}
.sec-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:clamp(24px,3vw,40px);padding-bottom:16px;border-bottom:1px solid var(--ink)}
.sec-head .more{display:inline-flex;align-items:center;gap:8px;font-weight:500;font-size:14px}
.sec-head .more:hover{color:var(--teal)}
.rv{opacity:0;transform:translateY(18px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}
.rv.in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.rv{opacity:1;transform:none;transition:none}*{animation:none!important;transition:none!important}}

/* шапка */
.hdr{position:sticky;top:0;z-index:60;background:rgba(246,244,239,.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.hdr .wrap{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;min-height:74px;gap:24px}
.menu{display:flex;gap:26px}
.menu a{font-size:15px;font-weight:500;position:relative;padding:6px 0}
.menu a::after{content:"";position:absolute;left:0;right:100%;bottom:0;height:1px;background:var(--ink);transition:right .3s}
.menu a:hover::after,.menu a[aria-current]::after{right:0}
.logo{justify-self:center}.logo img{height:34px;width:auto}
.tools{justify-self:end;display:flex;gap:6px;align-items:center}
.tools a,.tools button{position:relative;background:none;border:0;color:inherit;display:grid;place-items:center;width:40px;height:40px;border-radius:50%}
.tools a:hover,.tools button:hover{background:var(--paper2)}
.tools em{position:absolute;top:4px;right:2px;min-width:17px;height:17px;border-radius:9px;background:var(--teal);color:#fff;font:600 10px/17px "Golos Text";text-align:center;font-style:normal}
.tools .ph{display:inline-flex;gap:8px;align-items:center;width:auto;padding:0 14px;border-radius:999px;font-weight:500;font-size:14px}
.burger{display:none}

/* первый экран: заявление + лист назначений */
.hero{padding:clamp(40px,5vw,72px) 0 0;position:relative;overflow:hidden}
.hero .wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(32px,5vw,72px);align-items:start}
.hero h1{font-size:clamp(40px,4.8vw,70px);margin:16px 0 22px}
.hero h1 em{font-style:italic;color:var(--teal)}
.hero .lead{font-size:18px;color:var(--mute);max-width:32em;margin-bottom:28px}
.hero .cta{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px}
.hero .doc{display:flex;gap:16px;align-items:center;padding:18px 0;border-top:1px solid var(--line);max-width:34em}
.hero .doc .av{flex:none;width:56px;height:56px;border-radius:50%;background:var(--teal-l);display:grid;place-items:center;color:var(--teal)}
.hero .doc b{display:block;font-weight:500}.hero .doc small{color:var(--mute);font-size:14px}
.hero .caps,.hero h1,.hero .lead,.hero .cta,.hero .doc{animation:up .9s both}
.hero h1{animation-delay:.1s}.hero .lead{animation-delay:.2s}.hero .cta{animation-delay:.3s}.hero .doc{animation-delay:.4s}
@keyframes up{from{opacity:0;transform:translateY(16px)}}

.rx{background:#fff;border:1px solid var(--line);border-radius:6px;padding:28px;box-shadow:0 30px 60px -40px rgba(23,32,31,.35);position:relative;animation:up 1s .25s both}
.rx::before{content:"";position:absolute;left:28px;right:28px;top:0;height:3px;background:var(--teal)}
.rx .rxh{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}
.rx .rxh img{height:22px;width:auto;opacity:.9}
.rx h2{font-size:26px;margin-bottom:6px}
.rx p.s{font-size:14px;color:var(--mute);margin-bottom:20px}
.rx .step{display:none}.rx .step.on{display:block}
.rx .q{font-weight:500;margin-bottom:12px;font-size:15px}
.rx .opts{display:grid;gap:8px}
.rx .opts label{display:flex;gap:12px;align-items:center;padding:12px 14px;border:1px solid var(--line);border-radius:4px;cursor:pointer;transition:.2s;font-size:15px}
.rx .opts label:hover{border-color:var(--teal)}
.rx .opts input{accent-color:var(--teal);width:16px;height:16px}
.rx .opts label:has(input:checked){border-color:var(--teal);background:var(--teal-l)}
.rx .nav{display:flex;justify-content:space-between;align-items:center;margin-top:18px;gap:12px}
.rx .dots{display:flex;gap:6px}.rx .dots i{width:22px;height:3px;background:var(--line)}.rx .dots i.on{background:var(--teal)}
.rx .res{display:none}
.rx .res.on{display:block}
.rx .res .list{display:grid;gap:10px;margin:14px 0 18px}
.rx .res .list a{display:flex;gap:12px;align-items:center;padding:10px;border:1px solid var(--line);border-radius:4px}
.rx .res .list a:hover{border-color:var(--teal)}
.rx .res .list img{width:48px;height:48px;object-fit:cover;border-radius:4px;background:var(--paper)}
.rx .res .list b{display:block;font-weight:500;font-size:14px;line-height:1.3}.rx .res .list small{color:var(--mute);font-size:13px}
.rx .res .note{font-size:13px;color:var(--mute);margin-bottom:14px}

/* проблемы */
.problems .wrap{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-top:1px solid var(--ink);border-bottom:1px solid var(--ink)}
.prob{padding:28px 24px 28px 0;border-right:1px solid var(--line);display:grid;grid-template-rows:auto 1fr auto;gap:12px;min-height:300px;position:relative;overflow:hidden}
.prob:nth-child(n+2){padding-left:24px}
.prob:last-child{border-right:0;padding-right:0}
.prob .n{font:400 14px Lora;color:var(--mute)}
.prob h3{font:400 26px/1.15 Lora;margin-bottom:6px}
.prob p{font-size:14px;color:var(--mute)}
.prob img{width:100%;aspect-ratio:5/4;object-fit:cover;object-position:center 60%;border-radius:4px;transition:transform .8s cubic-bezier(.2,.7,.2,1)}
.prob:hover img{transform:scale(1.03)}
.prob .go{display:inline-flex;gap:8px;align-items:center;font-weight:500;font-size:14px}
.prob:hover .go{color:var(--teal)}
.chips{display:flex;flex-wrap:wrap;gap:8px 20px;margin-top:20px;font-size:14px;color:var(--mute)}
.chips a{border-bottom:1px solid var(--line)}.chips a:hover{color:var(--teal);border-color:var(--teal)}

/* врач */
.doctor{background:var(--ink);color:var(--paper)}
.doctor .wrap{display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(32px,5vw,80px);align-items:center}
.doctor .caps{color:#7fd0dc}
.doctor h2{margin:14px 0 20px;font-size:clamp(32px,3.4vw,50px)}
.doctor h2 em{font-style:italic;color:#7fd0dc}
.doctor p{color:#b7c2c0;font-size:17px;margin-bottom:28px;max-width:34em}
.doctor .photo{aspect-ratio:4/5;overflow:hidden;border-radius:6px;position:relative}
.doctor .photo img{width:100%;height:100%;object-fit:cover;object-position:60% 15%;filter:saturate(.9)}
.doctor .photo .q{position:absolute;left:20px;right:20px;bottom:20px;background:rgba(23,32,31,.86);backdrop-filter:blur(6px);padding:18px 20px;border-radius:4px;font:italic 18px/1.35 Lora}
.doctor .photo .q small{display:block;font:500 12px "Golos Text";letter-spacing:.14em;text-transform:uppercase;color:#7fd0dc;margin-top:10px}
.facts{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding-top:24px;border-top:1px solid #33403f}
.facts b{display:block;font:400 34px/1 Lora;margin-bottom:6px}
.facts small{font-size:14px;color:#b7c2c0}

/* путь к результату */
.path .intro{max-width:46em;color:var(--mute);font-size:17px;margin-bottom:40px}
.tl{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;position:relative}
.tl::before{content:"";position:absolute;left:0;right:0;top:9px;height:1px;background:var(--line)}
.tl li{padding-top:30px;position:relative}
.tl li::before{content:"";position:absolute;left:0;top:4px;width:11px;height:11px;border-radius:50%;background:var(--paper);border:2px solid var(--teal)}
.tl li:first-child::before{background:var(--teal)}
.tl b{display:block;font:400 22px/1.2 Lora;margin-bottom:8px}
.tl small{color:var(--mute);font-size:14px;display:block}
.tl .m{font:600 11px/1 "Golos Text";letter-spacing:.18em;text-transform:uppercase;color:var(--teal);display:block;margin-bottom:8px}

/* товары строками */
.prow{display:grid;grid-template-columns:40px 110px 1fr auto auto;gap:24px;align-items:center;padding:18px 0;border-bottom:1px solid var(--line)}
.prow .num{font:400 15px Lora;color:var(--mute)}
.prow .pic{width:110px;height:110px;background:#fff;border:1px solid var(--line);border-radius:4px;overflow:hidden}
.prow .pic img{width:100%;height:100%;object-fit:cover;mix-blend-mode:multiply;transition:transform .6s}
.prow:hover .pic img{transform:scale(1.06)}
.prow .tag{font:600 11px/1 "Golos Text";letter-spacing:.16em;text-transform:uppercase;color:var(--teal);display:block;margin-bottom:8px}
.prow h3{font:400 clamp(18px,1.5vw,22px)/1.3 Lora}
.prow h3 a:hover{color:var(--teal)}
.price{font:500 18px/1 "Golos Text";white-space:nowrap}.price small{font-size:12px;color:var(--mute);font-weight:400}
.add{display:inline-flex;align-items:center;gap:8px;padding:11px 16px;border:1px solid var(--ink);background:transparent;border-radius:4px;font-size:13px;font-weight:500;transition:.2s;white-space:nowrap}
.add:hover{background:var(--ink);color:var(--paper)}

/* новинки плиткой */
.news{background:var(--paper2)}
.tgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.tcard{background:#fff;border:1px solid var(--line);border-radius:6px;padding:14px;display:grid;gap:10px;grid-template-rows:auto auto 1fr auto}
.tcard .pic{aspect-ratio:1;overflow:hidden;border-radius:4px;background:#fff}
.tcard img{width:100%;height:100%;object-fit:cover;mix-blend-mode:multiply;transition:transform .6s}
.tcard:hover img{transform:scale(1.05)}
.tcard .tag{font:600 11px/1 "Golos Text";letter-spacing:.16em;text-transform:uppercase;color:var(--teal)}
.tcard h3{font:500 14px/1.4 "Golos Text"}
.tcard .r{display:flex;justify-content:space-between;align-items:center}
.tcard .add{padding:9px;border-radius:50%}

/* бренды */
.bl{display:grid;grid-template-columns:repeat(6,1fr);border-top:1px solid var(--ink);border-bottom:1px solid var(--ink)}
.bl a{padding:26px 20px;border-right:1px solid var(--line);display:grid;gap:4px;transition:background .25s}
.bl a:last-child{border-right:0}
.bl a:hover{background:#fff}
.bl b{font:400 22px/1.1 Lora}.bl small{color:var(--mute);font-size:13px}

/* статьи */
.posts{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:28px}
.post .im{aspect-ratio:16/10;overflow:hidden;border-radius:4px;margin-bottom:14px}
.post img{width:100%;height:100%;object-fit:cover;transition:transform .8s}
.post:hover img{transform:scale(1.04)}
.post .meta{font-size:13px;color:var(--mute);margin-bottom:8px}.post .meta b{color:var(--teal);font-weight:500;margin-left:10px}
.post h3{font:400 clamp(20px,1.6vw,26px)/1.25 Lora}
.post:first-child h3{font-size:clamp(24px,2.2vw,34px)}

/* faq + о магазине */
.faq .wrap{display:grid;grid-template-columns:1fr 1.5fr;gap:clamp(32px,5vw,80px);align-items:start}
details{border-top:1px solid var(--line)}
details:last-child{border-bottom:1px solid var(--line)}
summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:20px;padding:20px 0;font:400 20px/1.3 Lora}
summary::-webkit-details-marker{display:none}
summary span{flex:none;width:28px;height:28px;display:grid;place-items:center;transition:transform .3s;color:var(--teal)}
details[open] summary span{transform:rotate(45deg)}
details p{padding:0 0 20px;color:var(--mute);max-width:60ch}
.about{background:var(--paper2)}
.about .wrap{display:grid;grid-template-columns:1.2fr 1fr;gap:clamp(32px,5vw,80px)}
.about h2{margin:14px 0 18px;font-size:clamp(26px,2.6vw,36px)}
.about .lead{color:var(--mute);font-size:17px;margin-bottom:22px}
.about .tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px}
.about .tags span{padding:7px 12px;border:1px solid var(--line);border-radius:4px;font-size:14px;background:#fff}
.about h3{font:400 22px Lora;margin-bottom:12px}
.about .list{display:grid;gap:8px;margin-bottom:28px}
.about .list li{display:flex;gap:10px;color:var(--mute);font-size:15px}
.about .list svg{flex:none;color:var(--teal);margin-top:4px}
.steps li{display:grid;grid-template-columns:36px 1fr;gap:12px;padding:12px 0;border-top:1px solid var(--line)}
.steps em{font:400 22px/1.2 Lora;color:var(--teal);font-style:normal}
.steps b{display:block;font-weight:500}.steps small{color:var(--mute);font-size:14px}

/* подвал */
footer{padding:clamp(48px,6vw,72px) 0 28px;border-top:1px solid var(--ink);font-size:14px;color:var(--mute)}
footer .cols{display:grid;grid-template-columns:1.4fr 1fr 1.2fr 1fr 1fr;gap:28px;padding-bottom:36px;border-bottom:1px solid var(--line)}
footer h4{font:600 11px/1 "Golos Text";letter-spacing:.18em;text-transform:uppercase;color:var(--ink);margin-bottom:14px}
footer li a{display:block;padding:3px 0}footer li a:hover{color:var(--teal)}
footer .contact a{display:flex;gap:10px;align-items:center;color:var(--ink);font-size:16px;padding:3px 0}
footer .hrs{margin-top:10px;display:grid;gap:3px}
footer .legal{padding-top:20px;display:grid;gap:5px;font-size:12px}
.flogo{height:36px;width:auto;margin-bottom:16px}

@media(max-width:1100px){.problems .wrap{grid-template-columns:1fr 1fr}.prob:nth-child(2){border-right:0}.prob:nth-child(n+3){border-top:1px solid var(--line)}.prob:nth-child(3){padding-left:0}.tgrid{gap:12px}.bl{grid-template-columns:repeat(3,1fr)}.bl a:nth-child(3){border-right:0}.bl a:nth-child(n+4){border-top:1px solid var(--line)}footer .cols{grid-template-columns:1fr 1fr}.posts{grid-template-columns:1fr 1fr}.post:first-child{grid-column:span 2}.tl{grid-template-columns:1fr 1fr}.tl::before{display:none}}
@media(max-width:900px){.tgrid{grid-template-columns:repeat(2,1fr)}.menu{display:none}.burger{display:grid}.tools .ph span{display:none}.hdr .wrap{grid-template-columns:auto 1fr auto}.logo{justify-self:start}
  .hero .wrap,.doctor .wrap,.faq .wrap,.about .wrap{grid-template-columns:1fr}.prow{grid-template-columns:72px 1fr auto;gap:14px}.prow .num,.prow .add{display:none}.prow .pic{width:72px;height:72px}.facts{grid-template-columns:1fr 1fr 1fr;gap:12px}.facts b{font-size:26px}.wrap{padding:0 18px}.sec-head{flex-direction:column;align-items:flex-start;gap:10px}}
@media(max-width:560px){.problems .wrap{grid-template-columns:1fr}.prob{border-right:0;padding-left:0!important;min-height:0}.prob img{aspect-ratio:16/9}.tgrid{grid-template-columns:1fr 1fr;gap:10px}.tcard{padding:10px}.bl{grid-template-columns:1fr 1fr}.bl a:nth-child(2n){border-right:0}.bl a:nth-child(3){border-right:1px solid var(--line)}.bl a:nth-child(n+3){border-top:1px solid var(--line)}.posts{grid-template-columns:1fr}.post:first-child{grid-column:auto}.tl{grid-template-columns:1fr}.hero h1{font-size:38px}}
</style>
</head>
<body>
<header class="hdr"><div class="wrap">
  <ul class="menu">${SC.nav.map(n => `<li><a href="${n.href}"${n.t === 'Главная' ? ' aria-current="page"' : ''}>${n.t}</a></li>`).join('')}</ul>
  <a class="logo" href="${SC.site}"><img src="${SC.logoBlack}" alt="TRIHOLOGIC"></a>
  <div class="tools">
    <a class="ph" href="${SC.phoneHref}">${icon.phone}<span>${SC.phone}</span></a>
    <a href="${SC.account}" aria-label="Кабинет">${icon.user}</a>
    <a href="${SC.cart}" aria-label="Корзина">${icon.bag}<em>0</em></a>
    <button class="burger" type="button" aria-label="Меню"><svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
  </div>
</div></header>

<section class="hero"><div class="wrap">
  <div>
    <span class="caps">Трихологический магазин · Минск</span>
    <h1>Не косметика «по отзывам». <em>Назначение</em> от врача</h1>
    <p class="lead">${SC.tagline.charAt(0).toUpperCase() + SC.tagline.slice(1)}. ${SC.distributor}. Каждое средство здесь используется в практике трихологов</p>
    <div class="cta"><a class="btn teal" href="${SC.catalog}">Каталог ${icon.arrow}</a><a class="btn ghost" href="#problems">Смотреть по проблемам</a></div>
    <div class="doc"><span class="av">${icon.stetho}</span><div><b>Основатель магазина – практикующий врач-трихолог</b><small>ассортимент собран как система решений, а не витрина</small></div></div>
  </div>
  <div class="rx" id="rx">
    <div class="rxh"><span class="caps">Лист подбора</span><img src="${SC.logoBlack}" alt=""></div>
    <h2>Подберём уход за три шага</h2>
    <p class="s">Без регистрации. В конце покажем, с чего начать, и предложим бесплатную консультацию</p>
    <div class="step on" data-step="0"><p class="q">Что беспокоит больше всего?</p><div class="opts">
      <label><input type="radio" name="q0" value="loss" checked>Выпадение волос</label>
      <label><input type="radio" name="q0" value="thin">Истончение, потеря плотности</label>
      <label><input type="radio" name="q0" value="scalp">Перхоть, зуд, жирная кожа головы</label>
      <label><input type="radio" name="q0" value="damage">Окрашенные, повреждённые волосы</label></div></div>
    <div class="step" data-step="1"><p class="q">Как давно?</p><div class="opts">
      <label><input type="radio" name="q1" value="new" checked>Недавно, до 3 месяцев</label>
      <label><input type="radio" name="q1" value="long">Давно, обычные средства не помогли</label>
      <label><input type="radio" name="q1" value="doc">Есть назначение врача</label></div></div>
    <div class="step" data-step="2"><p class="q">Для кого подбираем?</p><div class="opts">
      <label><input type="radio" name="q2" value="w" checked>Для женщины</label>
      <label><input type="radio" name="q2" value="m">Для мужчины</label>
      <label><input type="radio" name="q2" value="k">Для ребёнка</label>
      <label><input type="radio" name="q2" value="p">Беременность или ГВ</label></div></div>
    <div class="res" data-step="3"><p class="q">С чего начать</p><div class="list" id="rxlist"></div><p class="note" id="rxnote"></p><a class="btn teal" id="rxlink" href="${SC.catalog}">Открыть подборку ${icon.arrow}</a> <a class="btn ghost" href="${SC.phoneHref}">Консультация</a></div>
    <div class="nav"><div class="dots"><i class="on"></i><i></i><i></i></div><div><button class="btn ghost" type="button" id="rxback" style="display:none">Назад</button> <button class="btn" type="button" id="rxnext">Дальше ${icon.arrow}</button></div></div>
  </div>
</div></section>

<section class="problems" id="problems">
  <div class="wrap" style="border:0;display:block;margin-bottom:24px"><span class="caps">Подобрать уход</span><h2 style="margin-top:10px">Четыре задачи, с которыми приходят чаще всего</h2></div>
  <div class="wrap">${SC.problems.map(p => `<a class="prob rv" href="${p.href}"><span class="n">${p.n}</span><img src="${p.img}" alt="" loading="lazy"><div><h3>${p.t}</h3><p>${p.sub}</p></div><span class="go">Смотреть средства ${icon.arrow}</span></a>`).join('')}</div>
  <div class="wrap" style="border:0;display:block"><div class="chips">${SC.moreProblems.map(m => `<a href="${m.href}">${m.t}</a>`).join('')}</div></div>
</section>

<section class="doctor"><div class="wrap">
  <div class="photo rv"><img src="${SC.heroPhoto}" alt="" loading="lazy"><div class="q">«Наша задача – не продать средство, а подобрать то, что действительно даст результат»<small>основатель TRIHOLOGIC, врач-трихолог</small></div></div>
  <div class="rv">
    <span class="caps">Почему здесь</span>
    <h2>Магазин, который собрал <em>врач</em></h2>
    <p>Весь ассортимент сформирован не как витрина косметики, а как система решений, которые реально используются в работе с пациентами: пептидные комплексы, стимуляторы роста, нейроактивные формулы, экстракты</p>
    <a class="btn" style="background:var(--paper);color:var(--ink);border-color:var(--paper)" href="#consult">Бесплатная консультация ${icon.arrow}</a>
    <div class="facts" style="margin-top:36px"><div><b>6</b><small>профессиональных брендов, только официальные поставщики</small></div><div><b>12</b><small>назначений в каталоге: от АГА до чувствительной кожи головы</small></div><div><b>3–4 мес.</b><small>честный срок первой оценки результата при выпадении</small></div></div>
  </div>
</div></section>

<section class="path"><div class="wrap">
  <span class="caps">Как это работает</span>
  <h2 style="margin:12px 0 16px">Путь к результату</h2>
  <p class="intro">Реакция на средства всегда индивидуальна, а эффект при выпадении оценивают не раньше чем через 3–4 месяца. Поэтому мы говорим о сроках честно и сопровождаем на каждом этапе</p>
  <ol class="tl">
    <li class="rv"><span class="m">Неделя 0</span><b>Подбор схемы</b><small>по проблеме, давности и назначению врача. Бесплатно, по телефону или в мессенджере</small></li>
    <li class="rv"><span class="m">Месяц 1</span><b>Кожа головы</b><small>очищение, снятие зуда и жирности, подготовка к активным средствам</small></li>
    <li class="rv"><span class="m">Месяцы 2–3</span><b>Активная фаза</b><small>лосьоны и стимуляторы роста ежедневно, фото для сравнения раз в месяц</small></li>
    <li class="rv"><span class="m">Месяц 4</span><b>Оценка результата</b><small>трихоскопия или фототрихограмма у врача, корректировка схемы</small></li>
  </ol>
</div></section>

<section class="hits"><div class="wrap">
  <div class="sec-head"><h2>Хиты</h2><a class="more" href="${SC.catalog}">Весь каталог ${icon.arrow}</a></div>
  <div>${SC.hits.map(row).join('')}</div>
</div></section>

<section class="news"><div class="wrap">
  <div class="sec-head"><h2>Новинки</h2><a class="more" href="${SC.catalog}">Все новинки ${icon.arrow}</a></div>
  <div class="tgrid">${SC.news.map(tile).join('')}</div>
</div></section>

<section class="brands"><div class="wrap">
  <div class="sec-head" style="border:0;padding:0"><h2>Бренды</h2></div>
  <div class="bl">${SC.brands.map(b => `<a href="${b.href}" class="rv"><b>${b.t}</b><small>${b.sub}</small></a>`).join('')}</div>
</div></section>

<section class="tips"><div class="wrap">
  <div class="sec-head"><h2>Советы трихолога</h2><a class="more" href="${SC.tips}">Все статьи ${icon.arrow}</a></div>
  <div class="posts">${SC.posts.map(p => `<a class="post rv" href="${p.href}"><div class="im"><img src="${p.img}" alt="" loading="lazy"></div><div class="meta">${p.date}<b>${p.cat}</b></div><h3>${p.t}</h3></a>`).join('')}</div>
</div></section>

<section class="faq" id="consult"><div class="wrap">
  <div class="rv"><span class="caps">FAQ</span><h2 style="margin:12px 0 14px">Частые вопросы</h2><p style="color:var(--mute);margin-bottom:20px">Не нашли ответ – позвоните или напишите в Instagram</p><a class="btn ghost" href="${SC.phoneHref}">${icon.phone} ${SC.phone}</a></div>
  <div class="rv">${SC.faq.map((f, i) => `<details${i === 0 ? ' open' : ''}><summary>${f.q}<span>${icon.plus}</span></summary><p>${f.a}</p></details>`).join('')}</div>
</div></section>

<section class="about"><div class="wrap">
  <div class="rv"><span class="caps">О магазине</span><h2>${SC.about.h}</h2><p class="lead">${SC.about.lead}</p><div class="tags">${SC.about.problems.map(p => `<span>${p}</span>`).join('')}</div><p style="color:var(--mute);font-size:15px">${SC.about.actives}</p></div>
  <div class="rv"><h3>Кому подойдёт</h3><ul class="list">${SC.about.forWhom.map(f => `<li>${icon.check}<span>${f}</span></li>`).join('')}</ul><h3>Как купить</h3><ol class="steps">${SC.about.howToBuy.map(([b, s], i) => `<li><em>0${i + 1}</em><div><b>${b}</b><small>${s}</small></div></li>`).join('')}</ol></div>
</div></section>

<footer><div class="wrap">
  <div class="cols">
    <div><img class="flogo" src="${SC.logoBlack}" alt="TRIHOLOGIC"><div class="contact"><a href="${SC.phoneHref}">${icon.phone}${SC.phone}</a><a href="mailto:${SC.email}">${icon.mail}${SC.email}</a><a href="${SC.instagramHref}">${icon.inst}${SC.instagram}</a><div class="hrs">${SC.hours.map(([d, h]) => `<span>${d}: ${h}</span>`).join('')}</div></div></div>
    ${SC.catalogGroups.slice(0, 3).map(g => `<div><h4>${g.t}</h4><ul>${g.items.map(i => `<li><a href="${i.href}">${i.t}</a></li>`).join('')}</ul></div>`).join('')}
    <div><h4>Информация</h4><ul><li><a href="${SC.delivery}">Доставка</a></li><li><a href="${SC.payment}">Оплата</a></li><li><a href="${SC.returns}">Возврат товара</a></li><li><a href="${SC.tips}">Советы трихолога</a></li><li><a href="${SC.catalogGroups[3].items[0].href}">Расчёски</a></li></ul></div>
  </div>
  <div class="legal">${legalHtml()}</div>
</div></footer>

${switcher('v2.html')}
<script>
(function(){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});

  /* лист подбора: три вопроса, подборка из каталога по назначению. Карточки собираются DOM-методами */
  var S=${JSON.stringify(SC.site)};
  var P=${JSON.stringify([...SC.hits, ...SC.news].map(p => ({ t: p.t, tag: p.tag, img: p.img, href: p.href, price: p.price })))};
  var map={loss:{tags:['Выпадение волос','Андрогенетическая алопеция','Стимуляция роста'],href:'product-category/naznachenie/vypadenie-volos/',note:'Начните с очищения кожи головы и лосьона против выпадения. Эффект оценивают через 3–4 месяца'},
    thin:{tags:['Стимуляция роста','Андрогенетическая алопеция'],href:'product-category/naznachenie/stimuljacija-rosta-volos/',note:'Стимуляторы роста и пептидные лосьоны курсом, оценка плотности по фото раз в месяц'},
    scalp:{tags:['Пилинг кожи головы','Сухая / чувствительная кожа'],href:'product-category/naznachenie/perhot-seboreja-seborejnyj-dermatit/',note:'Сначала кожа головы: пилинг раз в неделю и мягкий шампунь ежедневно'},
    damage:{tags:['Защита волос','Аксессуары'],href:'product-category/naznachenie/zashhita-volos/',note:'Защита длины и бережное расчёсывание, активные средства не нужны'}};
  var who={k:{tags:['Дети'],href:'product-category/dlja-kogo/deti/'},m:{href:'product-category/dlja-kogo/muzhchiny/'},p:{href:'product-category/dlja-kogo/beremennost-i-grudnoe-vskarmlivanie/'}};
  var step=0,rx=document.getElementById('rx'),next=document.getElementById('rxnext'),back=document.getElementById('rxback');
  function el(tag,cls,text){var e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e}
  function show(){rx.querySelectorAll('.step,.res').forEach(function(s){s.classList.toggle('on',+s.dataset.step===step)});
    rx.querySelectorAll('.dots i').forEach(function(d,i){d.classList.toggle('on',i<=step)});
    back.style.display=step>0&&step<3?'':'none';next.style.display=step<3?'':'none';
    if(step===3)result()}
  function val(n){var r=rx.querySelector('input[name="'+n+'"]:checked');return r?r.value:''}
  function result(){var q=map[val('q0')],w=who[val('q2')]||{};var tags=(w.tags||q.tags);var list=P.filter(function(p){return tags.indexOf(p.tag)>-1}).slice(0,3);
    if(list.length<3)list=list.concat(P.filter(function(p){return q.tags.indexOf(p.tag)>-1&&list.indexOf(p)<0}).slice(0,3-list.length));
    var box=document.getElementById('rxlist');while(box.firstChild)box.removeChild(box.firstChild);
    list.forEach(function(p){var a=el('a');a.href=p.href;var im=el('img');im.src=p.img;im.alt='';var d=el('div');d.appendChild(el('b',null,p.t));d.appendChild(el('small',null,p.price+' BYN'));a.appendChild(im);a.appendChild(d);box.appendChild(a)});
    document.getElementById('rxnote').textContent=(val('q1')==='long'?'Выпадение длится давно – советуем очный приём трихолога, подбор поможет не навредить. ':'')+q.note;
    document.getElementById('rxlink').href=S+(w.href||q.href)}
  next.addEventListener('click',function(){step=Math.min(3,step+1);show()});
  back.addEventListener('click',function(){step=Math.max(0,step-1);show()});
})();
</script>
</body>
</html>`;
