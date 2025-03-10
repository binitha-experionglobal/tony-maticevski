document.addEventListener('DOMContentLoaded', function () {
    // Add click handler to all elements with js-subscribe class
    document.querySelectorAll('.js-subscribe').forEach(button => {
        button.addEventListener('click', openPopup);
    });

    // Add close handler
    document.getElementById('bio_ep_close').addEventListener('click', closePopup);
});

// Update your close condition
function openPopup() {
    document.getElementById("mageplaza-betterpopup-block").style.display = "block";
    document.getElementById("bio_ep").style.display = "block";
}

function closePopup() {
    document.getElementById("mageplaza-betterpopup-block").style.display = "none";
    document.getElementById("bio_ep").style.display = "none";
}

// Close when clicking outside
document.addEventListener("click", function (event) {
    const popup = document.getElementById("mageplaza-betterpopup-block");
    const bioEp = document.getElementById("bio_ep");
    if (popup.style.display === "block" &&
        !bioEp.contains(event.target) &&
        !event.target.closest('.js-subscribe')) {
        closePopup();
    }
});

