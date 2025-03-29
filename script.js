document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll Effect for All Sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60, // Adjust for header height
                    behavior: "smooth"
                });
            }
        });
    });

    // Typing Animation for Hero Section
    const typedText = document.querySelector(".typing-text");
    const textArray = ["Machine Learning Engineer", "Full-Stack Developer", "AI Enthusiast", "Data Scientist"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = textArray[textIndex];

        typedText.textContent = currentText.substring(0, charIndex);
        let delay = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
                typeEffect();
            }, 2000); // Shorter wait time after typing
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            delay = 500;
        }

        charIndex += isDeleting ? -1 : 1;
        setTimeout(typeEffect, delay);
    }

    setTimeout(typeEffect, 1000);

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
        });

        // Apply saved dark mode preference
        if (localStorage.getItem("darkMode") === "true") {
            document.body.classList.add("dark-mode");
        }
    }
    

    // Fade-in Effect on Scroll
    const sections = document.querySelectorAll(".fade-in, .about, .skills");

    const fadeInObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                fadeInObserver.unobserve(entry.target); // Prevents re-triggering
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => fadeInObserver.observe(section));

});


