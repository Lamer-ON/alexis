"use strict";

document.addEventListener("DOMContentLoaded", function () {

  const header__burger = document.querySelector(".header__burger"),
    header__menu = document.querySelector(".header__menu"),
    back = document.querySelector("body"),
    header__list = document.querySelector(".header__list"),
    video = document.querySelector(".video"),
    radioAll = document.querySelectorAll(".test-radio"),
    ImgAll = document.querySelectorAll(".test-img"),
    Img1 = document.querySelector(".test-img-1"),
    cardAll = document.querySelectorAll(".testimonials_card"),
    card1 = document.querySelector(".card1"),
    team_cardAll = document.querySelectorAll(".our-team_items"),
    team_card1 = document.querySelector(".our-team_items-1"),
    team_card3 = document.querySelector(".our-team_items-3"),
    team_modalAll = document.querySelectorAll(".our-team_popup"),
    team_modal1 = document.querySelector(".our-team_popup-1"),
    team_modal3 = document.querySelector(".our-team_popup-3");

  //============ our-team

  if (window.matchMedia("(min-width: 961px)").matches) {
    team_card1.classList.add("click");
    team_modal1.classList.add("active");
    for (let i = 0; i < team_cardAll.length; i++) {
      team_cardAll[i].addEventListener("click", () => {
        for (let i = 0; i < team_modalAll.length; i++) {
          team_modalAll[i].classList.remove("active");
        }
        for (let i = 0; i < team_cardAll.length; i++) {
          team_cardAll[i].classList.remove("click");
        }
        team_modalAll[i].classList.add("active");
        team_cardAll[i].classList.add("click");
      });
    }
  }

  if (window.matchMedia("(max-width: 960px)").matches) {
    team_card1.classList.add("click");
    team_modal1.classList.add("active");
    team_card3.classList.add("click");
    team_modal3.classList.add("active");

    for (let i = 0; i < team_cardAll.length; i++) {
      team_cardAll[i].addEventListener("click", () => {
        if (i <= 1) {
          for (let i = 0; i <= 1; i++) {
            team_modalAll[i].classList.remove("active");
          }
          for (let i = 0; i <= 1; i++) {
            team_cardAll[i].classList.remove("click");
          }
        } else {
          for (let i = 2; i <= 3; i++) {
            team_modalAll[i].classList.remove("active");
          }
          for (let i = 2; i <= 3; i++) {
            team_cardAll[i].classList.remove("click");
          }
        }
        team_modalAll[i].classList.add("active");
        team_cardAll[i].classList.add("click");
      });
    }
  }

  if (window.matchMedia("(max-width: 720px)").matches) {
    team_card3.classList.remove("click");
    team_modal3.classList.remove("active");

    for (let i = 0; i < team_cardAll.length; i++) {
      team_cardAll[i].addEventListener("click", () => {
        for (let i = 0; i < team_modalAll.length; i++) {
          team_modalAll[i].classList.remove("active");
        }
        for (let i = 0; i < team_cardAll.length; i++) {
          team_cardAll[i].classList.remove("click");
          team_cardAll[i].style.marginBottom = '50px';
        }
        team_modalAll[i].classList.add("active");
        team_cardAll[i].classList.add("click");
        team_cardAll[i].style.marginBottom = '650px';
      });
    }
  }

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
  });

});