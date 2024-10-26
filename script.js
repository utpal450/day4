const compliments = [
  "You light up the room like a disco ball!",
  "Your laugh is more contagious than a viral video!",
  "If you were a vegetable, you'd be a cute-cumber.",
  "You’re like a ray of sunshine on a cloudy day.",
  "You have the best sense of humor – better than a cat meme!",
  "You're more fun than a ball pit full of puppies!",
  "Your smile is brighter than a thousand suns.",
  "You're cooler than the other side of the pillow!",
];

let isSpinning = false;

function spinWheel() {
  if (isSpinning) return;

  isSpinning = true;
  const wheel = document.getElementById("wheel");
  const randomDegree = Math.floor(Math.random() * 360) + 1440; // 1440 to make it spin multiple times

  // Spin the wheel
  wheel.style.transform = `rotate(${randomDegree}deg)`;

  // Select random compliment based on the final position
  setTimeout(() => {
    const selectedCompliment =
      compliments[Math.floor(Math.random() * compliments.length)];
    document.getElementById("compliment-text").innerText = selectedCompliment;
    isSpinning = false;
  }, 5000); // 5 seconds to match the spin duration
}
