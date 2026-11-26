// Mobile Navigation Menu Toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        hamburgerBtn.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            hamburgerBtn.textContent = "☰";
        });
    });
}

// Smooth Scroll Reveal using IntersectionObserver
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length > 0) {
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, index * 70);
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealItems.forEach((el) => observer.observe(el));
} else {
    revealItems.forEach((el) => el.classList.add("visible"));
}

// Highlight Active Navbar Link on Scroll
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
        }
    });
});

// Interactive Skill Pills
const skillPills = document.querySelectorAll(".pill");
skillPills.forEach((pill) => {
    pill.addEventListener("click", () => {
        pill.classList.toggle("selected");
    });
});

// Contact Form Submission Handler
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const nameInput = document.getElementById("visitorName");
        const nameValue = nameInput ? nameInput.value.trim() : "";

        formStatus.textContent = nameValue
            ? `Thanks, ${nameValue}! Your note has been recorded locally for this demo.`
            : "Thanks! Your note has been recorded locally for this demo.";

        contactForm.reset();
    });
}