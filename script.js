/* Smooth redirect */
function smoothRedirect(page) {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = page;
  }, 600);
}

/* MULTIPLE PASSWORDS — CASE INSENSITIVE */
function checkPassword() {
  const input = document.getElementById("password").value.trim().toLowerCase();
  const error = document.getElementById("error");
  const music = document.getElementById("bgMusic");

  const validPasswords = [
    "shrily",
    "angella",
    "shoharji",
    "rits",
    "ritu",
    "ana",
    "anu",
    "sagnika",
    "jabeda"
  ];

  if (validPasswords.includes(input)) {
    error.innerText = "";
    music.play().catch(() => {});
    smoothRedirect("reasons.html");
  } else {
    error.innerText = "Wrong secret name 💔 Try again!";
  }
}

function goToProposal() {
  smoothRedirect("proposal.html");
}

/* YES Button */
function celebrateYes() {
  const music = document.getElementById("bgMusic");
  music.play().catch(() => {});
  launchConfetti();
  setTimeout(() => {
    smoothRedirect("final.html");
  }, 2000);
}

/* NO Button moves */
function moveNo(btn) {
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}

/* Confetti */
function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = "20px";
    confetti.style.animation = "fall 3s linear forwards";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
      }
