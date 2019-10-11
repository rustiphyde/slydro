const functions = require('firebase-functions');

let images = [
  `<img class="slide-img" src="../img/firebase-slide-1.jpg" alt="slide 1"/>`,
  `<img class="slide-img" src="../img/firebase-slide-2.jpg" alt="slide 2"/>`,
  `<img class="slide-img" src="../img/firebase-slide-3.jpg" alt="slide 3"/>`,
  `<img class="slide-img" src="../img/firebase-slide-4.jpg" alt="slide 4"/>`,
  `<img class="slide-img" src="../img/firebase-slide-5.jpg" alt="slide 5"/>`,
  `<img class="slide-img" src="../img/firebase-slide-6.jpg" alt="slide 6"/>`,
  `<img class="slide-img" src="../img/firebase-slide-7.jpg" alt="slide 7"/>`,
  `<img class="slide-img" src="../img/firebase-slide-8.jpg" alt="slide 8"/>`,
  `<img class="slide-img" src="../img/firebase-slide-9.jpg" alt="slide 9"/>`,
  `<img class="slide-img" src="../img/firebase-slide-10.jpg" alt="slide 10"/>`,
  `<img class="slide-img" src="../img/firebase-slide-11.jpg" alt="slide 11"/>`,
  `<img class="slide-img" src="../img/firebase-slide-12.jpg" alt="slide 12"/>`,
  `<img class="slide-img" src="../img/firebase-slide-13.jpg" alt="slide 13"/>`,
  `<img class="slide-img" src="../img/firebase-slide-14.jpg" alt="slide 14"/>`,
  `<img class="slide-img" src="../img/firebase-slide-15.jpg" alt="slide 15"/>`,
  `<img class="slide-img" src="../img/firebase-slide-16.jpg" alt="slide 16"/>`
  
];

window.addEventListener("load",() => {
  let arrowRight = document.getElementById("arrow-right");
  let arrowLeft = document.getElementById("arrow-left");
  let box = document.getElementById("slide-box");
  let current = -1;

  arrowLeft.style.visibility = "hidden";

  // right arrow click
  arrowRight.addEventListener("click",() => {
    console.log(current);
    arrowRight.style.width = "50px";
    box.innerHTML = images[current + 1];
    current++;
    if (current >= 1) {
      arrowLeft.style.visibility = "visible";
    }
    setTimeout(() => {
      arrowRight.style.width = "60px";
    }, 200);
    if (current === images.length - 1) {
      setTimeout(() => {
        arrowRight.style.visibility = "hidden";
      }, 400);
    }
  });

  // left arrow click
  arrowLeft.addEventListener("click",() => {
    console.log(current);
    box.innerHTML = images[current - 1];
    current--;
    arrowLeft.style.width = "50px";
    arrowRight.style.visibility = "visible";
    setTimeout(() => {
      arrowLeft.style.width = "60px";
    }, 200);
    if (current <= 0) {
      setTimeout(() => {
        arrowLeft.style.visibility = "hidden";
      }, 400);
    }
  });
});
