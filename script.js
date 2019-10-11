

let images = [
  `<img class="slide-img" src="./img/firebase-slide-1.jpg" alt="slide 1"/>`,
  `<img class="slide-img" src="./img/firebase-slide-2.jpg" alt="slide 2"/>`,
  `<img class="slide-img" src="./img/firebase-slide-3.jpg" alt="slide 3"/>`,
  `<img class="slide-img" src="./img/firebase-slide-4.jpg" alt="slide 4"/>`,
  `<img class="slide-img" src="./img/firebase-slide-5.jpg" alt="slide 5"/>`,
  `<img class="slide-img" src="./img/firebase-slide-6.jpg" alt="slide 6"/>`,
  `<img class="slide-img" src="./img/firebase-slide-7.jpg" alt="slide 7"/>`,
  `<img class="slide-img" src="./img/firebase-slide-8.jpg" alt="slide 8"/>`,
  `<img class="slide-img" src="./img/firebase-slide-9.jpg" alt="slide 9"/>`,
  `<img class="slide-img" src="./img/firebase-slide-10.jpg" alt="slide 10"/>`,
  `<img class="slide-img" src="./img/firebase-slide-11.jpg" alt="slide 11"/>`,
  `<img class="slide-img" src="./img/firebase-slide-12.jpg" alt="slide 12"/>`,
  `<img class="slide-img" src="./img/firebase-slide-13.jpg" alt="slide 13"/>`,
  `<img class="slide-img" src="./img/firebase-slide-14.jpg" alt="slide 14"/>`,
  `<img class="slide-img" src="./img/firebase-slide-15.jpg" alt="slide 15"/>`,
  `<img class="slide-img" src="./img/firebase-slide-16.jpg" alt="slide 16"/>`,
  `<img class="slide-img" src="./img/firebase-slide-17.jpg" alt="slide 17"/>`,
  `<img class="slide-img" src="./img/firebase-slide-18.jpg" alt="slide 18"/>`,
  `<img class="slide-img" src="./img/firebase-slide-19.jpg" alt="slide 19"/>`,
  `<img class="slide-img" src="./img/firebase-slide-20.jpg" alt="slide 20"/>`,
  `<img class="slide-img" src="./img/firebase-slide-21.jpg" alt="slide 21"/>`,
  `<img class="slide-img" src="./img/firebase-slide-22.jpg" alt="slide 22"/>`,
  `<img class="slide-img" src="./img/firebase-slide-23.jpg" alt="slide 23"/>`,
  `<img class="slide-img" src="./img/firebase-slide-24.jpg" alt="slide 24"/>`
  
];

window.addEventListener("load", function() {
  let arrowRight = document.getElementById("arrow-right");
  let arrowLeft = document.getElementById("arrow-left");
  let box = document.getElementById("slide-box");
  let current = -1;

  arrowLeft.style.visibility = "hidden";

  // right arrow click
  arrowRight.addEventListener("click", function() {
    console.log(current);
    arrowRight.style.width = "50px";
    box.innerHTML = images[current + 1];
    current++;
    if (current >= 1) {
      arrowLeft.style.visibility = "visible";
    }
    setTimeout(function() {
      arrowRight.style.width = "60px";
    }, 200);
    if (current === images.length - 1) {
      setTimeout(function() {
        arrowRight.style.visibility = "hidden";
      }, 400);
    }
  });

  // left arrow click
  arrowLeft.addEventListener("click", function() {
    console.log(current);
    box.innerHTML = images[current - 1];
    current--;
    arrowLeft.style.width = "50px";
    arrowRight.style.visibility = "visible";
    setTimeout(function() {
      arrowLeft.style.width = "60px";
    }, 200);
    if (current <= 0) {
      setTimeout(function() {
        arrowLeft.style.visibility = "hidden";
      }, 400);
    }
  });
});
