/* ================= داده بازی‌ها ================= */
const games = [
  {id:1,name:"Elden Ring: Nightreign",genre:"نقش‌آفرینی",emoji:"⚔️",colors:["#8b5cf6","#312e81"],
   rate:5,off:0,platforms:["PC","PS5","Xbox"],price:2800000,year:1404,
   dev:"FromSoftware",pub:"Bandai Namco",date:"۱ خرداد ۱۴۰۴",multi:true,single:true,
   desc:"شاهکار فرام‌سافتور؛ دنیایی باز و تاریک پر از باس‌های حماسی.",
   long:"Elden Ring: Nightreign ادامه‌ای بر نسخهٔ اصلی است که با افزودن حالت co-op چندنفره، سیستم جنگی بهبودیافته و دنیای بزرگ‌تر، تجربه‌ای حماسی‌تر ارائه می‌دهد. در این بازی شما در نقش یک Tarnished به Lands Between سفر می‌کنید تا Elden Ring را بازسازی کنید."},
  {id:2,name:"GTA VI",genre:"اکشن",emoji:"🚗",colors:["#f59e0b","#7c2d12"],
   rate:5,off:0,platforms:["PS5","Xbox"],price:3500000,year:1405,
   dev:"Rockstar North",pub:"Rockstar Games",date:"آبان ۱۴۰۵",multi:true,single:true,
   desc:"بازگشت به Vice City با داستان دو شخصیت اصلی.",
   long:"GTA VI بزرگ‌ترین و پرانتظارترین بازی دهه است. با دو شخصیت قابل بازی Lucia و Jason در شهر نئونی Vice City، بازی ترکیبی از اکشن، داستان‌سرایی سینمایی و آزادی بی‌مرز در گیم‌پلی است."},
  {id:3,name:"EA FC 26",genre:"ورزشی",emoji:"⚽",colors:["#22c55e","#064e3b"],
   rate:4,off:20,platforms:["PC","PS5","Xbox"],price:2200000,year:1404,
   dev:"EA Vancouver",pub:"EA Sports",date:"شهریور ۱۴۰۴",multi:true,single:true,
   desc:"جدیدترین نسخه شبیه‌ساز فوتبال با موتور HyperMotion V."},
  {id:4,name:"Call of Duty: Black Ops 7",genre:"شوتر",emoji:"🎯",colors:["#ef4444","#450a0a"],
   rate:4,off:25,platforms:["PC","PS5","Xbox"],price:2500000,year:1405,
   dev:"Treyarch",pub:"Activision",date:"آبان ۱۴۰۵",multi:true,single:true,
   desc:"بازگشت به ریشه‌های جنگ سرد با کمپین سینمایی جدید."},
  {id:5,name:"Minecraft: New Horizons",genre:"سندباکس",emoji:"⛏️",colors:["#84cc16","#14532d"],
   rate:5,off:0,platforms:["PC","موبایل","Switch","PS5","Xbox"],price:800000,year:1404,
   dev:"Mojang",pub:"Xbox Game Studios",date:"اردیبهشت ۱۴۰۴",multi:true,single:true,
   desc:"بزرگ‌ترین به‌روزرسانی تاریخ ماینکرفت با ۳ بیوم جدید."},
  {id:6,name:"Cyberpunk 2077: Phantom Liberty",genre:"نقش‌آفرینی",emoji:"🌆",colors:["#eab308","#701a75"],
   rate:4,off:40,platforms:["PC","PS5","Xbox"],price:1800000,year:1403,
   dev:"CD Projekt Red",pub:"CD Projekt",date:"مهر ۱۴۰۳",multi:false,single:true,
   desc:"گسترش داستانی با بازی ادریس البا در نقش یک مأمور فدرال."},
  {id:7,name:"God of War: Ragnarok",genre:"اکشن",emoji:"🪓",colors:["#94a3b8","#1e293b"],
   rate:5,off:0,platforms:["PC","PS5"],price:2600000,year:1402,
   dev:"Santa Monica Studio",pub:"Sony",date:"آذر ۱۴۰۲",multi:false,single:true,
   desc:"پایان حماسی سفر کریتوس و آترئوس در اساطیر نورس."},
  {id:8,name:"Rocket League",genre:"ورزشی",emoji:"🚀",colors:["#22d3ee","#1e3a8a"],
   rate:4,off:100,platforms:["PC","PS5","Xbox","Switch"],price:0,year:1394,
   dev:"Psyonix",pub:"Epic Games",date:"تیر ۱۳۹۴",multi:true,single:true,
   desc:"فوتبال با ماشین‌های موشکی — رایگان و اعتیادآور."},
  {id:9,name:"Starfield: Shattered Space",genre:"نقش‌آفرینی",emoji:"🚀",colors:["#0ea5e9","#082f49"],
   rate:4,off:30,platforms:["PC","Xbox"],price:2400000,year:1404,
   dev:"Bethesda",pub:"Bethesda",date:"مهر ۱۴۰۴",multi:false,single:true,
   desc:"گسترش بزرگ Starfield با داستان خانهٔ Va'ruun."},
  {id:10,name:"Hollow Knight: Silksong",genre:"اکشن",emoji:"🦋",colors:["#ec4899","#831843"],
   rate:5,off:0,platforms:["PC","Switch","PS5","Xbox"],price:1200000,year:1404,
   dev:"Team Cherry",pub:"Team Cherry",date:"شهریور ۱۴۰۴",multi:false,single:true,
   desc:"انتظار بالاخره به پایان رسید! ماجراجویی Hornet در Pharloom."},
  {id:11,name:"Diablo IV: Vessel of Hatred",genre:"نقش‌آفرینی",emoji:"🔥",colors:["#dc2626","#450a0a"],
   rate:4,off:15,platforms:["PC","PS5","Xbox"],price:2700000,year:1404,
   dev:"Blizzard",pub:"Blizzard",date:"مهر ۱۴۰۴",multi:true,single:true,
   desc:"اولین گسترش بزرگ Diablo IV با کلاس جدید Spiritborn."},
  {id:12,name:"The Witcher 4",genre:"نقش‌آفرینی",emoji:"🐺",colors:["#a855f7","#3b0764"],
   rate:5,off:0,platforms:["PC","PS5","Xbox"],price:3200000,year:1406,
   dev:"CD Projekt Red",pub:"CD Projekt",date:"۱۴۰۶",multi:false,single:true,
   desc:"بازگشت به دنیای Witcher با موتور Unreal Engine 5."}
];

