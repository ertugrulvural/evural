// Header'ı yükle
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.log(error));

// Footer'ı yükle
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.log(error));

/* dark-mode denemesi durduruldu

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        const isDarkMode = body.classList.contains("dark-mode");
        themeToggle.textContent = isDarkMode ? "Gündüz Teması" : "Gece Teması";

        // Kullanıcının seçimini yerel depolamada sakla
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });

    // Sayfa yüklendiğinde tema durumunu kontrol et
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "Gündüz Teması";
    }
}); */

// Geçiş efektleri eklemek için
document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
});

// Slayt geçiş işlevselliği
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

// Mini butonlara tıklama işlevselliği
const miniButtons = document.querySelectorAll('.slider-controls button');
miniButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => showSlide(index));
});
