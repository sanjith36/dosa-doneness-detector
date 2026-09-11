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
    setupMeters();
  } catch (err) {
    alert("Wait! Did you replace the URL variable with your Teachable Machine link?");
    document.getElementById("start-btn").innerText = "Retry Loading";
  }
}

function setupMeters() {
  const meterContainer = document.getElementById("prediction-meters");
  meterContainer.innerHTML = "";
  for (let i = 0; i < maxPredictions; i++) {
    const className = model.getClassLabels()[i];
    meterContainer.innerHTML += `
      <div class="label-row">
        <span>${className}</span>
        <span id="pct-${i}">0%</span>
      </div>
      <div class="progress-bg"><div class="progress-fill" id="bar-${i}"></div></div>
    `;
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
  const prediction = await model.predict(previewImage);
  let highestProb = 0;
  let winningClass = "";

  for (let i = 0; i < maxPredictions; i++) {
    const prob = prediction[i].probability;
    const pct = Math.round(prob * 100);

    document.getElementById(`bar-${i}`).style.width = pct + "%";
    document.getElementById(`pct-${i}`).innerText = pct + "%";

    if (prob > highestProb) {
      highestProb = prob;
      winningClass = prediction[i].className;
    }
  }

  // If confidence is lower than 75%, reject as impostor
  if (highestProb < 0.75) {
    document.getElementById("current-state").innerText = "Identity Crisis";
    const impostorRoast = getRandomRoast("non dosa");
    document.getElementById("roast-text").innerText = `"${impostorRoast}"`;
    speakRoast(impostorRoast);
    return;
  }

  // Pick a random roast from the winning category
  document.getElementById("current-state").innerText = winningClass;
  const commentary = getRandomRoast(winningClass);
  document.getElementById("roast-text").innerText = `"${commentary}"`;
  speakRoast(commentary);
}

function speakRoast(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}