const reviews = [
  {title:"نقد Elden Ring: Nightreign",excerpt:"ادامه‌ای شایسته برای شاهکار فرام‌سافتور با co-op فوق‌العاده.",author:"علی رضایی",date:"۲۵ شهریور ۱۴۰۵",score:9.5,emoji:"⚔️",colors:["#8b5cf6","#312e81"]},
  {title:"بررسی GTA VI پس از ۵۰ ساعت بازی",excerpt:"آیا واقعاً ارزش سال‌ها انتظار را داشت؟ پاسخ مثبت است.",author:"رضا احمدی",date:"۲۰ شهریور ۱۴۰۵",score:9.8,emoji:"🚗",colors:["#f59e0b","#7c2d12"]},
  {title:"Hollow Knight: Silksong ارزش بازی کردن داره؟",excerpt:"یک ماجراجویی بی‌نقص با طراحی هنری خیره‌کننده.",author:"نگار صادقی",date:"۱۸ شهریور ۱۴۰۵",score:9.2,emoji:"🦋",colors:["#ec4899","#831843"]},
  {title:"EA FC 26 نسبت به نسخه قبل چه تغییری کرده؟",excerpt:"گیم‌پلی بهتر، اما هنوز مشکلات سرور وجود دارد.",author:"مهدی کریمی",date:"۱۵ شهریور ۱۴۰۵",score:7.8,emoji:"⚽",colors:["#22c55e","#064e3b"]},
  {title:"راهنمای کامل باس‌های Cyberpunk 2077",excerpt:"استراتژی پیروزی در برابر سخت‌ترین باس‌های DLC.",author:"لیلا حسینی",date:"۱۰ شهریور ۱۴۰۵",score:null,emoji:"🌆",colors:["#eab308","#701a75"]},
  {title:"مقایسه PS5 Pro و Xbox Series X",excerpt:"کدام کنسول در سال ۲۰۲۶ ارزش خرید بیشتری داره؟",author:"سارا محمدی",date:"۵ شهریور ۱۴۰۵",score:null,emoji:"🎮",colors:["#06b6d4","#164e63"]}
];

