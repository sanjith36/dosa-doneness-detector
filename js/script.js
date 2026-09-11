// PASTE YOUR MODEL LINK HERE (Must end with a trailing slash "/")
const URL = "https://teachablemachine.withgoogle.com/models/BUbcx2q2K/";

let model, maxPredictions;

async function initModel() {
  document.getElementById("start-btn").innerText = "Loading AI...";

  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  try {
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    document.getElementById("system-status").innerText = "AI Ready! Upload an image.";
    document.getElementById("start-btn").style.display = "none";

    // Show the upload input now that AI is ready
    document.getElementById("image-upload").style.display = "block";
  } catch (err) {
    alert("Wait! Did you replace the URL variable with your Teachable Machine link?");
    document.getElementById("start-btn").innerText = "Retry Loading";
  }
}

// Handle Image Upload
const imageUpload = document.getElementById('image-upload');
const previewImage = document.getElementById('preview-image');
const placeholder = document.getElementById('placeholder-text');

imageUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.src = e.target.result;
      previewImage.style.display = 'block';
      placeholder.style.display = 'none';

      // Wait for the image to render before predicting
      previewImage.onload = () => {
        if (model) predictImage();
      }
    };
    reader.readAsDataURL(file);
  }
});

async function predictImage() {
  await simulateThinking();

  const prediction = await model.predict(previewImage);
  let highestProb = 0;
  let winningClass = "";

  for (let i = 0; i < maxPredictions; i++) {
    const prob = prediction[i].probability;
    if (prob > highestProb) {
      highestProb = prob;
      winningClass = prediction[i].className;
    }
  }

  document.getElementById("system-status").innerText = "AI Ready! Upload an image.";

  // If confidence is lower than 75%, or the model itself lands on "non dosa", reject as impostor
  if (highestProb < 0.75 || winningClass === "non dosa") {
    revealVerdict("Identity Crisis", "non dosa");
    return;
  }

  // Reveal the verdict for a genuine dosa category
  revealVerdict(winningClass, winningClass);
}

// --- Comedy FX below: none of this makes the app more useful ---

const THINKING_MESSAGES = [
  "Consulting my grandmother...",
  "Measuring crispiness particles...",
  "Asking the pan for its opinion...",
  "Calculating chutney compatibility...",
  "Running unnecessary calculations..."
];

async function simulateThinking() {
  const stateEl = document.getElementById("current-state");
  const badge = document.getElementById("system-status");
  for (const msg of THINKING_MESSAGES) {
    stateEl.innerText = msg;
    badge.innerText = "Thinking really hard...";
    await new Promise((r) => setTimeout(r, 280));
  }
}

let lastRoastCategory = null;

function revealVerdict(displayLabel, roastCategory) {
  lastRoastCategory = roastCategory;
  const stateEl = document.getElementById("current-state");
  stateEl.innerText = displayLabel;
  stateEl.classList.remove("glitch-text");

  const commentary = getRandomRoast(roastCategory);
  typeRoast(commentary);
  speakRoast(commentary);
  triggerVerdictEffects(roastCategory);
}

function typeRoast(text) {
  const el = document.getElementById("roast-text");
  const quoted = `"${text}"`;
  el.innerText = "";
  let i = 0;
  const interval = setInterval(() => {
    i++;
    el.innerText = quoted.slice(0, i);
    if (i >= quoted.length) clearInterval(interval);
  }, 16);
}

function spawnParticles(emoji, count) {
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    el.textContent = emoji;
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = (1 + Math.random() * 1.2) + "rem";
    el.style.animationDuration = (2 + Math.random() * 2) + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4200);
  }
}

function playTone(freqs) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    let t = ctx.currentTime;
    freqs.forEach((f) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = f;
      osc.type = "sine";
      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.2);
      t += 0.13;
    });
  } catch (e) {
    // Web Audio not supported, silently ignore
  }
}

function triggerVerdictEffects(category) {
  const statusPanel = document.querySelector(".status-panel");
  const stateEl = document.getElementById("current-state");
  statusPanel.classList.remove("shake");
  stateEl.classList.remove("glitch-text");

  if (category === "golden dosa") {
    spawnParticles("✨", 28);
    playTone([523, 659, 784]);
  } else if (category === "Burnt dosa") {
    spawnParticles("🔥", 22);
    playTone([220, 180, 140]);
    void statusPanel.offsetWidth;
    statusPanel.classList.add("shake");
  } else if (category === "non dosa") {
    stateEl.classList.add("glitch-text");
    void statusPanel.offsetWidth;
    statusPanel.classList.add("shake");
    playTone([300, 250, 200, 150]);
  } else if (category === "uncooked dosa" || category === "dosa batter") {
    playTone([392, 349]);
  }
}

function speakRoast(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}
