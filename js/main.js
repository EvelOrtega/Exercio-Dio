//Declarando Variáveis
var btnContact = document.querySelector(".eo-btn-contact");
var toggleModal = document.querySelectorAll(".eo-toggle-modal");
var toggleMenu = document.querySelectorAll(".eo-toggle-menu");
var menuMobile = document.querySelector(".eo-menu-mob");
var btnMenuMobIcon = document.querySelector(".eo-btn-menu-mob ion-icon");

//Page Preloader
window.addEventListener("load", function () {
  var pagePreloder = document.querySelector(".eo-preloader");
  pagePreloder.classList.add("eo-fade-out");

  setTimeout(function () {
    pagePreloder.style.display = "none";
  }, 2000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener("click", function () {
  var boxContact = document.querySelector(".eo-contact-info");
  boxContact.classList.toggle("eo-is-open");
  this.classList.toggle("eo-change-icon");
});

//Abrindo e Fechando o Menu Mobile
for (var m = 0; m < toggleMenu.length; m++) {
  toggleMenu[m].addEventListener("click", function () {
    var overlay = document.querySelector(".eo-menu-overlay");
    overlay.classList.toggle("eo-is-open");
    menuMobile.classList.toggle("eo-menu-is-closed");
    menuMobile.classList.toggle("eo-menu-is-open");

    var icon = btnMenuMobIcon.getAttribute("name");

    if (icon === "menu") {
      btnMenuMobIcon.setAttribute("name", "close");
    } else {
      btnMenuMobIcon.setAttribute("name", "menu");
    }
  });
}

//Abrindo e Fechando o Modal de Orcamento
for (var i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function () {
    var modalOrcamento = document.querySelector("#eo-modal-orcamento");
    var overlay = document.querySelector(".eo-overlay");
    overlay.classList.toggle("eo-is-open");
    modalOrcamento.classList.toggle("eo-is-open");
    modalOrcamento.classList.toggle("eo-slide-top-in");
  });
}

// Animando Elementos da Topbar
var triggerTopbar = document.querySelector(".eo-trigger-topbar");
var topbar = document.querySelector(".eo-topbar");
var logo = document.querySelector(".eo-logo");
var waypoint = new Waypoint({
  element: triggerTopbar,
  handler: function () {
    topbar.classList.toggle("eo-topbar-bg");
    logo.classList.toggle("eo-logo-shorten");
    logo.classList.toggle("eo-logo-big");
  },
  offset: "50px",
});
