const mediaFiles = [
  "14.jpeg",
  "15.jpeg",
  "17.jpeg",
  "16.jpeg",
  "18.jpeg",
  "19.jpeg",
  "11.jpeg",
  "12.jpeg",
  "24.jpeg",
  "29.jpeg",
  "30.jpeg",
  "20.jpeg",
  "31.jpeg",
  "21.jpeg",
  "22.jpeg",
  "13.jpeg",
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.webp",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg"






];

const isMobile = window.innerWidth <= 1000;
const itemsPerPage = isMobile ? 20 : 40; 
let currentPage = 1;

const galleryContainer = document.getElementById("dynamic-gallery");
const paginationContainer = document.getElementById("pagination-controls");

function renderGallery(page) {
  galleryContainer.innerHTML = "";
  
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = mediaFiles.slice(startIndex, endIndex);

  paginatedItems.forEach(file => {
    const ext = file.split('.').pop().toLowerCase();
    const isVideo = ['mp4', 'mkv', 'webm', 'ogg'].includes(ext);
    
    let mediaElement = '';
    if (isVideo) {
      mediaElement = `<video autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover; border-radius:8px;">
                        <source src="images/Gallery/${file}" type="video/${ext}">
                      </video>`;
    } else {
      mediaElement = `<img src="images/Gallery/${file}" alt="Gallery Image" loading="lazy">`;
    }
    
    galleryContainer.innerHTML += `<div class="gds">${mediaElement}</div>`;
  });

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(mediaFiles.length / itemsPerPage);
  
  let paginationHTML = '';
  
  if (totalPages > 1) {
    paginationHTML += `<button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>&laquo; Previous</button>`;
    paginationHTML += `<span class="page-info">Page ${currentPage} of ${totalPages}</span>`;
    paginationHTML += `<button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>Next &raquo;</button>`;
  }
  
  if (paginationContainer) {
    paginationContainer.innerHTML = paginationHTML;
  }
}

window.changePage = function(newPage) {
  const totalPages = Math.ceil(mediaFiles.length / itemsPerPage);
  if (newPage >= 1 && newPage <= totalPages) {
    currentPage = newPage;
    renderGallery(currentPage);
    // മുകളിലേക്ക് തനിയെ സ്ക്രോൾ ചെയ്യാൻ
    window.scrollTo({ top: galleryContainer.offsetTop - 100, behavior: 'smooth' });
  }
};

// Initialize gallery
document.addEventListener("DOMContentLoaded", () => {
  if(galleryContainer) {
    renderGallery(currentPage);
  }
});
