document.addEventListener('DOMContentLoaded', function () {
    // Add click handler to all elements with js-subscribe class
    document.querySelectorAll('.js-my-button').forEach(button => {
        button.addEventListener('click', openPopup);
    });

    // Add close handler
    document.getElementById('bio_ep_close1').addEventListener('click', closePopup);
});

// Update your close condition
function openPopup() {
    document.getElementById("mageplaza-betterpopup-block1").style.display = "block";
    document.getElementById("bio_ep1").style.display = "block";
}

function closePopup() {
    document.getElementById("mageplaza-betterpopup-block1").style.display = "none";
    document.getElementById("bio_ep1").style.display = "none";
}

// Close when clicking outside
document.addEventListener("click", function (event) {
    const popup = document.getElementById("mageplaza-betterpopup-block1");
    const bioEp = document.getElementById("bio_ep1");
    if (popup.style.display === "block1" &&
        !bioEp.contains(event.target) &&
        !event.target.closest('.js-search-by-size')) {
        closePopup();
    }
});