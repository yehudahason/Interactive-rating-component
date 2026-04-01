const buttons = document.querySelectorAll(".rating-button");
const stars = document.querySelectorAll(".icon-container");
const selectedRating = document.querySelector(".selected-rating");
const submitButton = document.querySelector(".submit-button");
const ratingContainer = document.querySelector(".rating-state");
const thankYouContainer = document.querySelector(".thank-you-state");

let ratingValue = 1;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    for (let i = 0; i < buttons.length; i++) {
      if (i <= button.value - 1) {
        stars[i].classList.add("active");
      } else {
        stars[i].classList.remove("active");
      }
    }
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    ratingValue = button.value;
  });
});

submitButton.addEventListener("click", () => {
  if (ratingValue) {
    selectedRating.textContent = ratingValue;
    ratingContainer.style.display = "none";
    thankYouContainer.style.display = "flex";
  } else {
    alert("Please select a rating before submitting.");
  }
});
