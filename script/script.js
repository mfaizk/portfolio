const navList = document.getElementsByClassName("nav-list");
const navMenuBtnImg = document.getElementsByClassName("nav-menu-button-img");
const navBtn = document.querySelector(".nav-menu-button");

// TODO: Query selector is not same as getdocumentbt, QuerySelector it work when DOM is ready

navBtn?.addEventListener("click", (e) => {
  if (document.getElementsByClassName("nav-list")[0].style.top == "-500px") {
    document.getElementsByClassName("nav-list")[0].style.top = "0";
    document.getElementsByClassName("nav-menu-button-img")[0].src =
      "/assets/close.png";
  } else {
    document.getElementsByClassName("nav-list")[0].style.top = "-500px";

    document.getElementsByClassName("nav-menu-button-img")[0].src =
      "/assets/menu.svg";
  }
});
