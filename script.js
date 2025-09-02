// Example: highlight "Most Popular" on page load
document.addEventListener("DOMContentLoaded", () => {
  const popular = document.querySelector(".service-card.popular");
  popular.classList.add("highlight");

  setTimeout(() => {
    popular.classList.remove("highlight");
  }, 2000);
});
const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('closeBtn');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalVideo = document.getElementById('modalVideo');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        modal.classList.add('active');
        modalTitle.textContent = card.getAttribute('data-title');
        modalCategory.textContent = card.getAttribute('data-category');
        modalVideo.src = card.getAttribute('data-video');
        modalVideo.play();
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      modalVideo.pause();
      modalVideo.currentTime = 0;
    });

    // Close modal on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        modalVideo.pause();
        modalVideo.currentTime = 0;
      }
    });

const scrollBtn = document.getElementById("scrollTopBtn");


// Scroll to top when clicked
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });



document.getElementById("viewWorkBtn").addEventListener("click", function () {
  document.getElementById("best-edits").scrollIntoView({ behavior: "smooth" });
});
  