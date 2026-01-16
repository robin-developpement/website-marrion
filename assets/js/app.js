// Fonction pour basculer le dropdown principal
function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  const icon = document.getElementById("dropdownIcon");
  menu.classList.toggle("show");
  icon.classList.toggle("rotate-180");
}

// Fonction pour basculer le deuxième dropdown
function toggleDropdown2() {
  const menu = document.getElementById("dropdownMenu2");
  const icon = document.getElementById("dropdownIcon2");
  menu.classList.toggle("show");
  icon.classList.toggle("rotate-180");
}

// Fonction pour basculer le menu mobile
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
}

// Fonction pour basculer les dropdowns dans le menu mobile
function toggleMobileDropdown(id) {
  const menu = document.getElementById(id);
  const icon = document.getElementById("mobileIcon" + id.slice(-1));
  menu.classList.toggle("show");
  icon.classList.toggle("rotate-180");
}

// Fermer les dropdowns en cliquant à l'extérieur
window.addEventListener("click", function (e) {
  // Fermer le premier dropdown
  if (!e.target.closest(".dropdown")) {
    const menu = document.getElementById("dropdownMenu");
    const icon = document.getElementById("dropdownIcon");
    if (menu) menu.classList.remove("show");
    if (icon) icon.classList.remove("rotate-180");
  }

  // Fermer le deuxième dropdown
  if (!e.target.closest(".dropdown2")) {
    const menu = document.getElementById("dropdownMenu2");
    const icon = document.getElementById("dropdownIcon2");
    if (menu) menu.classList.remove("show");
    if (icon) icon.classList.remove("rotate-180");
  }
});
