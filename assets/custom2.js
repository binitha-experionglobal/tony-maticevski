document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".js-my-button").addEventListener("click", function () {
        alert("Button clicked from external JS!");
    });
});
