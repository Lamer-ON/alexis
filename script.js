"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //  // мобильное устройство
  //} else {
  //  // обычное устройство
  //}

  const header__burger = document.querySelector(".header__burger"),
    header__menu = document.querySelector(".header__menu"),
    back = document.querySelector("body"),
    header__list = document.querySelector(".header__list"),
    video = document.querySelector(".video"),
    radioAll = document.querySelectorAll(".test-radio"),
    ImgAll = document.querySelectorAll(".test-img"),
    Img1 = document.querySelector(".test-img-1"),
    cardAll = document.querySelectorAll(".testimonials_card"),
    card1 = document.querySelector(".card1");

  //============ burger
  header__burger.addEventListener("click", () => {
    header__burger.classList.toggle("active");
    header__menu.classList.toggle("active");
    back.classList.toggle('lock');
  });
  header__list.addEventListener("click", () => {
    back.classList.toggle('lock');
    header__menu.classList.toggle("active");
    header__burger.classList.toggle("active");
    //header__list.classList.remove("active");
  });

  //============ testimonials radio
  card1.classList.add("active");
  Img1.classList.add("active");

  for (let i = 0; i < radioAll.length; i++) {
    radioAll[i].addEventListener("click", () => {
      for (let i = 0; i < cardAll.length; i++) {
        cardAll[i].classList.remove("active");
      }
      for (let i = 0; i < ImgAll.length; i++) {
        ImgAll[i].classList.remove("active");
      }

      ImgAll[i].classList.add("active");
      cardAll[i].classList.add("active");
    });
  }



  //window.addEventListener("keydown", function (e) {
  //  if (e.keyCode === 27 & document.querySelector('.popup-wrapper').style.display !== 'none') {
  //    e.preventDefault();
  //    document.querySelector('.popup-wrapper').classList.add('visually-hidden');
  //  }
  //});
});