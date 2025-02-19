const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const btns = document.querySelectorAll("button");

function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /android|iphone|ipad/.test(userAgent);
}

if (isMobileDevice()) {
    cursor.style.display = "none";
} else {
    document.addEventListener("DOMContentLoaded", () => {
        document.addEventListener("mousemove", (e) => {
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        });

        links.forEach((el) => {
            el.addEventListener("mouseover", () => {
                cursor.classList.add("hover");
            });
            el.addEventListener("mouseleave", () => {
                cursor.classList.remove("hover");
            });
        });

        btns.forEach((el) => {
            el.addEventListener("mouseover", () => {
                cursor.classList.add("hover");
            });
            el.addEventListener("mouseleave", () => {
                cursor.classList.remove("hover");
            });
        });
    });
}