const articles = [
  {title:"۱۰ بازی مستقل برتر ۲۰۲۶ که باید تجربه کنید",excerpt:"از RPGهای کوچک تا پازل‌های ذهنی، این بازی‌ها ثابت کردند خلاقیت مرز ندارد.",author:"علی رضایی",date:"۲۲ شهریور ۱۴۰۵",cat:"راهنما"},
  {title:"آیندهٔ واقعیت مجازی در بازی‌های ویدیویی",excerpt:"با عرضهٔ هدست‌های نسل جدید، VR در آستانهٔ یک انقلاب است.",author:"سارا محمدی",date:"۲۰ شهریور ۱۴۰۵",cat:"سخت‌افزار"},
  {title:"چطور یک استریمر حرفه‌ای شویم؟",excerpt:"از انتخاب تجهیزات تا مدیریت جامعه — راهنمای جامع استریم.",author:"مهدی کریمی",date:"۱۸ شهریور ۱۴۰۵",cat:"آموزش"},
  {title:"تاریخچهٔ بازی‌های نقش‌آفرینی از ۱۹۷۴ تا امروز",excerpt:"سفری ۵۰ ساله از Dungeons & Dragons تا Baldur's Gate 3.",author:"نگار صادقی",date:"۱۵ شهریور ۱۴۰۵",cat:"مقالات"},
  {title:"بهترین تنظیمات گرافیکی برای Cyberpunk 2077",excerpt:"تنظیماتی که بهترین تعادل بین کیفیت و FPS را بهت می‌ده.",author:"رضا احمدی",date:"۱۲ شهریور ۱۴۰۵",cat:"آموزش"},
  {title:"مصاحبه با کارگردان Elden Ring: Nightreign",excerpt:"گفتگویی اختصاصی با Hidetaka Miyazaki دربارهٔ آینده فرنچایز.",author:"لیلا حسینی",date:"۱۰ شهریور ۱۴۰۵",cat:"مصاحبه"}
];

/* ================= ابزارها ================= */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const stars = r => '★'.repeat(r) + '☆'.repeat(5-r);
const toFa = n => n.toLocaleString('fa-IR');
const fmtPrice = p => p === 0 ? 'رایگان' : toFa(p) + ' تومان';

