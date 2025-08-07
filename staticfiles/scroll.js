// Scroll animation logic
document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, offset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight - offset);
    };

    const showScrollElement = (el) => {
        el.classList.add("visible");
    };

    const hideScrollElement = (el) => {
        el.classList.remove("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el)) {
                showScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

    handleScrollAnimation(); // Run on load
});
