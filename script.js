    function smoothRedirect(page) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = page;
  }, 600);
}

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim().toLowerCase();

  const validPasswords = [
    "bestie",
    "shrily",
    "angella",
    "shoharji",
    "ana",
    "anu",
    "sagnika",
    "jabeda",
    "rits",
    "ritu"
  ];

  if (validPasswords.includes(input)) {
    smoothRedirect("reasons.html");
  } else {
    alert("Hmm… that's not what you call me 😌 Try again.");
  }
}

function goToProposal() {
  smoothRedirect("proposal.html");
}

function sayYes() {
  const music = document.getElementById("bgMusic");
  const proposal = document.getElementById("proposalSection");
  const final = document.getElementById("finalSection");
  const loveFill = document.getElementById("loveFill");

  if (music) {
    music.play();
  }

  proposal.classList.add("fade-out");

  setTimeout(() => {
    proposal.style.display = "none";
    final.classList.remove("hidden");
    final.classList.add("fade-in");

    setTimeout(() => {
      loveFill.style.width = "100%";
    }, 500);

    startConfetti();
  }, 800);
}

function moveNo(button) {
  button.style.position = "absolute";
  button.style.top = Math.random() * 400 + "px";
  button.style.left = Math.random() * 400 + "px";
}

function startConfetti() {
  const canvas = document.getElementById("confetti");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({length:150}).map(() => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*6+2,
    color: `hsl(${Math.random()*360},100%,70%)`
  }));

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += 2;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }

  draw();
}

/* Tap 3 Times Secret */
let tapCount = 0;

document.addEventListener("click", function() {
  tapCount++;

  if (tapCount === 3) {
    const secret = document.getElementById("secretMessage");
    if (secret) {
      secret.classList.remove("hidden");
    }
  }

  setTimeout(() => {
    tapCount = 0;
  }, 1000);
});
      
