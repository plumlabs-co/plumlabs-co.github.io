document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").innerHTML = new Date().getFullYear();
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".page");

    setTimeout(() => {
        preloader.classList.add("hide");
        content.classList.remove("hidden");
        AOS.init();
    }, 1500);

    import("https://unpkg.com/rough-notation?module")
        .then(({ annotate }) => {
            setTimeout(() => {
                const annotations = {
                    e1: annotate(document.querySelector("#e1"), {
                        type: "highlight",
                        color: "#c5bae5",
                        strokeWidth: 2,
                        iterations: 5,
                        animationDuration: 2000,
                    }),
                    e2: annotate(document.querySelector("#e2"), {
                        type: "circle",
                        color: "#c5bae5",
                        strokeWidth: 2,
                        iterations: 3,
                    }),
                    e3: annotate(document.querySelector("#e3"), {
                        type: "circle",
                        color: "#c5bae5",
                        strokeWidth: 2,
                        iterations: 3,
                    }),
                    e4: annotate(document.querySelector("#e4"), {
                        type: "circle",
                        color: "#c5bae5",
                        padding: 30,
                        strokeWidth: 2,
                        iterations: 5,
                        animationDuration: 2000,
                    }),
                };

                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting && annotations[entry.target.id]) {
                                annotations[entry.target.id].show();
                                observer.unobserve(entry.target);
                            }
                        });
                    },
                    { threshold: 0.7 }
                );

                Object.keys(annotations).forEach((id) => {
                    const elem = document.querySelector(`#${id}`);
                    if (elem) observer.observe(elem);
                });
            }, 2500);
        })
});
