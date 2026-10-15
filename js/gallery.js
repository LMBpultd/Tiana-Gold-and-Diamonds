// Ivide user-nu thalparyamulla images order anusarichu list cheyyam
const latestCreationsFiles = [
  { file: "1.png", title: "Royal Gold Necklace" },
  { file: "2.png", title: "Floral Gold Pendant" },
  { file: "3.png", title: "Bridal Combo Set" },
  { file: "4.png", title: "Classic Gold Bracelet" },
  { file: "5.png", title: "Traditional Necklace" }
];

// --- MAIN GALLERY ITEMS WITH NORMALIZED CATEGORIES ---
const galleryItems = [
  { file: "1.png", category: "necklace", title: "Gold Necklace 1" },
  { file: "2.png", category: "pendants", title: "Gold Pendant 2" },
  { file: "3.png", category: "comboset", title: "Bridal Combo Set 3" },
  { file: "4.png", category: "bracelet", title: "Gold Bracelet 4" },
  { file: "5.png", category: "necklace", title: "Gold Necklace 5" },
  { file: "6.png", category: "comboset", title: "Combo Set 6" },
  { file: "7.png", category: "comboset", title: "Combo Set 7" },
  { file: "8.png", category: "comboset", title: "Combo Set 8" },
  { file: "9.png", category: "pendants", title: "Gold Pendant 9" },
  { file: "10.png", category: "comboset", title: "Combo Set 10" },
  { file: "11.png", category: "diamond", title: "Diamond Jewellery 11" },
  { file: "12.png", category: "pendants", title: "Gold Pendant 12" },
  { file: "13.png", category: "comboset", title: "Combo Set 13" },
  { file: "14.png", category: "diamond", title: "Diamond Jewellery 14" },
  { file: "15.png", category: "bracelet", title: "Gold Bracelet 15" },
  { file: "16.png", category: "diamond", title: "Diamond Jewellery 16" },
  { file: "17.png", category: "bangles", title: "Gold Bangle 17" },
  { file: "18.png", category: "earrings", title: "Gold Studs 18" },
  { file: "19.png", category: "bangles", title: "Gold Bangle 19" },
  { file: "20.png", category: "bangles", title: "Gold Bangle 20" },
  { file: "21.png", category: "diamond", title: "Diamond Jewellery 21" },
  { file: "22.png", category: "diamond", title: "Diamond Jewellery 22" },
  { file: "23.png", category: "bracelet", title: "Gold Bracelet 23" },
  { file: "24.png", category: "diamond", title: "Diamond Jewellery 24" },
  { file: "25.png", category: "comboset", title: "Combo Set 25" },
  { file: "26.png", category: "comboset", title: "Combo Set 26" },
  { file: "27.png", category: "pendants", title: "Gold Pendant 27" },
  { file: "28.png", category: "bangles", title: "Gold Bangle 28" },
  { file: "29.png", category: "bangles", title: "Gold Bangle 29" },
  { file: "30.png", category: "necklace", title: "Gold Necklace 30" },
  { file: "31.png", category: "comboset", title: "Combo Set 31" },
  { file: "32.png", category: "diamond", title: "Diamond Jewellery 32" },
  { file: "33.png", category: "pendants", title: "Gold Pendant 33" },
  { file: "34.png", category: "diamond", title: "Diamond Jewellery 34" },
  { file: "35.png", category: "bracelet", title: "Gold Bracelet 35" },
  { file: "36.png", category: "pendants", title: "Gold Pendant 36" },
  { file: "37.png", category: "necklace", title: "Gold Necklace 37" },
  { file: "38.png", category: "bracelet", title: "Gold Bracelet 38" },
  { file: "39.png", category: "necklace", title: "Gold Necklace 39" },
  { file: "40.png", category: "necklace", title: "Gold Necklace 40" },
  { file: "41.png", category: "necklace", title: "Gold Necklace 41" },
  { file: "42.png", category: "earrings", title: "Gold Studs 42" },
  { file: "43.png", category: "diamond", title: "Diamond Jewellery 43" },
  { file: "44.png", category: "bracelet", title: "Gold Bracelet 44" },
  { file: "45.png", category: "bracelet", title: "Gold Bracelet 45" },
  { file: "46.png", category: "diamond", title: "Diamond Jewellery 46" },
  { file: "47.png", category: "diamond", title: "Diamond Jewellery 47" },
  { file: "48.png", category: "necklace", title: "Gold Necklace 48" },
  { file: "49.png", category: "diamond", title: "Diamond Jewellery 49" },
  { file: "50.png", category: "necklace", title: "Gold Necklace 50" },
  { file: "51.png", category: "bracelet", title: "Gold Bracelet 51" },
  { file: "52.png", category: "bracelet", title: "Gold Bracelet 52" },
  { file: "53.png", category: "rings", title: "Gold Ring 53" },
  { file: "54.png", category: "earrings", title: "Gold Stud 54" },
  { file: "55.png", category: "diamond", title: "Diamond Jewellery 55" },
  { file: "56.png", category: "rings", title: "Gold Ring 56" },
  { file: "57.png", category: "necklace", title: "Gold Necklace 57" },
  { file: "58.png", category: "necklace", title: "Gold Necklace 58" },
  { file: "59.png", category: "necklace", title: "Gold Necklace 59" },
  { file: "60.png", category: "diamond", title: "Diamond Jewellery 60" },
  { file: "61.png", category: "necklace", title: "Gold Necklace 61" },
  { file: "62.png", category: "rings", title: "Gold Ring 62" },
  { file: "63.png", category: "necklace", title: "Gold Necklace 63" },
  { file: "64.png", category: "necklace", title: "Gold Necklace 64" },
  { file: "65.png", category: "diamond", title: "Diamond Jewellery 65" },
  { file: "66.png", category: "earrings", title: "Gold Studs 66" },
  { file: "67.png", category: "diamond", title: "Diamond Jewellery 67" },
  { file: "68.png", category: "necklace", title: "Gold Necklace 68" },
  { file: "69.png", category: "necklace", title: "Gold Necklace 69" },
  { file: "70.png", category: "necklace", title: "Gold Necklace 70" },
  { file: "71.png", category: "necklace", title: "Gold Necklace 71" },
  { file: "72.png", category: "necklace", title: "Gold Necklace 72" },
  { file: "73.png", category: "bangles", title: "Gold Bangle 73" },
  { file: "74.png", category: "necklace", title: "Gold Necklace 74" },
  { file: "75.png", category: "earrings", title: "Gold Studs 75" },
  { file: "76.png", category: "necklace", title: "Gold Necklace 76" },
  { file: "77.png", category: "earrings", title: "Gold Studs 77" },
  { file: "78.png", category: "diamond", title: "Diamond Jewellery 78" },
  { file: "79.png", category: "comboset", title: "Combo Set 79" },
  { file: "80.png", category: "necklace", title: "Gold Necklace 80" },
  { file: "81.png", category: "diamond", title: "Diamond Jewellery 81" },
  { file: "82.png", category: "earrings", title: "Gold Stud 82" },
  { file: "83.png", category: "necklace", title: "Gold Necklace 83" },
  { file: "84.png", category: "earrings", title: "Gold Studs 84" },
  { file: "85.png", category: "diamond", title: "Diamond Jewellery 85" },
  { file: "86.png", category: "necklace", title: "Gold Necklace 86" },
  { file: "87.png", category: "earrings", title: "Gold Studs 87" },
  { file: "88.png", category: "necklace", title: "Gold Necklace 88" },
  { file: "89.png", category: "necklace", title: "Gold Necklace 89" },
  { file: "90.png", category: "comboset", title: "Combo Set 90" },
  { file: "91.png", category: "comboset", title: "Combo Set 91" },
  { file: "92.png", category: "diamond", title: "Diamond Jewellery 92" },
  { file: "93.png", category: "bangles", title: "Gold Bangle 93" },
  { file: "94.png", category: "pendants", title: "Gold Pendant 94" },
  { file: "95.png", category: "comboset", title: "Combo Set 95" },
  { file: "96.png", category: "comboset", title: "Combo Set 96" },
  { file: "97.png", category: "necklace", title: "Gold Necklace 97" },
  { file: "98.png", category: "comboset", title: "Combo Set 98" },
  { file: "99.png", category: "comboset", title: "Combo Set 99" }
];

