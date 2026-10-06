/* Обложка: четыре варианта с живыми превью в уменьшенных iframe */
const items = [
  ['v1.html', 'Вариант 1', 'Кабинет', 'Ближе всего к текущему сайту: светлый, чёрный и аква из логотипа, тот же порядок блоков. Чище сетка, подбор по проблеме и аргумент «основатель – врач-трихолог» подняты наверх, форма бесплатной консультации'],
  ['v2.html', 'Вариант 2', 'Назначение', 'Редакционный, как лист назначений: бумажный фон, засечки. На первом экране подбор ухода за три шага с подборкой из каталога, товары строками, «путь к результату» по месяцам'],
  ['wow.html', 'WOW', 'Корень', 'Тёмный кинематографичный: в первом экране из кожи головы растут волосы и тянутся к курсору. Список проблем с картинкой за курсором, лента хитов тянется мышью, бренды бегущей строкой'],
  ['wow2.html', 'WOW 2', 'Капля', 'Светлый WOW: в первом экране живая аква-жидкость из логотипа, капли сливаются, курсор добавляет свою. Плитки проблем раскрывают фото кругом от курсора, карточки хитов наклоняются за мышью']
];

module.exports = () => `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>trihologic.by – прототипы главной, 4 варианта</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,400&family=Manrope:wght@400;500;600&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0}
body{background:#f4f8f9;color:#121a1b;font:400 15px/1.65 Manrope,system-ui,sans-serif;-webkit-font-smoothing:antialiased;padding:clamp(24px,5vw,72px) clamp(16px,4vw,56px)}
a{color:inherit;text-decoration:none}
.caps{font:600 11px/1 Manrope;letter-spacing:.2em;text-transform:uppercase;color:#11788a}
h1{font:400 clamp(40px,6.5vw,100px)/1 "Cormorant Garamond",serif;letter-spacing:-.02em;margin:18px 0 20px}h1 i{color:#11788a}
.lead{max-width:62ch;color:#5a6668;margin-bottom:clamp(32px,4vw,64px)}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.c{display:flex;flex-direction:column;background:#fff;border:1px solid #e2e8e9;border-radius:28px;padding:14px;transition:transform .7s cubic-bezier(.16,1,.3,1),box-shadow .7s}
.c:hover{transform:translateY(-8px);box-shadow:0 40px 70px -30px rgba(17,120,138,.35)}
.fr{position:relative;aspect-ratio:16/9;border-radius:18px;overflow:hidden;background:#e7eff1}
.fr iframe{position:absolute;left:0;top:0;width:400%;height:400%;transform:scale(.25);transform-origin:0 0;border:0;pointer-events:none}
.bd{padding:22px 10px 12px;display:flex;flex-direction:column;gap:10px;flex:1}
h2{font:400 clamp(30px,2.8vw,44px)/1.05 "Cormorant Garamond",serif}h2 i{color:#11788a}
p{color:#5a6668}
.go{margin-top:auto;padding-top:14px;display:inline-flex;gap:10px;align-items:center;font:600 12px/1 Manrope;letter-spacing:.14em;text-transform:uppercase}
.go::after{content:"→";transition:transform .4s}.c:hover .go::after{transform:translateX(6px)}
.note{margin-top:clamp(32px,4vw,56px);padding-top:22px;border-top:1px solid rgba(18,26,27,.14);color:#5a6668;font-size:14px;max-width:90ch;display:grid;gap:6px}
@media(max-width:960px){.grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<span class="caps">trihologic.by · главная страница · прототипы</span>
<h1>Четыре варианта <i>главной</i></h1>
<p class="lead">Два спокойных и два WOW. Содержимое текущего сайта сохранено во всех: подбор ухода, бренды, хиты, новинки, советы трихолога, FAQ, текст о магазине и подвал. Откройте каждый вариант и полистайте до конца, на компьютере и на телефоне</p>
<main class="grid">
${items.map(([h, k, n, d]) => `  <a class="c" href="${h}">
    <div class="fr"><iframe src="${h}" title="${k} «${n}»" loading="lazy" tabindex="-1"></iframe></div>
    <div class="bd"><span class="caps">${k}</span><h2>«${n}»</h2><p>${d}</p><span class="go">Открыть</span></div>
  </a>`).join('\n')}
</main>
<div class="note">
  <span>Фото и цены товаров подключены с живого сайта. Фото первого экрана – то же стоковое, что сейчас на сайте; для запуска желательно фото основателя</span>
  <span>Переключатель вариантов внизу каждой страницы – только для показа, в боевой сайт не идёт</span>
</div>
</body>
</html>`;