/* ================= سبد خرید (localStorage) ================= */
let cart = JSON.parse(localStorage.getItem('gz_cart') || '[]');
const saveCart = () => {
  localStorage.setItem('gz_cart', JSON.stringify(cart));
  updateCartUI();
};
const addToCart = id => {
  const g = games.find(x => x.id === id);
  if(!g) return;
  const item = cart.find(x => x.id === id);
  if(item) item.qty++;
  else cart.push({id, qty:1});
  saveCart();
  flashCart();
};
const removeFromCart = id => {
  cart = cart.filter(x => x.id !== id);
  saveCart();
};
const updateQty = (id, delta) => {
  const item = cart.find(x => x.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(x => x.id !== id);
  saveCart();
};
const flashCart = () => {
  const btn = $('.cart-btn');
  if(!btn) return;
  btn.style.transform = 'scale(1.3)';
  setTimeout(() => btn.style.transform = '', 300);
};
const updateCartUI = () => {
  const count = cart.reduce((s,x) => s + x.qty, 0);
  $$('.cart-count').forEach(el => el.textContent = toFa(count));
  renderCartPage && renderCartPage();
};

/* ================= تم ================= */
const initTheme = () => {
  const saved = localStorage.getItem('gz_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  const btn = $('#themeToggle');
  if(btn) btn.textContent = saved === 'light' ? '☀️' : '🌙';
};
const toggleTheme = () => {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('gz_theme', next);
  const btn = $('#themeToggle');
  if(btn) btn.textContent = next === 'light' ? '☀️' : '🌙';
};

/* ================= رندر کارت بازی ================= */
const renderGameCard = g => `
  <a href="game.html?id=${g.id}" class="card">
    <div class="thumb" style="background:linear-gradient(135deg,${g.colors[0]},${g.colors[1]})">
      <span class="thumb-emoji">${g.emoji}</span>
      ${g.off ? `<span class="off-badge">${toFa(g.off)}٪ تخفیف</span>` : ''}
    </div>
    <div class="card-body">
      <h3>${g.name}</h3>
      <span class="genre">${g.genre}</span>
      <div class="rating">${stars(g.rate)}</div>
      <div class="platforms">${g.platforms.map(p => `<span class="tag">${p}</span>`).join('')}</div>
      <div class="price">
        ${g.off ? `<span class="price-old">${fmtPrice(g.price)}</span>` : ''}
        <span class="price-new">${fmtPrice(g.off ? g.price * (100-g.off)/100 : g.price)}</span>
      </div>
    </div>
  </a>`;

const renderReviewCard = r => `
  <article class="review-card">
    <div class="review-cover" style="background:linear-gradient(135deg,${r.colors[0]},${r.colors[1]})">
      <span class="thumb-emoji">${r.emoji}</span>
      ${r.score ? `<span class="review-score">${toFa(r.score)}</span>` : ''}
    </div>
    <div class="review-body">
      <h3>${r.title}</h3>
      <p class="review-excerpt">${r.excerpt}</p>
      <div class="review-meta">
        <span>👤 ${r.author}</span>
        <span>📅 ${r.date}</span>
      </div>
    </div>
  </article>`;

const renderArticleCard = a => `
  <a href="article.html?slug=${encodeURIComponent(a.title)}" class="blog-card">
    <span class="pill" style="font-size:.75rem;padding:4px 12px">${a.cat}</span>
    <h3 style="margin-top:10px">${a.title}</h3>
    <p>${a.excerpt}</p>
    <div class="blog-meta">
      <span>👤 ${a.author}</span>
      <span>📅 ${a.date}</span>
    </div>
  </a>`;

/* ================= صفحه اصلی ================= */
const initHome = () => {
  const fg = $('#featuredGrid');
  if(fg) fg.innerHTML = games.slice(0,4).map(renderGameCard).join('');
  const rh = $('#reviewsHome');
  if(rh) rh.innerHTML = reviews.slice(0,3).map(renderReviewCard).join('');
  const bh = $('#blogHome');
  if(bh) bh.innerHTML = articles.slice(0,3).map(renderArticleCard).join('');
};

/* ================= صفحه بازی‌ها ================= */
let activeGenre = 'همه';
let searchTerm = '';
let minRate = 5;
let maxPrice = 5000000;
let onlyOff = false;
let sortKey = 'popular';

const initGamesPage = () => {
  const grid = $('#gameGrid');
  if(!grid) return;

  // چیپ‌های ژانر
  const genres = ['همه', ...new Set(games.map(g => g.genre))];
  const chipsEl = $('#chips');
  chipsEl.innerHTML = genres.map(g =>
    `<button class="chip ${g===activeGenre?'active':''}" data-g="${g}">${g}</button>`
  ).join('');
  chipsEl.addEventListener('click', e => {
    if(e.target.dataset.g){
      activeGenre = e.target.dataset.g;
      chipsEl.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.g === activeGenre));
      renderGamesList();
    }
  });

  const si = $('#searchInput');
  si.addEventListener('input', e => { searchTerm = e.target.value; renderGamesList(); });

  $('#sortSelect').addEventListener('change', e => { sortKey = e.target.value; renderGamesList(); });
  $('#platformSelect').addEventListener('change', renderGamesList);
  $('#priceRange').addEventListener('input', e => {
    maxPrice = +e.target.value;
    $('#priceLabel').textContent = fmtPrice(maxPrice);
    renderGamesList();
  });
  $$('input[name="rate"]').forEach(r => r.addEventListener('change', e => {
    minRate = +e.target.value; renderGamesList();
  }));
  $('#chkOff').addEventListener('change', e => { onlyOff = e.target.checked; renderGamesList(); });
  $('#resetFilters').addEventListener('click', () => {
    activeGenre = 'همه'; searchTerm = ''; minRate = 5; maxPrice = 5000000; onlyOff = false;
    si.value = ''; $('#priceRange').value = 5000000; $('#priceLabel').textContent = fmtPrice(5000000);
    $('#chkOff').checked = false;
    renderGamesList();
  });

  renderGamesList();
};

