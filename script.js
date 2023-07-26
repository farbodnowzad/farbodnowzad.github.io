const words = ["conversational.", "searchable.", "branded.", "personalized.", "contextual.", "interactive.",];
let currentWordIndex = 0;

function updateWord() {
  const wordTransition = document.querySelector(".word-transition");
  wordTransition.textContent = words[currentWordIndex];
  wordTransition.style.opacity = 1;
}

function fadeOutWord() {
  const wordTransition = document.querySelector(".word-transition");
  wordTransition.style.opacity = 0;
  setTimeout(updateWord, 500); // Wait for the fade-out transition to complete
}

function startAnimation() {
  fadeOutWord();
  currentWordIndex = (currentWordIndex + 1) % words.length; // Move to the next word
}

// Start the animation when the page loads
window.onload = () => {
  setInterval(startAnimation, 2000); // Change words every 3 seconds (adjust as needed)
};