let currentCategory = "all";
let currentPage = 1;
const isMobile = window.innerWidth <= 768;
const itemsPerPage = isMobile ? 12 : 20;

const galleryContainer = document.getElementById("dynamic-gallery");
const paginationContainer = document.getElementById("pagination-controls");
const recentContainer = document.getElementById("recent-gallery-row");

// Helper to normalize category comparison
function normalizeCat(cat) {
  if (!cat) return "";
  const c = cat.toLowerCase().replace(/\s+/g, '');
  if (c.includes("ring")) return "rings";
  if (c.includes("stud") || c.includes("earring")) return "earrings";
  if (c.includes("bangle")) return "bangles";
  if (c.includes("brac")) return "bracelet";
  if (c.includes("pendant")) return "pendants";
  if (c.includes("neck")) return "necklace";
  if (c.includes("combo")) return "comboset";
  if (c.includes("diam")) return "diamond";
  return c;
}

function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// --- RENDER TOP LATEST ITEMS ---
function renderRecentArrivals() {
  if (!recentContainer) return;

  recentContainer.innerHTML = latestCreationsFiles.map(item => `
    <div class="recent-card">
      <div class="recent-img-box">
        <img src="images/Gallery/${item.file}" alt="${item.title}" loading="lazy" />
        <span class="recent-tag">New</span>
      </div>
      <h4>${item.title}</h4>
    </div>
  `).join('');
}

