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
