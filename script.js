window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("fade-out");

    setTimeout(() => {
        preloader.style.display = "none";
    }, 500); // Tunggu 0.5 detik sebelum menghilangkan preloader
});
