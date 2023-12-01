let innerResult = document.querySelector(".result_inner");
let result  = document.querySelector(".result");
let price_container = document.querySelector(".price_container");

let max = 70;
let min = 1;
let speed = 50;

function setResultRatio() {
  let increase = setInterval(() => {
    min++;

    result.style.background = `conic-gradient(orangered ${3.6 * min}deg, white 0deg)`

    if (min == max) {
      clearInterval(increase);
    }
    else {
      innerResult.textContent = `${min}%`;
    }

  }, 50);
}

setResultRatio();


let price = document.querySelector(".price");
let navItem = document.querySelectorAll(".navigation .menu ul li");
let overlay = document.querySelector(".overlay");

navItem.forEach((elem) => {
  elem.addEventListener("click", function () {
    navItem.forEach(ele => {
      ele.classList.remove("active");
    })


    elem.classList.add("active");
  })
})

overlay.addEventListener("click", function (event) {
    price_container.classList.remove("pr");
})

// price_container.addEventListener("click", function (event) {
//   event.stopPropagation();
// })

// price.addEventListener("click", function () {
//   document.querySelector(".price_container").classList.toggle("pr");
//   overlay.classList.toggle("active");
// })

let menu_btn = document.querySelector(".menu_btn");
let menu = document.querySelector(".menu");
menu_btn.addEventListener("click", function () {
  menu.classList.toggle("active");
})

function preventDefault() {
  preventDefault();
}