document.addEventListener("click", function(event) {
    const targetLink = event.target.closest("a[data-target]");
    const clickedInsidePopup = event.target.closest(".popup");

    if (targetLink) {
        event.preventDefault();
        const targetId = targetLink.getAttribute("data-target");
        togglePopup(targetId);
    } else if (!clickedInsidePopup) {
        hideAllPopups();
    }
});

function togglePopup(targetId) {
    const popup = document.getElementById(targetId);
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        hideAllPopups();
        popup.style.display = "block";
    }
}

function hideAllPopups() {
    const popups = document.querySelectorAll(".popup");
    popups.forEach(popup => {
        popup.style.display = "none";
    });
}

// Close popup while user try to scroll
function userScroll() {
    const popups = document.querySelectorAll('.popup');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        hideAllPopups();
      }
    });
  }
document.addEventListener('DOMContentLoaded', userScroll);
  