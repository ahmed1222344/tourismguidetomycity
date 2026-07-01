// تأثير Scroll عند دخول الكارت
document.addEventListener("DOMContentLoaded", () => {
    const places = document.querySelectorAll(".place");
    places.forEach(place => {
        place.style.opacity = 0;
        place.style.transform = "translateY(50px)";
    });

    window.addEventListener("scroll", () => {
        places.forEach(place => {
            const rect = place.getBoundingClientRect();
            if(rect.top < window.innerHeight - 100) {
                place.style.transition = "all 0.8s ease-out";
                place.style.opacity = 1;
                place.style.transform = "translateY(0)";
            }
        });
    });
});
function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-ar]");

    elements.forEach(element => {
        if (lang === "en") {
            element.textContent = element.getAttribute("data-en");
            document.body.style.direction = "ltr";
        } else {
            element.textContent = element.getAttribute("data-ar");
            document.body.style.direction = "rtl";
        }
    });
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-ar]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}