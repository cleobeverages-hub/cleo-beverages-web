/* ==========================================
   CLEO BEVERAGES
   Website JavaScript
========================================== */


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(255,255,255,0.96)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,.88)";

        navbar.style.boxShadow =
            "none";

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(`

        .hero-content,
        .hero-image,
        .section-header,
        .about-content,
        .stat-card,
        .product-showcase,
        .timeline div,
        .why-card,
        .b2b-grid div,
        .private-label,
        .factory-placeholder,
        .dealership,
        .contact-grid div

    `);


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   PRODUCT CARD / BOTTLE
========================= */

const productImage =
    document.querySelector(".product-image img");


if (productImage) {

    productImage.addEventListener(
        "mouseenter",
        () => {

            productImage.style.transform =
                "translateY(-10px) scale(1.03)";

        }
    );


    productImage.addEventListener(
        "mouseleave",
        () => {

            productImage.style.transform =
                "translateY(0) scale(1)";

        }
    );

}


/* =========================
   SMOOTH ANCHOR LINKS
========================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }
        );

    });


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section[id]");


const navLinks =
    document.querySelectorAll("nav a");


const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;


                const id =
                    entry.target.getAttribute("id");


                navLinks.forEach(link => {

                    link.classList.remove("active");


                    if (
                        link.getAttribute("href") ===
                        `#${id}`
                    ) {

                        link.classList.add("active");

                    }

                });

            });

        },

        {
            rootMargin: "-30% 0px -60% 0px"
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================
   PAGE LOADED
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


console.log(
    "CLEO Beverages Website Loaded Successfully"
);