const renderGamesList = () => {
  const grid = $('#gameGrid');
  const platform = $('#platformSelect')?.value || 'all';
  let list = games.filter(g => {
    if(activeGenre !== 'همه' && g.genre !== activeGenre) return false;
    if(searchTerm && !g.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if(g.rate < minRate) return false;
    const price = g.off ? g.price * (100-g.off)/100 : g.price;
    if(price > maxPrice) return false;
    if(onlyOff && !g.off) return false;
    if(platform !== 'all' && !g.platforms.includes(platform)) return false;
    return true;
  });
  if(sortKey === 'rating') list.sort((a,b) => b.rate - a.rate);
  else if(sortKey === 'newest') list.sort((a,b) => b.year - a.year);
  else if(sortKey === 'price-low') list.sort((a,b) => (a.price*(100-a.off||100)) - (b.price*(100-b.off||100)));
  else if(sortKey === 'price-high') list.sort((a,b) => (b.price*(100-b.off||100)) - (a.price*(100-a.off||100)));

  $('#resultCount').textContent = `نمایش ${toFa(list.length)} از ${toFa(games.length)} بازی`;
  const empty = $('#emptyState');
  if(list.length === 0){ grid.innerHTML = ''; empty.style.display = 'block'; }
  else { empty.style.display = 'none'; grid.innerHTML = list.map(renderGameCard).join(''); }
};

/* ================= صفحه جزئیات بازی ================= */
const initGamePage = () => {
  const detail = $('#gameDetail');
  if(!detail) return;
  const id = +new URLSearchParams(location.search).get('id');
  const g = games.find(x => x.id === id);
  if(!g){ detail.innerHTML = '<div class="empty">بازی پیدا نشد.</div>'; return; }

  $('#bcTitle').textContent = g.name;
  $('#gdHero').style.background = `linear-gradient(135deg,${g.colors[0]},${g.colors[1]})`;
  $('#gdEmoji').textContent = g.emoji;
  $('#gdTitle').textContent = g.name;
  $('#gdGenre').textContent = g.genre;
  $('#gdYear').textContent = toFa(g.year);
  $('#gdStars').textContent = stars(g.rate);
  $('#gdScore').textContent = `${toFa(g.rate)} از ۵`;
  $('#gdDesc').textContent = g.long;
  $('#gdDev').textContent = g.dev;
  $('#gdPub').textContent = g.pub;
  $('#gdPlats').innerHTML = g.platforms.map(p => `<span class="tag">${p}</span>`).join(' ');
  $('#gdDate').textContent = g.date;
  const finalPrice = g.off ? g.price*(100-g.off)/100 : g.price;
  $('#gdOld').textContent = g.off ? fmtPrice(g.price) : '';
  $('#gdNew').textContent = fmtPrice(finalPrice);

  $('#addCartBtn').addEventListener('click', () => addToCart(g.id));

  // تب‌ها
  $('#tab-about').innerHTML = `<p>${g.long}</p><h3 style="margin-top:20px;margin-bottom:10px">ویژگی‌ها</h3>
    <ul style="color:var(--muted)"><li>• حالت ${g.single?'تک‌نفره':''} ${g.multi?'و چندنفره':''}</li>
    <li>• ژانر: ${g.genre}</li><li>• سال انتشار: ${toFa(g.year)}</li></ul>`;
  $('#tab-specs').innerHTML = `<div class="gd-meta">
    <div><b>سازنده:</b> ${g.dev}</div><div><b>ناشر:</b> ${g.pub}</div>
    <div><b>پلتفرم‌ها:</b> ${g.platforms.join('، ')}</div><div><b>تاریخ:</b> ${g.date}</div></div>`;
  $('#tab-reviews').innerHTML = `<div style="color:var(--muted)">نظرات کاربران به‌زودی اضافه می‌شود...</div>`;
  $('#tab-related').innerHTML = games.filter(x => x.genre === g.genre && x.id !== g.id).slice(0,4).map(renderGameCard).join('');

  $$('.tab-btn').forEach(btn => btn.addEventListener('click', () => {
    $$('.tab-btn').forEach(b => b.classList.remove('active'));
    $$('.tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    $('#tab-' + btn.dataset.tab).classList.add('active');
  }));
};

/* ================= صفحه نقدها ================= */
const initReviewsPage = () => {
  const grid = $('#reviewsGrid');
  if(grid) grid.innerHTML = reviews.map(renderReviewCard).join('');
};

/* ================= صفحه بلاگ ================= */
const initBlogPage = () => {
  const grid = $('#blogGrid');
  if(grid) grid.innerHTML = articles.map(renderArticleCard).join('');
};

/* ================= صفحه سبد خرید ================= */
const renderCartPage = () => {
  const box = $('#cartItems');
  if(!box) return;
  if(cart.length === 0){
    box.innerHTML = '<div class="empty">سبد خرید شما خالی است. <a href="games.html">بازی‌ها را ببین</a></div>';
    $('#sumSubtotal').textContent = fmtPrice(0);
    $('#sumDiscount').textContent = fmtPrice(0);
    $('#sumTax').textContent = fmtPrice(0);
    $('#sumTotal').textContent = fmtPrice(0);
    return;
  }
  box.innerHTML = cart.map(item => {
    const g = games.find(x => x.id === item.id);
    const unit = g.off ? g.price*(100-g.off)/100 : g.price;
    return `<div class="cart-item">
      <div class="cart-thumb" style="background:linear-gradient(135deg,${g.colors[0]},${g.colors[1]})">${g.emoji}</div>
      <div>
        <h4>${g.name}</h4>
        <div class="cart-item-meta">${fmtPrice(unit)} × ${toFa(item.qty)}</div>
        <div class="qty-control">
          <button class="qty-btn" data-id="${g.id}" data-d="-1">−</button>
          <span class="qty-num">${toFa(item.qty)}</span>
          <button class="qty-btn" data-id="${g.id}" data-d="1">+</button>
        </div>
      </div>
      <div class="cart-item-actions">
        <div class="price-new">${fmtPrice(unit * item.qty)}</div>
        <button class="remove-btn" data-id="${g.id}">حذف</button>
      </div>
    </div>`;
  }).join('');

  box.querySelectorAll('.qty-btn').forEach(b =>
    b.addEventListener('click', () => updateQty(+b.dataset.id, +b.dataset.d)));
  box.querySelectorAll('.remove-btn').forEach(b =>
    b.addEventListener('click', () => removeFromCart(+b.dataset.id)));

  const subtotal = cart.reduce((s,item) => {
    const g = games.find(x => x.id === item.id);
    const unit = g.off ? g.price*(100-g.off)/100 : g.price;
    return s + unit * item.qty;
  }, 0);
  const tax = Math.round(subtotal * 0.09);
  const total = subtotal + tax;
  $('#sumSubtotal').textContent = fmtPrice(subtotal);
  $('#sumTax').textContent = fmtPrice(tax);
  $('#sumTotal').textContent = fmtPrice(total);
};

/* ================= خبرنامه ================= */
const initNewsletter = () => {
  const form = $('#subForm');
  if(!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = $('#email').value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const msg = $('#msg');
    if(!valid){ msg.textContent = '❌ ایمیل معتبر نیست.'; msg.className = 'msg error'; return; }
    msg.textContent = '✅ عضویتت ثبت شد!'; msg.className = 'msg success';
    form.reset();
  });
};

/* ================= فرم تماس ================= */
const initContact = () => {
  const form = $('#contactForm');
  if(!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#cName').value.trim();
    const email = $('#cEmail').value.trim();
    const msg = $('#cMessage').value.trim();
    const out = $('#contactMsg');
    if(!name || !email || !msg){
      out.textContent = '❌ لطفاً همه فیلدها را پر کن.'; out.className = 'msg error'; return;
    }
    out.textContent = '✅ پیامت با موفقیت ارسال شد. به‌زودی پاسخ می‌دیم!'; out.className = 'msg success';
    form.reset();
  });
};

