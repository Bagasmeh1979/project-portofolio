document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("popupMessage").style.display = "block";
  }, 3000);

  document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popupMessage").style.display = "none";
  });

  const contactForm = document.getElementById("contactForm");
  const popupSend = document.getElementById("popupSend");
  const closePopup = document.getElementById("closePopup");

  if (contactForm && popupSend) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      popupSend.style.display = "block";
    });

    closePopup.addEventListener("click", () => {
      popupSend.style.display = "none";
      location.reload();
    });
  }
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  var menu = document.getElementById("mobile-menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
