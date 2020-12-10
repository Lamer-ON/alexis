"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //  // мобильное устройство
  //} else {
  //  // обычное устройство
  //}

  let header__burger = document.querySelector(".header__burger"),
    header_menu = document.querySelector(".header__menu"),
    back = document.querySelector("body"),
    header__list = document.querySelector(".header__list"),
    video = document.querySelector(".video"),
    radioAll = document.querySelectorAll(".test-radio"),
    ImgAll = document.querySelectorAll(".test-img"),
    Img1 = document.querySelector(".test-img-1"),
    cardAll = document.querySelectorAll(".testimonials_card"),
    card1 = document.querySelector(".card1");

  //============ burger
  header__burger.onclick = function () {
    header__burger.classList.toggle("active");
    header_menu.classList.toggle("active");
    //back.classList.toggle('lock');
  };
  header__list.onclick = function () {
    header__list.classList.remove("active");
    //back.classList.toggle('lock');
  };




  //============ testimonials radio
  card1.classList.add("active");
  Img1.classList.add("active");

  for (let i = 0; i < radioAll.length; i++) {
    radioAll[i].addEventListener("click", function () {
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
































  //for (let radios of radioAll)
  //  radios.addEventListener('click', onShowModal());

  //radio1.onclick = function () {
  //  //radio1.setAttribute('checked', 'true');
  //  card1.classList.add('active');
  //  Img1.classList.add('active');
  //}
  //radio2.onclick = function () {
  //  //radio2.setAttribute('checked', 'true');
  //  card2.classList.add('active');
  //  Img2.classList.add('active');
  //}
  //radio3.onclick = function () {
  //  //radio3.setAttribute('checked', 'true');
  //  card3.classList.add('active');
  //  Img3.classList.add('active');
  //}
  //radio4.onclick = function () {
  //  //radio4.setAttribute('checked', 'true');
  //  card4.classList.add('active');
  //  Img4.classList.add('active');
  //}

  //radio5.onclick = function () {
  //  //radio5.setAttribute('checked', 'true');
  //  card5.classList.add('active');
  //  Img5.classList.add('active');
  //}
  //radio6.onclick = function () {
  //  //radio6.setAttribute('checked', 'true');
  //  card6.classList.add('active');
  //  Img6.classList.add('active');

  //}

  //radio5.removeAttribute('checked');
  //if (radio6.hasAttribute('checked')) {
  //  card6.classList.add('active');
  //} else {
  //  card6.classList.remove('active');
  //}

  //if (radio5.contains('checked')) {

  //if (radio5.hasAttribute('checked')) {
  //  card5.classList.add('active');
  //} else {
  //  card5.classList.remove('active');
  //}

  //if (radio5.checked === false) {
  //  card5.classList.remove('active');
  //}
  //if (radio6.checked === false) {
  //  card6.classList.remove('active');
  //}
  //radio5.onclick = function () {
  //  //card5.classList.toggle('active');
  //  //if (radio5.checked === false) {
  //  card5.classList.add('active');
  //  //}

  //}
  //radio6.onclick = function () {
  //  //card6.classList.toggle('active');
  //  card6.classList.add('active');

  //}

  //radio.onclick = function () {
  //  if (radio.checked) {
  //    console.log('checked')
  //  } else {
  //    test.classList.toggle('active');
  //  }

  //}
  //test.classList.toggle('active');
  //header_menu.classList.toggle('active');
  //back.classList.toggle('lock');

  //video.onclick = function () {
  //  video.play;
  //}

  //document.querySelector('.header__burger').addEventListener('click', function (e) {
  //  document.querySelector('.header__burger').classList.toggle('active');
  //  document.querySelector('.header__menu').classList.toggle('active');
  //  document.querySelector('body').classList.toggle('lock');

  //  e.preventDefault();
  //  document.querySelector('.our-team_popup-1').classList.toggle('active');

  //  this.classList.toggle('active');
  //  console.log(this);
  //});

  //document.querySelector('.our-team_items-1').addEventListener('click', function (e) {
  //  e.preventDefault();
  //  document.querySelector('.our-team_popup-1').classList.toggle('active');

  //  this.classList.toggle('active');
  //  console.log(this);
  //});

  //document.querySelector('.patents-table').addEventListener('click', function (e) {
  //  e.preventDefault();
  //  document.querySelector('.popup-wrapper').classList.remove('visually-hidden');
  //});

  //document.querySelector('.popup-close').addEventListener('click', function (e) {
  //  e.preventDefault();
  //  document.querySelector('.popup-wrapper').classList.add('visually-hidden');
  //});

  //document.querySelector('.overlay').addEventListener('click', function (e) {
  //  e.preventDefault();
  //  document.querySelector('.popup-wrapper').classList.add('visually-hidden');
  //});

  //window.addEventListener("keydown", function (e) {
  //  if (e.keyCode === 27 & document.querySelector('.popup-wrapper').style.display !== 'none') {
  //    e.preventDefault();
  //    document.querySelector('.popup-wrapper').classList.add('visually-hidden');
  //  }
  //});
});