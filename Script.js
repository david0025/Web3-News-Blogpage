const menuToggle = document.querySelector(".Menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
const readMore = document.querySelector(".read-more");
const toast = document.querySelector(".toast");

menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks.forEach(link => {
        link.addEventListener("click",  () => {
          navLinks.forEach(item => item.classList.remove("active"));
         link.classList.add("active");
         nav.classList.remove("open");
         menuToggle.setAttribute("aria-expanded",  "false");
         menuToggle.setAttribute("aria-label", "Open menu");
        });
});

readMore.addEventListener("click", () => {
        const article = readMore.dataset.article;
        toast.textContent = `Opening: ${article}`;
        toast.classList.add("show");

        setTimeout(() => {
                toast.classList.remove("show");
        }, 2200);
});
