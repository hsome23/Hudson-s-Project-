/* How button and functionality work, Edit however neccesary */
const exploreButton = document.getElementById("exploreBtn");
const message = document.getElementById("message");

exploreButton.addEventListener("click", function() {
  message.textContent = "Dining options coming soon!";
});