// --- RENDER FILTERED CATEGORY GALLERY ---
function renderGallery(page = 1) {
  if (!galleryContainer) return;
  galleryContainer.innerHTML = "";

  let filteredItems;
  if (currentCategory === "all") {
    filteredItems = shuffleArray(galleryItems);
  } else {
    filteredItems = galleryItems.filter(item => normalizeCat(item.category) === currentCategory);
  }

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  if (paginatedItems.length === 0) {
    galleryContainer.innerHTML = `<div class="no-items" style="grid-column: 1/-1; text-align:center; padding: 40px; color:#888;"><p>No designs available in this category currently.</p></div>`;
    if (paginationContainer) paginationContainer.innerHTML = "";
    return;
  }

  galleryContainer.innerHTML = paginatedItems.map(item => {
    const imageUrl = `https://www.tianagoldanddiamonds.com/images/Gallery/${item.file}`;
    const whatsappMsg = encodeURIComponent(`Hello, I am interested in this design: ${item.title || 'Jewellery Design'}\nImage: ${imageUrl}`);
    const whatsappUrl = `https://wa.me/+919645522916?text=${whatsappMsg}`;

    return `
      <div class="gds" data-img="images/Gallery/${item.file}" data-fullimg="${imageUrl}" data-title="${item.title || 'Tiana Jewellery'}">
        <img src="images/Gallery/${item.file}" alt="${item.title}" loading="lazy">
        <div class="item-overlay">
          <span>${item.title || 'Exclusive Design'}</span>
          <a href="${whatsappUrl}" target="_blank" class="wa-inquiry-btn" title="Enquire on WhatsApp" onclick="event.stopPropagation();">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    `;
  }).join('');

  renderPagination(filteredItems.length);
}

