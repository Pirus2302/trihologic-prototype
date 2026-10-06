/* WOW 2 «Капля» – светлый. В первом экране на WebGL живёт аква-жидкость из логотипа: капли сливаются, курсор добавляет свою.
   Плитки проблем раскрывают фото кругом от курсора, карточки хитов наклоняются за мышью, лента новинок тянется */
const { SC, icon, esc, price, switcher, legalHtml } = require('./data');

const card = (p, cls = '') => `<article class="card ${cls}">
  <a class="pic" href="${p.href}"><img src="${p.img}" alt="${esc(p.t)}" loading="lazy" draggable="false"></a>
  <span class="tag">${p.tag}</span>
  <h3><a href="${p.href}" draggable="false">${esc(p.t)}</a></h3>
  <div class="row"><span class="price">${price(p.price)}</span><button class="add" type="button">В корзину</button></div>
</article>`;

module.exports = () => `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>TRIHOLOGIC – WOW 2 «Капля»</title>
<link rel="icon" href="${SC.site}wp-content/uploads/2026/03/cropped-favicon-32x32.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
<style>
:root{--bg:#f6fafb;--white:#fff;--ink:#0f1c1e;--mute:#5b6c6e;--aqua:#1b9cb0;--aqua-d:#116f80;--aqua-l:#dcf0f3;--line:#dfe8ea;--wrap:1340px}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--ink);font:400 16px/1.6 Onest,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
ul,ol{list-style:none;padding:0}
button{font:inherit;cursor:pointer}
h1,h2,.serif{font-family:"Playfair Display",Georgia,serif;font-weight:400;line-height:1.08;letter-spacing:-.015em}
h2{font-size:clamp(32px,3.8vw,56px)}
h2 em{font-style:italic;color:var(--aqua-d)}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 32px}
.caps{font:600 11px/1 Onest;letter-spacing:.22em;text-transform:uppercase;color:var(--aqua-d)}
.btn{display:inline-flex;align-items:center;gap:10px;padding:17px 28px;border-radius:999px;background:var(--ink);color:#fff;font:500 14px/1 Onest;border:1px solid var(--ink);transition:.3s;will-change:transform}
.btn:hover{background:var(--aqua-d);border-color:var(--aqua-d)}
.btn.ghost{background:rgba(255,255,255,.6);color:var(--ink);border-color:var(--line);backdrop-filter:blur(6px)}.btn.ghost:hover{background:var(--ink);color:#fff;border-color:var(--ink)}
.btn.aqua{background:var(--aqua);border-color:var(--aqua)}.btn.aqua:hover{background:var(--aqua-d)}
.btn svg{transition:transform .3s}.btn:hover svg{transform:translateX(4px)}
section{padding:clamp(64px,8vw,128px) 0;position:relative}
.sec-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:clamp(32px,4vw,56px)}
.sec-head .more{display:inline-flex;align-items:center;gap:8px;font-weight:500;font-size:14px;color:var(--aqua-d)}.sec-head .more:hover{gap:12px}
.rv{opacity:0;transform:translateY(28px);transition:opacity 1s cubic-bezier(.2,.7,.2,1),transform 1s cubic-bezier(.2,.7,.2,1)}
.rv.in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.rv{opacity:1;transform:none;transition:none}*{animation:none!important;transition:none!important}}

/* шапка */
.hdr{position:fixed;left:0;right:0;top:0;z-index:60;transition:.4s;border-bottom:1px solid transparent}
.hdr.on{background:rgba(246,250,251,.86);backdrop-filter:blur(14px);border-color:var(--line)}
.hdr .wrap{display:flex;align-items:center;gap:40px;min-height:80px}
.logo img{height:34px;width:auto}
.menu{display:flex;gap:4px;flex:1;justify-content:center}
.menu a{font-size:14px;font-weight:500;padding:10px 16px;border-radius:999px;transition:.25s}
.menu a:hover,.menu a[aria-current]{background:rgba(255,255,255,.7);box-shadow:0 1px 0 var(--line)}
.tools{display:flex;gap:6px;align-items:center}
.tools a,.tools button{position:relative;background:none;border:0;color:inherit;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;transition:background .2s}
.tools a:hover,.tools button:hover{background:rgba(255,255,255,.8)}
.tools em{position:absolute;top:5px;right:3px;min-width:17px;height:17px;border-radius:9px;background:var(--aqua);color:#fff;font:600 10px/17px Onest;text-align:center;font-style:normal}
.tools .burger{display:none}

/* первый экран: жидкость */
.hero{min-height:100vh;min-height:100svh;display:grid;align-items:center;padding:120px 0 60px;overflow:hidden}
#gl{position:absolute;inset:0;width:100%;height:100%;display:block}
.hero .wrap{position:relative;z-index:2;display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(32px,5vw,80px);align-items:center}
.hero h1{font-size:clamp(44px,6vw,92px);margin:22px 0 26px}
.hero h1 em{font-style:italic;color:var(--aqua-d)}
.hero .lead{font-size:clamp(16px,1.3vw,19px);color:var(--mute);max-width:34em;margin-bottom:34px}
.hero .cta{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:40px}
.trust{display:flex;gap:28px;flex-wrap:wrap;font-size:14px;color:var(--mute)}
.trust span{display:inline-flex;gap:8px;align-items:center}.trust svg{color:var(--aqua);width:18px;height:18px}
.blob{position:relative;aspect-ratio:1;max-width:560px;margin-left:auto;width:100%}
.blob .ph{position:absolute;inset:0;overflow:hidden;border-radius:58% 42% 55% 45%/48% 56% 44% 52%;animation:morph 14s ease-in-out infinite alternate;box-shadow:0 60px 120px -40px rgba(17,111,128,.35)}
.blob .ph img{width:100%;height:100%;object-fit:cover;object-position:100% 18%}
@keyframes morph{0%{border-radius:58% 42% 55% 45%/48% 56% 44% 52%}50%{border-radius:45% 55% 42% 58%/55% 45% 55% 45%}100%{border-radius:52% 48% 60% 40%/42% 58% 46% 54%}}
.blob .k{position:absolute;background:rgba(255,255,255,.88);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.9);border-radius:18px;padding:12px 14px;display:flex;gap:12px;align-items:center;box-shadow:0 20px 50px -20px rgba(15,28,30,.3);animation:floaty 6s ease-in-out infinite}
.blob .k img{width:46px;height:46px;border-radius:10px;object-fit:cover}
.blob .k b{display:block;font-weight:600;font-size:13px;line-height:1.3;max-width:180px}.blob .k small{color:var(--mute);font-size:12px}
.blob .k1{left:-40px;bottom:16%}.blob .k2{right:-20px;top:12%;animation-delay:-3s}
@keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
.hero .caps,.hero h1,.hero .lead,.hero .cta,.hero .trust,.blob{animation:up 1.2s cubic-bezier(.2,.7,.2,1) both}
.hero h1{animation-delay:.15s}.hero .lead{animation-delay:.3s}.hero .cta{animation-delay:.45s}.hero .trust{animation-delay:.55s}.blob{animation-delay:.3s}
@keyframes up{from{opacity:0;transform:translateY(30px)}}

/* проблемы: фото раскрывается кругом от курсора */
.pgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.pt{position:relative;display:block;aspect-ratio:3/4;border-radius:28px;overflow:hidden;background:var(--white);border:1px solid var(--line);padding:26px;isolation:isolate}
.pt img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 60%;clip-path:circle(0px at var(--x,50%) var(--y,50%));transition:clip-path .7s cubic-bezier(.2,.7,.2,1);z-index:0}
.pt:hover img{clip-path:circle(120% at var(--x,50%) var(--y,50%))}
.pt::after{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(255,255,255,0) 45%,rgba(255,255,255,.95) 80%);opacity:0;transition:opacity .5s}
.pt:hover::after{opacity:1}
.pt .n{position:relative;z-index:2;font:400 15px "Playfair Display";color:var(--aqua-d)}
.pt .d{position:absolute;left:26px;right:26px;bottom:26px;z-index:2}
.pt h3{font:400 clamp(22px,1.9vw,28px)/1.1 "Playfair Display";margin-bottom:6px}
.pt p{color:var(--mute);font-size:14px}
.pt .go{position:absolute;right:20px;top:20px;z-index:2;width:42px;height:42px;border-radius:50%;background:var(--aqua-l);color:var(--aqua-d);display:grid;place-items:center;transition:.3s}
.pt:hover .go{background:var(--ink);color:#fff;transform:rotate(-45deg)}
.pt::before{content:"";position:absolute;inset:0;z-index:0;background:var(--img) center 60%/cover no-repeat;opacity:.28;filter:grayscale(.6);transition:opacity .5s}
.pt:hover::before{opacity:0}
.pt .deco{display:none}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}
.chips a{padding:10px 16px;border:1px solid var(--line);background:var(--white);border-radius:999px;font-size:14px;transition:.25s}
.chips a:hover{border-color:var(--aqua);color:var(--aqua-d)}

/* врач */
.doctor{background:var(--white)}
.doctor .wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,100px);align-items:center}
.doctor .q{font:italic clamp(28px,3vw,44px)/1.2 "Playfair Display";margin:18px 0 24px}
.doctor .q b{font-style:normal;color:var(--aqua-d)}
.doctor p{color:var(--mute);font-size:17px;max-width:34em;margin-bottom:28px}
.doctor .ph{position:relative;aspect-ratio:4/5;border-radius:200px 200px 28px 28px;overflow:hidden}
.doctor .ph img{width:100%;height:100%;object-fit:cover;object-position:100% 15%}
.doctor .ph .b{position:absolute;left:20px;right:20px;bottom:20px;background:rgba(255,255,255,.9);backdrop-filter:blur(8px);border-radius:18px;padding:16px 20px}
.doctor .ph .b b{display:block;font-weight:600}.doctor .ph .b small{color:var(--mute);font-size:13px}
.facts{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding-top:28px;border-top:1px solid var(--line)}
.facts b{display:block;font:400 40px/1 "Playfair Display";color:var(--aqua-d);margin-bottom:8px}
.facts small{font-size:14px;color:var(--mute)}

/* хиты: наклон за мышью */
.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:24px 20px;perspective:1200px}
.card{display:grid;grid-template-rows:auto auto 1fr auto;gap:8px;transform-style:preserve-3d;transition:transform .4s cubic-bezier(.2,.7,.2,1)}
.card .pic{display:block;aspect-ratio:1;border-radius:24px;overflow:hidden;background:var(--white);border:1px solid var(--line);position:relative}
.card .pic::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at var(--gx,50%) var(--gy,50%),rgba(255,255,255,.55),transparent 55%);opacity:0;transition:opacity .4s;pointer-events:none}
.card:hover .pic::after{opacity:1}
.card .pic img{width:100%;height:100%;object-fit:cover;transition:transform .9s cubic-bezier(.2,.7,.2,1)}
.card:hover .pic img{transform:scale(1.06)}
.card .tag{font:600 11px/1 Onest;letter-spacing:.16em;text-transform:uppercase;color:var(--aqua-d);margin-top:8px}
.card h3{font:500 15px/1.4 Onest}
.card .row{display:flex;justify-content:space-between;align-items:center;padding-top:6px;gap:10px}
.price{font:600 18px/1 Onest}.price small{font-size:12px;color:var(--mute);font-weight:400}
.add{padding:10px 16px;border-radius:999px;border:1px solid var(--line);background:var(--white);font-size:13px;font-weight:500;transition:.25s;white-space:nowrap}
.add:hover{background:var(--ink);color:#fff;border-color:var(--ink)}

/* бренды каплями */
.bgrid{display:grid;grid-template-columns:repeat(6,1fr);gap:20px}
.brand{display:grid;gap:14px;justify-items:center;text-align:center}
.brand .im{width:100%;aspect-ratio:1;overflow:hidden;border-radius:58% 42% 55% 45%/48% 56% 44% 52%;transition:border-radius 1s,transform .6s;background:var(--white);border:1px solid var(--line)}
.brand:hover .im{border-radius:50%;transform:translateY(-6px)}
.brand img{width:100%;height:100%;object-fit:cover}
.brand b{display:block;font:400 20px "Playfair Display"}.brand small{color:var(--mute);font-size:13px}

/* новинки лентой */
.news{background:var(--white)}
.rail-wrap{overflow:hidden;margin:0 -32px;padding:0 32px}
.rail{display:flex;gap:20px;overflow-x:auto;scrollbar-width:none;cursor:grab;user-select:none;padding-bottom:6px}
.rail::-webkit-scrollbar{display:none}
.rail.drag{cursor:grabbing}
.rail .card{flex:0 0 clamp(240px,22vw,320px)}
.rail .card .pic{background:var(--bg)}
.rnav{display:flex;gap:8px}
.rnav button{width:48px;height:48px;border-radius:50%;border:1px solid var(--line);background:var(--white);display:grid;place-items:center;transition:.25s}
.rnav button:hover{background:var(--ink);color:#fff;border-color:var(--ink)}

/* путь каплями */
.path .wrap>p{color:var(--mute);max-width:48em;font-size:17px;margin-bottom:48px}
.drops{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.drops li{background:var(--white);border:1px solid var(--line);border-radius:28px;padding:28px;position:relative;overflow:hidden}
.drops li::before{content:"";position:absolute;right:-40px;top:-40px;width:140px;height:140px;border-radius:50%;background:var(--aqua-l);transition:transform .8s cubic-bezier(.2,.7,.2,1)}
.drops li:hover::before{transform:scale(1.5)}
.drops .m{display:block;font:600 11px/1 Onest;letter-spacing:.2em;text-transform:uppercase;color:var(--aqua-d);margin-bottom:46px;position:relative}
.drops b{display:block;font:400 24px/1.15 "Playfair Display";margin-bottom:10px;position:relative}
.drops small{color:var(--mute);font-size:14px;position:relative}

/* статьи */
.posts{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.post{display:grid;gap:14px}
.post .im{aspect-ratio:16/10;border-radius:24px;overflow:hidden}
.post img{width:100%;height:100%;object-fit:cover;transition:transform .9s}
.post:hover img{transform:scale(1.05)}
.post .meta{display:flex;gap:12px;font-size:13px;color:var(--mute)}.post .meta b{color:var(--aqua-d);font-weight:600}
.post h3{font:400 clamp(20px,1.6vw,26px)/1.25 "Playfair Display"}

/* faq + о магазине */
.faq{background:var(--white)}
.faq .wrap{display:grid;grid-template-columns:1fr 1.5fr;gap:clamp(40px,6vw,100px);align-items:start}
details{border-top:1px solid var(--line)}
details:last-child{border-bottom:1px solid var(--line)}
summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:20px;padding:24px 0;font:500 18px/1.35 Onest}
summary::-webkit-details-marker{display:none}
summary span{flex:none;width:34px;height:34px;border-radius:50%;background:var(--aqua-l);color:var(--aqua-d);display:grid;place-items:center;transition:.3s}
details[open] summary span{transform:rotate(45deg);background:var(--ink);color:#fff}
details p{padding:0 0 24px;color:var(--mute);max-width:60ch}
.about .wrap{display:grid;grid-template-columns:1.2fr 1fr;gap:clamp(40px,6vw,100px)}
.about h2{font-size:clamp(28px,2.8vw,42px);margin:16px 0 20px}
.about .lead{color:var(--mute);font-size:17px;margin-bottom:24px}
.about .tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px}
.about .tags span{padding:8px 14px;border-radius:999px;background:var(--aqua-l);color:var(--aqua-d);font-size:14px;font-weight:500}
.about h3{font:500 18px Onest;margin-bottom:14px}
.about .list{display:grid;gap:10px;margin-bottom:32px}
.about .list li{display:flex;gap:12px;color:var(--mute);font-size:15px}
.about .list svg{flex:none;color:var(--aqua);margin-top:4px}
.steps li{display:grid;grid-template-columns:40px 1fr;gap:12px;padding:14px 0;border-top:1px solid var(--line)}
.steps em{font:400 24px/1.2 "Playfair Display";color:var(--aqua-d);font-style:normal}
.steps b{display:block;font-weight:600}.steps small{color:var(--mute);font-size:14px}

/* подвал */
footer{background:var(--ink);color:#a9bcbe;padding:clamp(56px,7vw,96px) 0 32px;font-size:14px;border-radius:40px 40px 0 0}
footer .cols{display:grid;grid-template-columns:1.4fr 1fr 1.2fr 1fr 1fr;gap:32px;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.12)}
footer h4{font:600 11px/1 Onest;letter-spacing:.2em;text-transform:uppercase;color:#fff;margin-bottom:16px}
footer li a{display:block;padding:4px 0}footer li a:hover{color:#fff}
footer .contact a{display:flex;gap:10px;align-items:center;color:#fff;font-size:16px;padding:3px 0}
footer .hrs{margin-top:10px;display:grid;gap:3px}
footer .legal{padding-top:24px;display:grid;gap:6px;font-size:12px;color:#7d9092}
.flogo{height:38px;width:auto;margin-bottom:18px}

@media(max-width:1100px){.pgrid,.grid4{gap:14px}.bgrid{grid-template-columns:repeat(3,1fr)}.drops{grid-template-columns:1fr 1fr}footer .cols{grid-template-columns:1fr 1fr}}
@media(max-width:900px){.pgrid,.grid4{grid-template-columns:repeat(2,1fr)}.posts{grid-template-columns:1fr;gap:14px}.post{grid-template-columns:minmax(140px,36%) 1fr;align-items:center}.post .im{aspect-ratio:4/3}.menu{display:none}.tools .burger{display:grid}.hero .wrap{grid-template-columns:1fr}.blob{max-width:420px;margin:0 auto}.blob .k1{left:0}.blob .k2{right:0}.hero{padding-top:110px}
  .doctor .wrap,.faq .wrap,.about .wrap{grid-template-columns:1fr}.facts{gap:12px}.facts b{font-size:30px}
  .wrap{padding:0 20px}.rail-wrap{margin:0 -20px;padding:0 20px}.sec-head{flex-direction:column;align-items:flex-start;gap:12px}
  .pt img{clip-path:none;opacity:.9}.pt::after{opacity:1}.pt .deco{display:none}}
@media(max-width:560px){.post{grid-template-columns:1fr}.post .im{aspect-ratio:16/10}.pgrid{grid-template-columns:1fr 1fr;gap:12px}.pt{padding:16px;border-radius:20px}.pt .d{left:16px;right:16px;bottom:16px}.pt h3{font-size:18px}.pt p{font-size:12px}.pt .go{width:34px;height:34px;right:12px;top:12px}
  .grid4{grid-template-columns:1fr 1fr;gap:16px 12px}.card .add{padding:9px 12px;font-size:12px}.bgrid{grid-template-columns:1fr 1fr 1fr;gap:12px}.brand b{font-size:16px}.brand small{display:none}.drops{grid-template-columns:1fr}.hero h1{font-size:40px}.rail .card{flex-basis:72vw}.blob .k b{max-width:130px}}
</style>
</head>
<body>
<header class="hdr" id="hdr"><div class="wrap">
  <a class="logo" href="${SC.site}"><img src="${SC.logoBlack}" alt="TRIHOLOGIC"></a>
  <ul class="menu">${SC.nav.map(n => `<li><a href="${n.href}"${n.t === 'Главная' ? ' aria-current="page"' : ''}>${n.t}</a></li>`).join('')}</ul>
  <div class="tools">
    <a href="${SC.phoneHref}" aria-label="Позвонить">${icon.phone}</a>
    <a href="${SC.account}" aria-label="Кабинет">${icon.user}</a>
    <a href="${SC.cart}" aria-label="Корзина">${icon.bag}<em>0</em></a>
    <button class="burger" type="button" aria-label="Меню"><svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
  </div>
</div></header>

<section class="hero">
  <canvas id="gl" aria-hidden="true"></canvas>
  <div class="wrap">
    <div>
      <span class="caps">${SC.distributor}</span>
      <h1>Уход, который <em>назначают</em>, а не советуют</h1>
      <p class="lead">${SC.tagline.charAt(0).toUpperCase() + SC.tagline.slice(1)}. Подобраны практикующим врачом-трихологом: выпадение, алопеция, перхоть, истончение</p>
      <div class="cta"><a class="btn aqua" href="#problems">Подобрать по проблеме ${icon.arrow}</a><a class="btn ghost" href="${SC.catalog}">Каталог</a></div>
      <div class="trust"><span>${icon.stetho}Основатель – врач-трихолог</span><span>${icon.shield}Только оригинал</span><span>${icon.truck}Доставка по Беларуси</span></div>
    </div>
    <div class="blob">
      <div class="ph"><img src="${SC.heroPhoto}" alt="" fetchpriority="high"></div>
      <a class="k k1" href="${SC.hits[2].href}"><img src="${SC.hits[2].img}" alt=""><div><b>Три-Энерджи Фактор 5,5%</b><small>хит против выпадения · ${SC.hits[2].price} BYN</small></div></a>
      <a class="k k2" href="${SC.hits[0].href}"><img src="${SC.hits[0].img}" alt=""><div><b>Маска-прешампунь «Глубокое очищение»</b><small>${SC.hits[0].price} BYN</small></div></a>
    </div>
  </div>
</section>

<section class="problems" id="problems"><div class="wrap">
  <div class="sec-head"><div><span class="caps">Подобрать уход</span><h2 style="margin-top:12px">С какой <em>проблемой</em> пришли?</h2></div><a class="more" href="${SC.site}product-category/naznachenie/">Все назначения ${icon.arrow}</a></div>
  <div class="pgrid">${SC.problems.map(p => `<a class="pt rv" href="${p.href}" style="--img:url(${p.img})"><img src="${p.img}" alt="" loading="lazy"><span class="deco"></span><span class="n">${p.n}</span><span class="go">${icon.arrow}</span><div class="d"><h3>${p.t}</h3><p>${p.sub}</p></div></a>`).join('')}</div>
  <div class="chips rv">${SC.moreProblems.map(m => `<a href="${m.href}">${m.t}</a>`).join('')}</div>
</div></section>

<section class="doctor"><div class="wrap">
  <div class="rv">
    <span class="caps">Почему TRIHOLOGIC</span>
    <p class="q">«Наша задача – не продать средство, а подобрать то, что <b>действительно даст результат</b>»</p>
    <p>Основатель TRIHOLOGIC – практикующий врач-трихолог. Поэтому ассортимент сформирован не как витрина косметики, а как система решений, которые реально используются в работе с пациентами</p>
    <a class="btn" href="#consult">Бесплатная консультация ${icon.arrow}</a>
    <div class="facts" style="margin-top:36px"><div><b>6</b><small>профессиональных брендов, только официальные поставщики</small></div><div><b>12</b><small>назначений в каталоге: от АГА до чувствительной кожи</small></div><div><b>3–4</b><small>месяца до честной первой оценки результата</small></div></div>
  </div>
  <div class="ph rv"><img src="${SC.heroPhoto}" alt="" loading="lazy"><div class="b"><b>Основатель TRIHOLOGIC</b><small>практикующий врач-трихолог, Минск</small></div></div>
</div></section>

<section class="hits"><div class="wrap">
  <div class="sec-head"><h2>Хиты</h2><a class="more" href="${SC.catalog}">Весь каталог ${icon.arrow}</a></div>
  <div class="grid4" id="tilt">${SC.hits.map(p => card(p, 'rv')).join('')}</div>
</div></section>

<section class="news"><div class="wrap">
  <div class="sec-head"><h2>Новинки</h2><div class="rnav"><button type="button" data-rail="prev" aria-label="Назад">${icon.arrowL}</button><button type="button" data-rail="next" aria-label="Вперёд">${icon.arrow}</button></div></div>
  <div class="rail-wrap"><div class="rail" id="rail">${SC.news.map(p => card(p)).join('')}</div></div>
</div></section>

<section class="brands"><div class="wrap">
  <div class="sec-head"><h2>Бренды</h2></div>
  <div class="bgrid">${SC.brands.map(b => `<a class="brand rv" href="${b.href}"><div class="im"><img src="${b.img}" alt="${b.t}" loading="lazy"></div><div><b>${b.t}</b><small>${b.sub}</small></div></a>`).join('')}</div>
</div></section>

<section class="path"><div class="wrap">
  <span class="caps">Как это работает</span>
  <h2 style="margin:12px 0 18px">Путь к <em>результату</em></h2>
  <p>Реакция на средства индивидуальна, а эффект при выпадении оценивают не раньше чем через 3–4 месяца. Мы говорим о сроках честно и сопровождаем на каждом этапе</p>
  <ol class="drops">
    <li class="rv"><span class="m">Неделя 0</span><b>Подбор схемы</b><small>по проблеме, давности и назначению врача. Бесплатно, по телефону или в мессенджере</small></li>
    <li class="rv"><span class="m">Месяц 1</span><b>Кожа головы</b><small>очищение, снятие зуда и жирности, подготовка к активным средствам</small></li>
    <li class="rv"><span class="m">Месяцы 2–3</span><b>Активная фаза</b><small>лосьоны и стимуляторы роста ежедневно, фото для сравнения раз в месяц</small></li>
    <li class="rv"><span class="m">Месяц 4</span><b>Оценка результата</b><small>трихоскопия или фототрихограмма у врача, корректировка схемы</small></li>
  </ol>
</div></section>

<section class="tips"><div class="wrap">
  <div class="sec-head"><h2>Советы трихолога</h2><a class="more" href="${SC.tips}">Все статьи ${icon.arrow}</a></div>
  <div class="posts">${SC.posts.map(p => `<a class="post rv" href="${p.href}"><div class="im"><img src="${p.img}" alt="" loading="lazy"></div><div class="meta"><span>${p.date}</span><b>${p.cat}</b></div><h3>${p.t}</h3></a>`).join('')}</div>
</div></section>

<section class="faq" id="consult"><div class="wrap">
  <div class="rv"><span class="caps">FAQ</span><h2 style="margin:12px 0 16px">Частые <em>вопросы</em></h2><p style="color:var(--mute);margin-bottom:22px">Не нашли ответ – позвоните, подскажем за пять минут</p><a class="btn ghost" href="${SC.phoneHref}">${icon.phone} ${SC.phone}</a></div>
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

${switcher('wow2.html')}
<script id="fs" type="x-shader/x-fragment">
precision highp float;uniform vec2 r;uniform float t;uniform vec2 m;uniform float mp;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*noise(p);p*=2.03;a*=.5;}return v;}
void main(){vec2 p=(gl_FragCoord.xy-.5*r)/r.y;float n=fbm(p*1.4+vec2(t*.05,-t*.03));
 float d=0.;
 d+=.19/(length(p-vec2(sin(t*.21)*.55+.25,cos(t*.17)*.28-.05))+.08);
 d+=.16/(length(p-vec2(cos(t*.13)*.6-.35,sin(t*.23)*.3+.1))+.08);
 d+=.14/(length(p-vec2(sin(t*.29+2.)*.45,cos(t*.19+1.)*.35-.15))+.08);
 d+=.12/(length(p-vec2(cos(t*.11+4.)*.7,sin(t*.27+3.)*.22+.25))+.08);
 d+=.11/(length(p-vec2(sin(t*.17+1.)*.3-.6,cos(t*.21+2.)*.4))+.08);
 vec2 mm=(m-.5*r)/r.y;d+=mp*.2/(length(p-mm)+.1);
 d+=(n-.5)*1.1;
 vec3 bg=vec3(.965,.980,.984),lt=vec3(.80,.92,.94),aq=vec3(.42,.78,.83),deep=vec3(.106,.612,.690);
 vec3 c=mix(bg,lt,smoothstep(.55,1.15,d));
 c=mix(c,aq,smoothstep(1.15,1.9,d));
 c=mix(c,deep,smoothstep(1.9,3.2,d)*.85);
 float rim=smoothstep(1.1,1.16,d)-smoothstep(1.16,1.45,d);c+=rim*vec3(.07,.09,.09);
 float hl=smoothstep(1.7,2.6,d)*pow(max(0.,1.-length(p*1.2-vec2(.1,.3))),3.)*.3;c+=hl;
 gl_FragColor=vec4(c,1.);}
</script>
<script>
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)});
  var hdr=document.getElementById('hdr');addEventListener('scroll',function(){hdr.classList.toggle('on',scrollY>40)},{passive:true});

  /* WebGL жидкость */
  var cv=document.getElementById('gl'),gl=cv.getContext('webgl',{antialias:false,alpha:false});
  if(gl){var vs='attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
    function sh(t,s){var o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o}
    var pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,document.getElementById('fs').textContent));gl.linkProgram(pr);gl.useProgram(pr);
    var b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
    var a=gl.getAttribLocation(pr,'a');gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0);
    var uR=gl.getUniformLocation(pr,'r'),uT=gl.getUniformLocation(pr,'t'),uM=gl.getUniformLocation(pr,'m'),uP=gl.getUniformLocation(pr,'mp');
    var dpr=Math.min(1.5,devicePixelRatio||1),mx=-9999,my=-9999,tx=-9999,ty=-9999,mp=0,tp=0,raf,vis=true;
    function resize(){var r=cv.parentElement.getBoundingClientRect();cv.width=r.width*dpr;cv.height=r.height*dpr;gl.viewport(0,0,cv.width,cv.height)}
    resize();addEventListener('resize',resize);
    cv.parentElement.addEventListener('pointermove',function(e){var r=cv.getBoundingClientRect();tx=(e.clientX-r.left)*dpr;ty=(r.height-(e.clientY-r.top))*dpr;tp=1});
    cv.parentElement.addEventListener('pointerleave',function(){tp=0});
    var t0=performance.now();
    function frame(now){if(mx<-9000){mx=tx;my=ty}mx+=(tx-mx)*.08;my+=(ty-my)*.08;mp+=(tp-mp)*.06;
      gl.uniform2f(uR,cv.width,cv.height);gl.uniform1f(uT,(now-t0)/1000);gl.uniform2f(uM,mx,my);gl.uniform1f(uP,mp);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
      if(!reduce&&vis)raf=requestAnimationFrame(frame)}
    new IntersectionObserver(function(es){es.forEach(function(e){vis=e.isIntersecting;if(vis&&!reduce){cancelAnimationFrame(raf);raf=requestAnimationFrame(frame)}})}).observe(cv);
    frame(performance.now())}

  /* плитки проблем: центр раскрытия – там, где курсор */
  document.querySelectorAll('.pt').forEach(function(t){t.addEventListener('pointermove',function(e){var r=t.getBoundingClientRect();t.style.setProperty('--x',(e.clientX-r.left)+'px');t.style.setProperty('--y',(e.clientY-r.top)+'px')})});

  /* хиты: наклон карточки за мышью */
  if(matchMedia('(hover:hover)').matches&&!reduce)document.querySelectorAll('#tilt .card').forEach(function(c){
    c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.transform='rotateX('+((.5-y)*10)+'deg) rotateY('+((x-.5)*12)+'deg) translateY(-4px)';c.style.setProperty('--gx',x*100+'%');c.style.setProperty('--gy',y*100+'%')});
    c.addEventListener('pointerleave',function(){c.style.transform=''})});

  /* лента новинок */
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
