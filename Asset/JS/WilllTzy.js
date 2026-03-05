window.addEventListener("DOMContentLoaded", function () {

    const introText = document.getElementById("introText");
    const intro = document.getElementById("intro");

    if (introText) {
        setTimeout(() => introText.classList.add("merge"), 1200);
    }

    if (intro) {
        setTimeout(() => intro.classList.add("hide-intro"), 2500);
    }

    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    document.querySelectorAll("a, button").forEach(el => {

    el.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
    });

    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
        el.style.transform = "translate(0px, 0px)";
    });

    el.addEventListener("mousemove", (e) => {

        const rect = el.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        if(Math.abs(x) < 50 && Math.abs(y) < 50){
        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
        }

    });

});

    const toggleBtn = document.getElementById("themeToggle");

    if (toggleBtn) {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
        }

        toggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            const currentTheme = document.body.classList.contains("dark-mode")
                ? "dark"
                : "light";

            localStorage.setItem("theme", currentTheme);
        });
    }
    
    const roles = ["Willy", "Taminsyah", "Wijaya"];
    const textElement = document.querySelector(".changing-text");

    if (textElement) {
        let index = 0;

        setInterval(() => {
            textElement.style.opacity = 0;
            textElement.style.transform = "translateY(10px)";

            setTimeout(() => {
                index = (index + 1) % roles.length;
                textElement.textContent = roles[index];
                textElement.style.opacity = 1;
                textElement.style.transform = "translateY(0)";
            }, 300);

        }, 2500);
    }

    const heroBg = document.querySelector(".hero");

    if (heroBg) {
        document.addEventListener("mousemove", (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;

            heroBg.style.setProperty('--x', `${x}px`);
            heroBg.style.setProperty('--y', `${y}px`);
        });
    }

    const scrollIndicator = document.querySelector(".scroll-indicator");
    const hero = document.querySelector(".hero");

    if (scrollIndicator && hero) {
        scrollIndicator.addEventListener("click", () => {
            const nextSection = hero.nextElementSibling;

            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                entry.target.classList.add("appear");
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("active");
                entry.target.classList.remove("appear");
                entry.target.classList.remove("show");
            }

        });
    }, observerOptions);

    document.querySelectorAll(
        ".scroll-reveal, .timeline-item, .achievement-item, .footer-content"
    ).forEach(el => scrollObserver.observe(el));

    const connectBtn = document.querySelector(".connect-btn");

    if (connectBtn) {
        connectBtn.addEventListener("click", function () {
            console.log("Redirecting to email...");
        });
    }

});