const rateCard = document.querySelector(".rate");
const thankCard = document.querySelector(".thank");
const button = document.querySelector(".button");
const ratingList = document.querySelectorAll(".rate__number");
const thankRating = document.querySelector(".thank__rating");

// Tracks which rating was clicked and passes that info to thank you card
ratingList.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratingList.forEach((rating) => {
      rating.classList.remove("rate__number--active");
    });
    rating.classList.add("rate__number--active");
    thankRating.innerHTML = `You selected ${rating.innerHTML} out of 5`;
  });
});

// Changes the card to thank you after submitting the rating
button.addEventListener("click", (e) => {
  e.preventDefault;
  rateCard.classList.add("invisible");
  thankCard.classList.remove("invisible");
});
