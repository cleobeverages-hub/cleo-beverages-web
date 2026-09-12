/* =====================================================
   CLEO BEVERAGES
   WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;


    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

        navbar.style.boxShadow =
            "0 10px 30px rgba(7,27,99,.08)";

    } else {

        navbar.classList.remove("scrolled");

        navbar.style.boxShadow =
            "none";

    }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.querySelector(".menu-toggle");

const navbarNav =
    document.querySelector(".navbar-nav");


if (menuToggle && navbarNav) {


    menuToggle.addEventListener("click", () => {

        const isOpen =
            navbarNav.classList.toggle("open");


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /*
       Close mobile menu when
       a navigation link is clicked.
    */

    navbarNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navbarNav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}



/* =====================================================
   HERO BOTTLE FLOATING EFFECT
===================================================== */

const bottle =
    document.querySelector(".hero-image img");


if (bottle) {


    let position = 0;


    setInterval(() => {

        position += 0.025;


        /*
           Very subtle movement.
           Keeps the bottle premium rather
           than making it look animated heavily.
        */

        bottle.style.transform =
            `translateY(${Math.sin(position) * 7}px)`;


    }, 40);

}



/* =====================================================
   SMOOTH ANCHOR SCROLL
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {


        anchor.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            const target =
                document.querySelector(targetId);


            if (!target) return;


            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar-nav a");


function updateActiveNavigation() {


    let currentSection = "";


    sections.forEach(section => {


        const sectionTop =
            section.offsetTop - 180;


        const sectionBottom =
            sectionTop +
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

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

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


window.addEventListener(
    "load",
    updateActiveNavigation
);



/* =====================================================
   PRODUCT CARD TILT
   Only for desktop
===================================================== */

const sizeCards =
    document.querySelectorAll(".size-card");


sizeCards.forEach(card => {


    card.addEventListener("mousemove", event => {


        /*
           Don't apply tilt on touch devices.
        */

        if (window.innerWidth <= 768) return;


        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;


        const y =
            event.clientY - rect.top;


        const rotateY =
            ((x / rect.width) - 0.5) * 5;


        const rotateX =
            ((y / rect.height) - 0.5) * -5;


        card.style.transform =
            `
            perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-6px)
            `;

    });


    card.addEventListener("mouseleave", () => {

        if (card.classList.contains("featured-size")) {

            card.style.transform =
                "translateY(-10px)";

        } else {

            card.style.transform =
                "translateY(0)";

        }

    });

});



/* =====================================================
   WHATSAPP
===================================================== */

function openWhatsApp() {

    window.open(
        "https://wa.me/917903083791",
        "_blank"
    );

}



/* =====================================================
   PAGE LOADED
===================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "CLEO Beverages Website Loaded Successfully"
    );

});
