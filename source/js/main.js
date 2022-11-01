var mainNavToggle = document.querySelector(".main-nav__toggle");
var mainNavOpened = document.querySelector(".main-nav--opened");
var mainNavClosed = document.querySelector(".main-nav");
var mainNav = document.querySelector(".main-nav");
var pageHeader = document.querySelector(".page-header");
var siteList = document.querySelector(".site-list");

mainNavToggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    mainNav.classList.toggle("main-nav--opened");
    mainNav.classList.toggle("main-nav--closed");

    if (mainNav.classList.contains("main-nav--opened")) {
        pageHeader.classList.add("page-header--relative");
        siteList.classList.add("site-list--opened");
    } else {
        pageHeader.classList.remove("page-header--relative");
        siteList.classList.remove("site-list--opened");
    }
});
