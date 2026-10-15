// Latest Creations-ൽ ആവശ്യമുള്ള ടൈറ്റിൽ ഇവിടെ നൽകാം (title ഒഴിച്ചിട്ടാൽ തനിയെ Design #code ആയിക്കോളും)
const latestCreationsFiles = [
  { file: "17.png", title: " " },
  { file: "25.png", title: " " },
  { file: "75.png", title: " " },
  { file: "44.png", title: " " },
  { file: "9.png", title: " " }
];

// --- MAIN GALLERY ITEMS (TITLE PORTION REMOVED) ---
const galleryItems = [
  { file: "1.png", category: "necklace" },
  { file: "2.png", category: "pendants" },
  { file: "3.png", category: "comboset" },
  { file: "4.png", category: "bracelet" },
  { file: "5.png", category: "necklace" },
  { file: "6.png", category: "comboset" },
  { file: "7.png", category: "comboset" },
  { file: "8.png", category: "comboset" },
  { file: "9.png", category: "pendants" },
  { file: "10.png", category: "comboset" },
  { file: "11.png", category: "diamond" },
  { file: "12.png", category: "pendants" },
  { file: "13.png", category: "comboset" },
  { file: "14.png", category: "diamond" },
  { file: "15.png", category: "bracelet" },
  { file: "16.png", category: "diamond" },
  { file: "17.png", category: "bangles" },
  { file: "18.png", category: "earrings" },
  { file: "19.png", category: "bangles" },
  { file: "20.png", category: "bangles" },
  { file: "21.png", category: "diamond" },
  { file: "22.png", category: "diamond" },
  { file: "23.png", category: "bracelet" },
  { file: "24.png", category: "diamond" },
  { file: "25.png", category: "comboset" },
  { file: "26.png", category: "comboset" },
  { file: "27.png", category: "pendants" },
  { file: "28.png", category: "bangles" },
  { file: "29.png", category: "bangles" },
  { file: "30.png", category: "necklace" },
  { file: "31.png", category: "comboset" },
  { file: "32.png", category: "diamond" },
  { file: "33.png", category: "pendants" },
  { file: "34.png", category: "diamond" },
  { file: "35.png", category: "bracelet" },
  { file: "36.png", category: "pendants" },
  { file: "37.png", category: "necklace" },
  { file: "38.png", category: "bracelet" },
  { file: "39.png", category: "necklace" },
  { file: "40.png", category: "necklace" },
  { file: "41.png", category: "necklace" },
  { file: "42.png", category: "earrings" },
  { file: "43.png", category: "diamond" },
  { file: "44.png", category: "bracelet" },
  { file: "45.png", category: "bracelet" },
  { file: "46.png", category: "diamond" },
  { file: "47.png", category: "diamond" },
  { file: "48.png", category: "necklace" },
  { file: "49.png", category: "diamond" },
  { file: "50.png", category: "necklace" },
  { file: "51.png", category: "bracelet" },
  { file: "52.png", category: "bracelet" },
  { file: "53.png", category: "rings" },
  { file: "54.png", category: "earrings" },
  { file: "55.png", category: "diamond" },
  { file: "56.png", category: "rings" },
  { file: "57.png", category: "necklace" },
  { file: "58.png", category: "necklace" },
  { file: "59.png", category: "necklace" },
  { file: "60.png", category: "diamond" },
  { file: "61.png", category: "necklace" },
  { file: "62.png", category: "rings" },
  { file: "63.png", category: "necklace" },
  { file: "64.png", category: "necklace" },
  { file: "65.png", category: "diamond" },
  { file: "66.png", category: "earrings" },
  { file: "67.png", category: "diamond" },
  { file: "68.png", category: "necklace" },
  { file: "69.png", category: "necklace" },
  { file: "70.png", category: "necklace" },
  { file: "71.png", category: "necklace" },
  { file: "72.png", category: "necklace" },
  { file: "73.png", category: "bangles" },
  { file: "74.png", category: "necklace" },
  { file: "75.png", category: "earrings" },
  { file: "76.png", category: "necklace" },
  { file: "77.png", category: "earrings" },
  { file: "78.png", category: "diamond" },
  { file: "79.png", category: "comboset" },
  { file: "80.png", category: "necklace" },
  { file: "81.png", category: "diamond" },
  { file: "82.png", category: "earrings" },
  { file: "83.png", category: "necklace" },
  { file: "84.png", category: "earrings" },
  { file: "85.png", category: "diamond" },
  { file: "86.png", category: "necklace" },
  { file: "87.png", category: "earrings" },
  { file: "88.png", category: "necklace" },
  { file: "89.png", category: "necklace" },
  { file: "90.png", category: "comboset" },
  { file: "91.png", category: "comboset" },
  { file: "92.png", category: "diamond" },
  { file: "93.png", category: "bangles" },
  { file: "94.png", category: "pendants" },
  { file: "95.png", category: "comboset" },
  { file: "96.png", category: "comboset" },
  { file: "97.png", category: "necklace" },
  { file: "98.png", category: "comboset" },
  { file: "99.png", category: "comboset" }
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
  const c = cat.toLowerCase().replace(/[\s\-_/]+/g, '');
  if (c.includes("earring") || c.includes("stud")) return "earrings";
  if (c.includes("ring")) return "rings";
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

  recentContainer.innerHTML = latestCreationsFiles.map(item => {
    const code = item.file.replace(/\.[^/.]+$/, "");
    // Title നൽകിയിട്ടുണ്ടെങ്കിൽ അത് എടുക്കും, ഇല്ലെങ്കിൽ മാത്രം fallback ആയി Design #code എടുക്കും
    const displayTitle = (item.title && item.title.trim() !== "") ? item.title : `Design #${code}`;

    return `
      <div class="recent-card">
        <div class="recent-img-box">
          <img src="images/Gallery/${item.file}" alt="${displayTitle}" loading="lazy" />
          <span class="recent-tag">New</span>
        </div>
        <h4>${displayTitle}</h4>
      </div>
    `;
  }).join('');
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
    const code = item.file.replace(/\.[^/.]+$/, "");
    const imageUrl = `https://www.tianagoldanddiamonds.com/images/Gallery/${item.file}`;
    const whatsappMsg = encodeURIComponent(`Hello, I am interested in Design #${code} from Tiana Gallery.\nImage Link: ${imageUrl}`);
    const whatsappUrl = `https://wa.me/+919645522916?text=${whatsappMsg}`;

    return `
      <div class="gds" data-img="images/Gallery/${item.file}" data-fullimg="${imageUrl}" data-code="Design #${code}">
        <img src="images/Gallery/${item.file}" alt="Design #${code}" loading="lazy">
        <div class="item-overlay">
          <span>Design #${code}</span>
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

  function selectCategory(cat, displayName) {
    currentCategory = cat;
    currentPage = 1;
    renderGallery(currentPage);

    tabs.forEach(t => {
      if (t.getAttribute("data-category") === cat) {
        t.classList.add("active");
      } else {
        t.classList.remove("active");
      }
    });

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

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const cat = tab.getAttribute("data-category");
      selectCategory(cat, tab.textContent.trim());
    });
  });

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
        const itemCode = card.getAttribute("data-code");

        modal.style.display = "flex";
        modalImg.src = localImgSrc;

        if (modalWaBtn) {
          const waMsg = encodeURIComponent(`Hello Tiana Gold & Diamonds, I am interested in ${itemCode} from your gallery.\nImage Link: ${fullImgUrl}`);
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
