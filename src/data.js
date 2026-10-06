/* Контент главной trihologic.by, снят с живого сайта 06.10.2026. Один источник для всех вариантов.
   Картинки подключены ссылками с живого сайта – при переносе на WordPress они уже в медиатеке */
const S = 'https://trihologic.by/';
const U = S + 'wp-content/uploads/';

const SC = {
  site: S,
  name: 'TRIHOLOGIC',
  logoBlack: U + '2026/03/logo-black-2.png',
  logoWhite: U + '2026/03/logo-white-2.png',
  heroPhoto: U + '2026/02/photo_2026-02-25_10-16-03.jpg',
  tagline: 'магазин профессиональных трихологических средств для волос и кожи головы',
  distributor: 'Официальный дистрибьютор Time To Grow',
  phone: '+375 29 525 46 24',
  phoneHref: 'tel:+375295254624',
  email: 'kris.petrovecz@mail.ru',
  instagram: '@trihologic_by',
  instagramHref: 'https://www.instagram.com/trihologic_by/',
  hours: [['Пн–Пт', '10:00–20:00'], ['Сб', '11:00–18:00'], ['Вс', 'выходной']],
  catalog: S + 'catalog/',
  cart: S + 'cart/',
  account: S + 'my-account/',
  tips: S + 'sovety-trikhologa/',
  delivery: S + 'dostavka/',
  payment: S + 'oplata-2/',
  returns: S + 'prava-potrebitelja-i-vozvrat-tovara-2/',

  legal: {
    entity: 'ИП Петровец Наталия Степановна',
    unp: 'УНП 291896418',
    address: 'Республика Беларусь, г. Столин, ул. 50 лет Победы 4, 225501',
    reg: 'Свидетельство о регистрации №7-267, выдано 2 марта 2026 года Столинским райисполкомом',
    trade: 'Интернет-магазин включён в Торговый реестр Республики Беларусь 24.03.2026 г. за №772406'
  },

  nav: [
    { t: 'Главная', href: S },
    { t: 'Каталог', href: S + 'catalog/', mega: true },
    { t: 'Советы трихолога', href: S + 'sovety-trikhologa/' },
    { t: 'Доставка', href: S + 'dostavka/' },
    { t: 'Оплата', href: S + 'oplata-2/' }
  ],

  /* Структура каталога – для меню и подвала */
  catalogGroups: [
    { t: 'Средства', href: 'product-category/sredstva/', items: [
      ['Шампуни', 'shampuni'], ['Пилинги', 'pilingi'], ['Бальзамы / кондиционеры', 'balzamy-kondicionery'], ['Маски', 'maski'],
      ['Сыворотки', 'syvorotki'], ['Лосьоны', 'losony-toniki'], ['Термозащита', 'termozashhita'], ['Уход за длиной', 'uhod-za-dlinoj'],
      ['Для бровей и ресниц', 'dlja-brovej-i-resnic'], ['Наборы', 'nabory']
    ].map(([t, p]) => ({ t, href: S + 'product-category/sredstva/' + p + '/' })) },
    { t: 'Назначение', href: 'product-category/naznachenie/', items: [
      ['Защита волос', 'zashhita-volos'], ['Андрогенетическая алопеция', 'androgeneticheskaja-alopecija'], ['Выпадение волос', 'vypadenie-volos'],
      ['Стимуляция роста волос', 'stimuljacija-rosta-volos'], ['Очаговая алопеция', 'ochagovaja-alopecija'], ['Диффузная алопеция', 'diffuznaja-alopecija'],
      ['Окрашенные и повреждённые волосы', 'okrashennye-i-povrezhdennye-volosy'], ['Перхоть, себорея, себорейный дерматит', 'perhot-seboreja-seborejnyj-dermatit'],
      ['Нормальная кожа головы', 'normalnaja-kozha-golovy'], ['Сухая / чувствительная кожа головы', 'suhaja-chuvstvitelnaja-kozha-golovy'],
      ['Жирная кожа головы', 'zhirnaja-kozha-golovy'], ['Ресницы и брови', 'resnicy-i-brovi']
    ].map(([t, p]) => ({ t, href: S + 'product-category/naznachenie/' + p + '/' })) },
    { t: 'Для кого', href: 'product-category/dlja-kogo/', items: [
      ['Женщины', 'zhenshhiny'], ['Мужчины', 'muzhchiny'], ['Дети', 'deti'], ['Беременность и грудное вскармливание', 'beremennost-i-grudnoe-vskarmlivanie']
    ].map(([t, p]) => ({ t, href: S + 'product-category/dlja-kogo/' + p + '/' })) },
    { t: 'Аксессуары', href: 'product-category/aksessuary/', items: [
      ['Расчёски', 'raschjoski']
    ].map(([t, p]) => ({ t, href: S + 'product-category/aksessuary/' + p + '/' })) }
  ],

  /* Блок «Подобрать уход» – четыре проблемы с живого сайта. Картинки с сайта шли с впечатанной подписью,
     подпись обрезана (assets/problems), текст выводится отдельно */
  problems: [
    { t: 'Выпадение волос', sub: 'остановить на ранней стадии', href: S + 'product-category/naznachenie/vypadenie-volos/',
      img: 'assets/problems/loss.jpg', n: '01' },
    { t: 'Перхоть и себорея', sub: 'зуд, жирность, шелушение', href: S + 'product-category/naznachenie/perhot-seboreja-seborejnyj-dermatit/',
      img: 'assets/problems/dandruff.jpg', n: '02' },
    { t: 'Стимуляция роста', sub: 'плотность и толщина волос', href: S + 'product-category/naznachenie/stimuljacija-rosta-volos/',
      img: 'assets/problems/growth.jpg', n: '03' },
    { t: 'Защита волос', sub: 'окрашенные, повреждённые, длина', href: S + 'product-category/naznachenie/zashhita-volos/',
      img: 'assets/problems/protect.jpg', n: '04' }
  ],

  /* Дополнительные ссылки на назначения – для расширенного подбора (АГА, дети и т.д.) */
  moreProblems: [
    ['Андрогенетическая алопеция', 'product-category/naznachenie/androgeneticheskaja-alopecija/'],
    ['Диффузная алопеция', 'product-category/naznachenie/diffuznaja-alopecija/'],
    ['Очаговая алопеция', 'product-category/naznachenie/ochagovaja-alopecija/'],
    ['Жирная кожа головы', 'product-category/naznachenie/zhirnaja-kozha-golovy/'],
    ['Сухая и чувствительная кожа', 'product-category/naznachenie/suhaja-chuvstvitelnaja-kozha-golovy/'],
    ['Детям', 'product-category/dlja-kogo/deti/'],
    ['Мужчинам', 'product-category/dlja-kogo/muzhchiny/'],
    ['При беременности и ГВ', 'product-category/dlja-kogo/beremennost-i-grudnoe-vskarmlivanie/']
  ].map(([t, p]) => ({ t, href: S + p })),

  brands: [
    { t: 'Time to Grow', sub: 'Сколково · официальный дистрибьютор', href: S + 'бренд/time-to-grow/', img: U + '2026/03/4155a647060da31b8778682f194c39cc_0357c084-f9d2-4037-9070-e8db4fb62cd0-1024x572.png' },
    { t: 'DSD de Luxe', sub: 'Испания · против выпадения', href: S + 'бренд/dsd-de-luxe/', img: U + '2026/03/1e0173d426cae02b9d7e85c8f3ef1842_b92b67ed_ff69_43a0_adcf_3799ce66781f-1024x572.png' },
    { t: 'Follimed', sub: 'ампулы и лосьоны', href: S + 'бренд/follimed/', img: U + '2026/05/chatgpt-image-1-maja-2026-g.-10_40_29-1024x1024.png' },
    { t: 'Crescina', sub: 'Швейцария · рост волос', href: S + 'бренд/crescina/', img: U + '2026/04/chatgpt-image-1-maja-2026-g.-02_39_01-1024x1024.png' },
    { t: 'Janeke', sub: 'Италия · щётки', href: S + 'бренд/janeke/', img: U + '2026/08/janeke_orange1.png' },
    { t: 'Dekohair', sub: 'лосьоны Charismo', href: S + 'бренд/dekohair/', img: U + '2026/03/f40729187c52629b73822a89a4d5c3c5_69e8c83a-3020-47f8-acde-a7894b9be0af-1024x1024.png' }
  ],

  /* Хиты – 8 карточек с живого сайта, цены на 06.10.2026. tag – главное назначение, как на сайте */
  hits: [
    { t: 'Маска-прешампунь «Глубокое очищение», 200 мл', tag: 'Пилинг кожи головы', brand: 'Time to Grow', price: '181,00', img: U + '2026/02/maska-preshampun-glubokoe-ochishenie-200-ml-570x570.jpg', href: S + 'product/maska-preshampun-glubokoe-ochishhenie-200-ml/' },
    { t: 'КОФЕПТИД Активатор роста волос, 100 мл', tag: 'Андрогенетическая алопеция', brand: 'Time to Grow', price: '333,00', img: U + '2026/02/kofeptid-aktivator-rosta-volos-time-grow-570x570.jpg', href: S + 'product/kofeptid-aktivator-rosta-volos-time-to-grow/' },
    { t: 'Три-Энерджи Фактор 5,5% лосьон, 100 мл', tag: 'Выпадение волос', brand: 'Time to Grow', price: '389,00', img: U + '2026/02/intensivnoe-sredstvo-dlya-vosstanovleniya-gustoty-i-tolshiny-volos-time-grow-tri-enerdzhi-faktor-55-loson-soderzhit-neurostab-100-ml-570x570.webp', href: S + 'product/intensivnoe-sredstvo-dlja-vosstanovlenija-gustoty-i-tolshhiny-volos-time-to-grow-tri-jenerdzhi-faktor-5-5-loson-soderzhit-neurostab-100-ml/' },
    { t: 'Экзосомно-пептидный стимулятор роста волос БИО-ЭНЕРДЖИ, 100 мл', tag: 'Стимуляция роста', brand: 'Time to Grow', price: '456,00', img: U + '2026/02/ekzosomno-peptidnyj-stimulyator-rosta-volos-time-grow-bio-enerdzhi-soderzhit-neurostab-100-ml-570x570.png', href: S + 'product/jekzosomno-peptidnyj-stimuljator-rosta-volos-time-to-grow-bio-jenerdzhi-soderzhit-neurostab-100-ml/' },
    { t: 'Шампунь «Ежедневный иммунитет» для чувствительной кожи, 200 мл', tag: 'Сухая / чувствительная кожа', brand: 'Time to Grow', price: '131,00', img: U + '2026/02/shampun-ezhednevnyj-immunitet-dlya-chuvstvitelnoj-kozhi-suhogo-i-normalnogo-tipa-200-ml-570x570.jpg', href: S + 'product/shampun-ezhednevnyj-immunitet-dlja-chuvstvitelnoj-kozhi-suhogo-i-normalnogo-tipa-200-ml/' },
    { t: 'Лосьон для укрепления и восстановления роста волос у детей, 100 мл', tag: 'Дети', brand: 'Time to Grow', price: '249,00', img: U + '2026/02/loson-time-grow-dlya-ukrepleniya-i-vosstanovleniya-rosta-volos-u-detej-100-ml-570x570.jpg', href: S + 'product/loson-time-to-grow-dlja-ukreplenija-i-vosstanovlenija-rosta-volos-u-detej-100-ml/' },
    { t: 'Регулятор роста волос «DNA-PEPTIDE», 100 мл', tag: 'Выпадение волос', brand: 'Time to Grow', price: '444,00', img: U + '2026/02/regulyator-rosta-volos-time-grow-dna-peptide-soderzhit-neurostab-100-ml-570x570.webp', href: S + 'product/reguljator-rosta-volos-time-to-grow-dna-peptide-soderzhit-neurostab-100-ml/' },
    { t: 'Лосьон для роста волос Charismo, 60 мл', tag: 'Стимуляция роста', brand: 'Dekohair', price: '300,00', img: U + '2026/04/img_6997-570x570.jpeg', href: S + 'product/loson-dlja-rosta-volos-charismo-dekohair-60-ml/' }
  ],

  news: [
    { t: 'DSD de Luxe 9.4.1 Exogrow Booster Lotion, 100 мл', tag: 'Выпадение волос', brand: 'DSD de Luxe', price: '482,00', img: U + '2026/09/9.4.1-dsd-exogrow-booster-lotion-loson-dlya-volos--e1789058716943-570x570.webp', href: S + 'product/dsd-de-luxe-9-4-1-exogrow-booster-lotion-100-ml/' },
    { t: 'Шампунь-бустер с экзосомами DSD de Luxe 9.1 Exogrow, 200 мл', tag: 'Андрогенетическая алопеция', brand: 'DSD de Luxe', price: '107,00', img: U + '2026/09/dlja-kompleksnogo-uhoda-posmotrite-drugie-sredstva-pri-vypadenii-volos-i-professionalnuju-kosmetiku-dsd-de-luxe-e1789055128480-570x570.png', href: S + 'product/dsd-de-luxe-9-1-exogrow-booster-shampoo-200-ml/' },
    { t: 'Сыворотка для детских волос «Уход и Защита»', tag: 'Дети', brand: 'Time to Grow', price: '146,00', img: U + '2026/08/2025-05-22-13-56-33-bradius1smoothing1-e1786622893245-570x570.jpg', href: S + 'product/syvorotka-dlja-detskih-volos-uhod-i-zashhita/' },
    { t: 'Лосьон для кожи головы Philip Martin’s Scalp Nutriment, 12 флаконов', tag: 'Выпадение волос', brand: 'Philip Martin’s', price: '265,99', img: U + '2026/08/philip_martins_losion-570x570.png', href: S + 'product/loson-dlja-kozhi-golovy-protiv-vypadenija-volos-philip-martin-s-scalp-nutriment-professional-12-fluids/' },
    { t: 'Щётка для волос MANTA Brush Orange', tag: 'Аксессуары', brand: 'Manta', price: '129,99', img: U + '2026/08/kntx4p2jt3c74a2m6a0j1h509o5nq7q2-570x570.webp', href: S + 'product/shhetka-dlja-volos-manta-brush-orange/' },
    { t: 'Щётка Janeke Superbrush Orange', tag: 'Аксессуары', brand: 'Janeke', price: '65,99', img: U + '2026/08/janeke_orange-2-570x570.png', href: S + 'product/shhetka-dlja-volos-janeke-superbrush-arancio-fluorescente-orange/' },
    { t: 'Щётка Janeke Superbrush Yellow', tag: 'Аксессуары', brand: 'Janeke', price: '65,99', img: U + '2026/08/janeke_yellow-570x570.png', href: S + 'product/shhetka-dlja-volos-janeke-superbrush-giallo-fluorescente/' },
    { t: 'Концентрат-бустер «Три-Энерджи Фактор» 5%, пена 150 мл', tag: 'Стимуляция роста', brand: 'Time to Grow', price: '366,00', img: U + '2026/05/2025-05-06-15-09-48-bradius1smoothing1-e1779960457842-570x570.webp', href: S + 'product/koncentrat-buster-dlja-vosstanovlenija-rosta-volos-tri-jenerdzhi-faktor-5-pena-150-ml/' }
  ],

  posts: [
    { t: 'Выпадение волос: с чего начать, чтобы не стало хуже', cat: 'Выпадение волос', date: '3 марта 2026', img: U + '2026/03/photo_2026-02-25_10-32-09-400x270.jpg', href: S + '2026/03/03/alopecija-prichiny-simptomy-metody-borby/' },
    { t: 'Андрогенетическая алопеция (АГА): можно ли остановить выпадение и что реально работает', cat: 'Выпадение волос', date: '3 марта 2026', img: U + '2026/03/chatgpt-image-5-maja-2026-g.-14_54_38-e1777982220846-400x270.png', href: S + '2026/03/03/kak-primenjat-ampuly-ot-vypadenija-volos/' },
    { t: 'Эффективные методы укрепления волос для борьбы с выпадением', cat: 'Выпадение волос', date: '3 марта 2026', img: U + '2026/03/photo_2026-02-25_10-32-18-400x270.jpg', href: S + '2026/03/03/jeffektivnye-metody-ukreplenija-volos-dlja-borby-s-vypadeniem/' }
  ],

  faq: [
    { q: 'Как понять, какое средство подойдёт именно мне?',
      a: 'Подбор зависит от причины: выпадение, жирная кожа головы, перхоть, истончение волос – у каждой задачи свои решения, поэтому мы не советуем выбирать «наугад» или только по отзывам. Все средства в магазине используются в реальной практике трихологов. Обратитесь за бесплатной консультацией – подберём уход под вашу ситуацию – или выберите готовое решение по вашей проблеме в каталоге.' },
    { q: 'Нужно ли идти к трихологу перед покупкой?',
      a: 'Не всегда, но в ряде случаев желательно: при длительном выпадении, очагах, быстром истончении и когда обычные средства не помогли. Основатель магазина – практикующий врач-трихолог, поэтому при подборе мы честно скажем, когда без очного приёма не обойтись.' },
    { q: 'Это оригинальная продукция?',
      a: 'Да, мы работаем только с официальными поставщиками и брендами. TRIHOLOGIC – официальный дистрибьютор профессиональной трихологической косметики Time to Grow.' },
    { q: 'Через сколько будет эффект?',
      a: 'Зависит от вида проблемы, её выраженности и длительности, а также от общего состояния организма. Например, при андрогенетической алопеции врач оценивает эффективность терапии не ранее чем через 3–4 месяца: по обзорной фотографии, трихоскопии и фототрихограмме. Реакция на средства индивидуальна, поэтому важно точно выполнять рекомендации врача.' },
    { q: 'Если у меня АГА, значит средства не помогут?',
      a: 'АГА связана с генетической чувствительностью фолликулов к андрогенам, поэтому «вылечить навсегда» её одним шампунем или лосьоном невозможно. Но остановить выпадение, удержать плотность и вернуть толщину волос – реальная задача, с которой работают средства из нашего каталога в комплексе с назначениями врача.' }
  ],

  /* Текстовый блок с живого сайта – сохраняем смысл, режем на тезисы */
  about: {
    h: 'Профессиональные средства против выпадения волос в Минске',
    lead: 'TRIHOLOGIC – специализированный трихологический магазин, где средства подбираются по принципу врачебного назначения, а не «по популярности». Основатель магазина – практикующий врач-трихолог, поэтому ассортимент собран как система решений, которые реально используются в работе с пациентами.',
    problems: ['выпадение волос', 'андрогенетическая алопеция (АГА)', 'истончение и потеря плотности', 'жирная кожа головы, перхоть, зуд'],
    actives: 'Пептидные комплексы, стимуляторы роста, нейроактивные формулы, экстракты – клинически используемые активы, направленные на укрепление и восстановление волос.',
    forWhom: [
      'началось выпадение волос и важно остановить его на ранней стадии',
      'выпадение длится долго и не помогли обычные средства',
      'волосы стали тоньше, редеют или теряют объём',
      'есть проблемы кожи головы: зуд, жирность, перхоть',
      'уже есть назначение от врача'
    ],
    howToBuy: [
      ['Всё в наличии', 'склад в Минске, отправляем в день заказа'],
      ['Доставка', 'курьером по Минску, Белпочтой и Европочтой по всей Беларуси'],
      ['Помощь в подборе', 'позвоните или оставьте заявку – подберём уход под вашу ситуацию']
    ]
  },

  delivery: {
    courier: 'Курьером по Минску с 11:00 до 20:00. Бесплатно при заказе от 300 BYN, иначе 10 BYN',
    post: 'Белпочтой и Европочтой по всей Беларуси, оплата при получении или картой',
    pay: 'Visa, Mastercard, Белкарт, наличные курьеру'
  }
};

