function smoothRedirect(page) {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = page;
  }, 600);
}

/* MULTIPLE PASSWORDS — CASE INSENSITIVE */
function checkPassword() {
  const allowedPasswords = [
    "bestie",
    "Angella",
    "Shrily",
    "Shoharji",
    "shundori",
    "Pallabi",
    "pall",
    "Ritu",
    "rits",
    "Ana",
    "Anu",
    "Sagnika",
    "Jabeda",
    "shrily",
    "angella"
  ];

  const entered = document
    .getElementById("password")
    .value
    .trim()
    .toLowerCase();

  if (allowedPasswords.includes(entered)) {
    smoothRedirect("reasons.html");
  } else {
    document.getElementById("error").innerText =
      "That’s not the name I call you 😭 try again!";
  }
}

function goToProposal() {
  smoothRedirect("proposal.html");
}

function celebrateYes() {

  // Play music when YES is clicked
  const music = document.getElementById("bgMusic");
  if (music) {
    music.play();
  }

  const yay = document.createElement("h1");
  yay.innerText = "YAYY!! 🎉💖";
  yay.style.position = "fixed";
  yay.style.top = "40%";
  yay.style.left = "50%";
  yay.style.transform = "translate(-50%, -50%) scale(0)";
  yay.style.fontSize = "50px";
  yay.style.zIndex = "9999";
  yay.style.animation = "popYay 0.6s ease forwards";
  document.body.appendChild(yay);

  launchConfetti();

  setTimeout(() => {
    smoothRedirect("final.html");
  }, 2000);
}

function moveNo(btn) {
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 80 + "%";
  btn.style.left = Math.random() * 80 + "%";
}

/* Floating hearts */
const container = document.querySelector(".floating-hearts");
if (container) {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }, 500);
}

/* Sparkle cursor */
document.addEventListener("mousemove", e => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.innerHTML = "✨";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 800);
});

/* Confetti */
function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.background =
      `hsl(${Math.random()*360},100%,70%)`;
    confetti.style.top = "50%";
    confetti.style.left = "50%";
    document.body.appendChild(confetti);

    const angle = Math.random()*2*Math.PI;
    const distance = Math.random()*300;

    confetti.animate([
      { transform: "translate(-50%,-50%)" },
      { transform: `translate(${Math.cos(angle)*distance}px, ${Math.sin(angle)*distance}px)` }
    ], { duration: 1000 });

    setTimeout(() => confetti.remove(), 1000);
  }
}

/* Love meter */
const loveFill = document.getElementById("loveFill");
if (loveFill) {
  setTimeout(() => {
    loveFill.style.width = "100%";
  }, 500);
}

/* Countdown */
const countdown = document.getElementById("countdown");
if (countdown) {
  let time = 10;
  const timer = setInterval(() => {
    countdown.innerText = "Deciding in " + time + "… 💓";
    time--;
    if (time < 0) clearInterval(timer);
  }, 1000);
}

/* Secret 3-click */
let clickCount = 0;
const secret = document.getElementById("secretTrigger");
if (secret) {
  secret.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 3) {
      alert("You found the hidden love level 💖✨");
    }
  });
}
