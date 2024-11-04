document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slider-show');
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        sliderTrack.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Chuyển slide mỗi 3 giây
});

//modal
const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container'); // Thêm dấu chấm ở đây

// Hàm hiển thị modal
function showBuyTickets() {
    modal.style.display = 'flex';
}

// Hàm ẩn modal
function hideBuyTickets() {
    modal.style.display = 'none';
}

// Lặp qua các button để thêm sự kiện click mở modal
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}

// Sự kiện click vào nút đóng để ẩn modal
modalClose.addEventListener('click', hideBuyTickets);

// Sự kiện click vào vùng modal (vùng nền) để ẩn modal
modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        hideBuyTickets();
    }
});

// Ngăn sự kiện thoát ra ngoài khi nhấn vào modal container (nội dung bên trong modal)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});