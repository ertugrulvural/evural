let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderButton = document.querySelector('.slider-button');

sliderButton.target = '_blank'; // yeni sekmede aç

// Slayt URL'leri
const slideLinks = [
    'https://example.com/project1',
    'https://example.com/project2',
    'https://example.com/project3'
];

sliderButton.href = slideLinks[0]; // Sayfa yüklendiğinde ilk slaytın buton linkini ayarla

// Slayt gösterme işlevi
function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    sliderButton.href = slideLinks[currentIndex]; // Butonun bağlantısını güncelle
}

// Otomatik slayt geçişi
let slideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000); // 1000 ms = 1 saniye

// Zamanlayıcıyı sıfırlama (kullanıcı bir düğmeye bastığında)
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
}

// Düğme olayları
nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
    resetInterval();
});
