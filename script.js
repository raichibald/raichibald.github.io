(() => {
    "use strict";
    // Support button: the address is only assembled on click, so it isn't sitting in the page source.
    document.querySelectorAll("[data-mail]").forEach((a) => {
        a.addEventListener("click", (e) => {
            e.preventDefault();
            location.href = `mailto:${["saripo.raitis", "gmail.com"].join("@")}?subject=App%20support`;
        });
    });
})();
