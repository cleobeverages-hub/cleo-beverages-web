/* ==========================================
CLEO BEVERAGES
Premium Website JS
========================================== */

/* NAVBAR SCROLL EFFECT */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(255,255,255,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        navbar.style.background = "rgba(255,255,255,.85)";
        navbar.style.boxShadow = "none";

    }

});


/* ==========================================
SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(`
.hero-content,
.hero-image,
.section-header,
.about-content,
.stat-card,
.product-card,
.timeline div,
.why-card,
.b2b-grid div,
.private-label,
.facility img,
.dealership,
.contact-grid div
`);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ==========================================
FLOATING BOTTLE EFFECT
========================================== */

const bottle = document.querySelector(".hero-image img");

if (bottle) {

    let floatPosition = 0;

    setInterval(() => {

        floatPosition += 0.03;

        bottle.style.transform =
            `translateY(${Math.sin(floatPosition) * 12}px)`;

    }, 30);

}


/* ==========================================
SMOOTH ANCHOR LINKS
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});


/* ==========================================
COUNTER ANIMATION
(Optional if numbers are added later)
========================================== */

function animateCounter(counter) {

    const target = +counter.getAttribute("data-target");

    const increment = target / 100;

    let current = 0;

    const updateCounter = () => {

        if (current < target) {

            current += increment;

            counter.innerText = Math.ceil(current);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

}

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ==========================================
PARALLAX HERO BACKGROUND
========================================== */

window.addEventListener("scroll", () => {

    const scrolled = window.pageYOffset;

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.style.backgroundPositionY =
            `${scrolled * 0.2}px`;

    }

});


/* ==========================================
PRODUCT CARD HOVER EFFECT
========================================== */

const productCards =
    document.querySelectorAll(".product-card");

productCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 12;

        const rotateX =
            ((y / rect.height) - 0.5) * -12;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});


/* ==========================================
TYPEWRITER EFFECT
Hero Subtitle
========================================== */

const subtitle = document.querySelector(".hero h2");

if (subtitle) {

    const originalText = subtitle.innerText;

    subtitle.innerText = "";

    let index = 0;

    function typeWriter() {

        if (index < originalText.length) {

            subtitle.innerText += originalText.charAt(index);

            index++;

            setTimeout(typeWriter, 80);

        }

    }

    window.addEventListener("load", () => {

        setTimeout(typeWriter, 700);

    });

}


/* ==========================================
SECTION ACTIVE HIGHLIGHT
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
WHATSAPP BUTTON
========================================== */

function openWhatsApp() {

    window.open(
        "https://wa.me/917903083791",
        "_blank"
    );

}


/* ==========================================
PAGE LOADER
(Optional if added later)
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


console.log(
    "CLEO Beverages Website Loaded Successfully"
);