/* ================= احراز هویت ================= */
const initAuth = () => {
  $$('.auth-tab').forEach(t => t.addEventListener('click', () => {
    $$('.auth-tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    const isLogin = t.dataset.tab === 'login';
    $('#loginForm').style.display = isLogin ? 'block' : 'none';
    $('#registerForm').style.display = isLogin ? 'none' : 'block';
    $('#authTitle').textContent = isLogin ? 'ورود به حساب' : 'ساخت حساب جدید';
    $('#authSub').textContent = isLogin ? 'به دنیای گیمرها خوش برگشتی!' : 'به جامعهٔ گیم‌زون بپیوند!';
  }));

  const lf = $('#loginForm');
  if(lf) lf.addEventListener('submit', e => {
    e.preventDefault();
    const email = $('#lEmail').value.trim();
    const pass = $('#lPass').value;
    const msg = $('#loginMsg');
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || pass.length < 6){
      msg.textContent = '❌ ایمیل یا رمز معتبر نیست.'; msg.className = 'msg error'; return;
    }
    msg.textContent = '✅ ورود موفق! در حال انتقال...'; msg.className = 'msg success';
    setTimeout(() => location.href = 'index.html', 1200);
  });

  const rf = $('#registerForm');
  if(rf) rf.addEventListener('submit', e => {
    e.preventDefault();
    const pass = $('#rPass').value;
    const pass2 = $('#rPass2').value;
    const msg = $('#regMsg');
    if(pass !== pass2){ msg.textContent = '❌ رمزها یکسان نیستند.'; msg.className = 'msg error'; return; }
    if(pass.length < 6){ msg.textContent = '❌ رمز باید حداقل ۶ کاراکتر باشد.'; msg.className = 'msg error'; return; }
    msg.textContent = '✅ حسابت ساخته شد!'; msg.className = 'msg success';
    setTimeout(() => location.href = 'index.html', 1200);
  });
};

