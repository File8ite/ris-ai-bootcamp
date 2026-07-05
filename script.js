/* ===========================================
   FUTURE SKILLS BOOTCAMP
   script.js
=========================================== */

/* ==========================
   SMOOTH SCROLLING
========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});


/* ==========================
   SCROLL REVEAL
========================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


/* ==========================
   BUTTON HOVER GLOW
========================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* ==========================
   PAGE LOADED
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("🚀 Future Skills Bootcamp Loaded");

});



const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScB3lmJsRrAPxEEIPfCjNpOl8RpzriOKUHC8I2MQiATqGKbgQ/viewform?usp=header";

document.querySelectorAll(".apply-btn").forEach(button => {
    button.href = GOOGLE_FORM_URL;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
});