const icon = {
  arrow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  arrowL: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
  user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>',
  bag: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M5 8h14l-1 13H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
  inst: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  plus: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>',
  drop: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3s6 7 6 11.5A6 6 0 0 1 6 14.5C6 10 12 3 12 3z"/></svg>',
  truck: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  shield: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',
  stetho: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 3v6a5 5 0 0 0 10 0V3"/><path d="M11 14v2a4 4 0 0 0 8 0v-3"/><circle cx="19" cy="11" r="2"/></svg>'
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const price = p => `${p}<small> BYN</small>`;

/* Переключатель вариантов – только для показа клиенту, в боевой сайт не идёт */
const switcher = current => {
  const items = [['v1.html', 'Вариант 1'], ['v2.html', 'Вариант 2'], ['wow.html', 'WOW'], ['wow2.html', 'WOW 2'], ['index.html', 'Все']];
  return `<nav class="sw" aria-label="Варианты главной">${items.map(([h, t]) => `<a href="${h}"${h === current ? ' class="on"' : ''}>${t}</a>`).join('')}</nav>
<style>.sw{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:9999;display:flex;gap:2px;padding:4px;border-radius:999px;background:rgba(14,22,24,.88);backdrop-filter:blur(10px);font:500 12px/1 system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.25)}.sw a{padding:9px 14px;border-radius:999px;text-decoration:none;white-space:nowrap;color:#eef5f6}.sw a.on{background:#eef5f6;color:#0e1618}@media(max-width:560px){.sw{bottom:8px}.sw a{padding:8px 10px;font-size:11px}}</style>
<script>if(top!==self){var s=document.querySelector('.sw');if(s)s.style.display='none'}</script>`;
};

/* Юридический подвал – одинаковый смысл во всех вариантах */
const legalHtml = () => `<p>${SC.legal.entity}, ${SC.legal.unp}. ${SC.legal.address}</p><p>${SC.legal.reg}. ${SC.legal.trade}</p><p>trihologic.by © 2026. Все права защищены</p>`;

module.exports = { SC, icon, esc, price, switcher, legalHtml };