/* ================= عمومی ================= */
const initHeader = () => {
  const header = $('#siteHeader');
  const toTop = $('#toTop');
  window.addEventListener('scroll', () => {
    if(header) header.classList.toggle('scrolled', window.scrollY > 10);
    if(toTop) toTop.classList.toggle('show', window.scrollY > 400);
  });
  if(toTop) toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  const menuBtn = $('#menuToggle');
  const navMenu = $('#navMenu');
  if(menuBtn && navMenu) menuBtn.addEventListener('click', () => navMenu.classList.toggle('open'));
};

const initCounters = () => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 50));
      const t = setInterval(() => {
        cur += step;
        if(cur >= target){ cur = target; clearInterval(t); }
        el.textContent = toFa(cur);
      }, 30);
      obs.unobserve(el);
    });
  }, {threshold:.4});
  $$('.num').forEach(el => obs.observe(el));
};

const initReveals = () => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, {threshold:.1});
  $$('.reveal').forEach(el => obs.observe(el));
};

/* ================= شروع ================= */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeader();
  initCounters();
  initReveals();
  initNewsletter();
  updateCartUI();

  const tb = $('#themeToggle');
  if(tb) tb.addEventListener('click', toggleTheme);

  // بر اساس صفحه
  if($('#featuredGrid')) initHome();
  if($('#gameGrid')) initGamesPage();
  if($('#gameDetail')) initGamePage();
  if($('#reviewsGrid')) initReviewsPage();
  if($('#blogGrid')) initBlogPage();
  if($('#cartItems')) renderCartPage();
  if($('#contactForm')) initContact();
  if($('.auth-card')) initAuth();

  if($('#checkoutBtn')) $('#checkoutBtn').addEventListener('click', () =>
    alert('🎉 سفارشت ثبت شد! (این یک دمو است)'));
  if($('#applyCoupon')) $('#applyCoupon').addEventListener('click', () =>
    alert('کد تخفیف معتبر نیست!'));
  if($('#wishlistBtn')) $('#wishlistBtn').addEventListener('click', e => {
    e.target.textContent = e.target.textContent.includes('❤️') ? '💖 در لیست علاقه‌مندی‌ها' : '❤️ علاقه‌مندی';
  });
});