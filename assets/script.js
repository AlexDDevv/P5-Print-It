const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentSlideIndex = 0;

function updateCarrousel() {
  const bannerImg = document.querySelector(".banner-img");
  const bannerP = document.querySelector("#banner p");
  const dots = document.querySelectorAll(".dot");

  bannerImg.src = slides[currentSlideIndex].image;
  bannerP.innerHTML = slides[currentSlideIndex].tagLine;

  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  updateCarrousel();
});

const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  updateCarrousel();
});
