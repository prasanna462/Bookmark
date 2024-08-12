document.addEventListener("DOMContentLoaded", function() {
    const sliderItems = document.querySelectorAll('.slider__item');
    const pageItems = document.querySelectorAll('.slider__page-item');
    let currentIndex = 0;
  
    function showSlide(index) {
      sliderItems.forEach((item, idx) => {
        item.classList.toggle('slider__item--active', idx === index);
      });
      pageItems.forEach((item, idx) => {
        item.classList.toggle('slider__page-item--active', idx === index);
      });
    }
  
    pageItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
      });
    });
  
    // Auto slide functionality
    setInterval(() => {
      currentIndex = (currentIndex + 1) % sliderItems.length;
      showSlide(currentIndex);
    }, 5000);
  
    // Sidebar toggle for mobile
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const body = document.body;
  
    sidebarToggle.addEventListener('click', function(event) {
      event.preventDefault();
      body.classList.toggle('sidebar-open');
    });
  });
  