// --- RENDER PAGINATION ---
function renderPagination(totalCount) {
  if (!paginationContainer) return;
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  if (totalPages <= 1) {
    paginationContainer.innerHTML = "";
    return;
  }

  let html = `<button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>&laquo; Prev</button>`;
  html += `<span class="page-info">Page ${currentPage} of ${totalPages}</span>`;
  html += `<button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>Next &raquo;</button>`;

  paginationContainer.innerHTML = html;
}

window.changePage = function(newPage) {
  currentPage = newPage;
  renderGallery(currentPage);
  window.scrollTo({ top: galleryContainer.offsetTop - 120, behavior: 'smooth' });
};

// --- INITIALIZATION & EVENT LISTENERS ---
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".cat-btn");
  const drawerBtns = document.querySelectorAll(".drawer-cat-btn");
  const mobileCatTrigger = document.getElementById("mobileCatTrigger");
  const catDrawer = document.getElementById("catDrawer");
  const catDrawerBackdrop = document.getElementById("catDrawerBackdrop");
  const catDrawerClose = document.getElementById("catDrawerClose");

  function openDrawer() {
    if (catDrawer && catDrawerBackdrop) {
      catDrawer.classList.add("open");
      catDrawerBackdrop.classList.add("show");
      document.body.style.overflow = "hidden";
    }
  }

  function closeDrawer() {
    if (catDrawer && catDrawerBackdrop) {
      catDrawer.classList.remove("open");
      catDrawerBackdrop.classList.remove("show");
      document.body.style.overflow = "";
    }
  }

  if (mobileCatTrigger) mobileCatTrigger.addEventListener("click", openDrawer);
  if (catDrawerClose) catDrawerClose.addEventListener("click", closeDrawer);
  if (catDrawerBackdrop) catDrawerBackdrop.addEventListener("click", closeDrawer);

  // Sync category selection across both Top Tabs and Drawer
  function selectCategory(cat, displayName) {
    currentCategory = cat;
    currentPage = 1;
    renderGallery(currentPage);

    // Update main tabs active state
    tabs.forEach(t => {
      if (t.getAttribute("data-category") === cat) {
        t.classList.add("active");
      } else {
        t.classList.remove("active");
      }
    });

    // Update drawer active state
    drawerBtns.forEach(d => {
      if (d.getAttribute("data-category") === cat) {
        d.classList.add("active");
      } else {
        d.classList.remove("active");
      }
    });

    if (displayName) {
      showToast(`Viewing ${displayName}`, 'info', 2000);
    }
  }

  // Top Tabs Click Event
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const cat = tab.getAttribute("data-category");
      selectCategory(cat, tab.textContent.trim());
    });
  });

  // Drawer Buttons Click Event
  drawerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category");
      selectCategory(cat, btn.textContent.trim());
      closeDrawer();
      window.scrollTo({ top: galleryContainer.offsetTop - 120, behavior: 'smooth' });
    });
  });

  renderRecentArrivals();
  renderGallery(1);

  // Modal Image Zoom Logic & Direct WhatsApp Click
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");
  const modalWaBtn = document.getElementById("modalWhatsappBtn");

  if (galleryContainer && modal) {
    galleryContainer.addEventListener("click", (e) => {
      const card = e.target.closest(".gds");
      if (card && !e.target.closest(".wa-inquiry-btn")) {
        const localImgSrc = card.getAttribute("data-img");
        const fullImgUrl = card.getAttribute("data-fullimg");
        const itemTitle = card.getAttribute("data-title");

        modal.style.display = "flex";
        modalImg.src = localImgSrc;

        // WhatsApp inquiry button on modal top-right
        if (modalWaBtn) {
          const waMsg = encodeURIComponent(`Hello Tiana Gold & Diamonds, I am interested in this design: ${itemTitle}\nImage: ${fullImgUrl}`);
          modalWaBtn.href = `https://wa.me/+919645522916?text=${waMsg}`;
        }
      }
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});