<img width="1280" height="640" alt="Dosa Doneness Detector banner" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />

# Dosa Doneness Detector

## Basic Details

### Team Name: FIRE_WOLF

### Team Members
- Sanjith S — TKMCE

### Project Description
DDD (Dosa Doneness Detector) is an AI-powered web app that stares at a photo of your dosa and judges you for it. Powered by a custom-trained vision model, it classifies your dosa as batter, uncooked, golden, or burnt — then roasts you accordingly, out loud.

### The Problem (that doesn't exist)
Nobody has ever stood over a stove wondering "is my dosa objectively good enough?" and needed a machine learning model to confirm it. DDD solves this problem that has never once occurred to a single human being, with full confidence and zero hesitation.

### The Solution (that nobody asked for)
An image classification model trained on dosas in every stage of triumph and disaster, wrapped in a dramatic "AI thinking really hard" stalling sequence, screen shakes for culinary crimes, confetti bursts for perfection, sound stings for every verdict, and a permanently-stuck Uselessness Meter proudly fixed at 100%.

## Technical Details

### Technologies/Components Used
For Software:
- **Languages used:** HTML, CSS, JavaScript
- **Frameworks used:** None — proudly vanilla JS
- **Libraries used:** TensorFlow.js, Teachable Machine Image Library (`@teachablemachine/image`), Web Speech API, Web Audio API
- **Tools used:** Google Teachable Machine, VS Code, GitHub, Vercel

### Implementation
For Software: Built entirely with HTML, CSS, and vanilla JavaScript. The AI model runs client-side using TensorFlow.js and Google's Teachable Machine Image library, loaded directly via CDN — no backend, no build step, no npm install required.

## Installation

```bash
git clone https://github.com/sanjith36/dosa-doneness-detector.git
cd dosa-doneness-detector
```

## Run

Just open it directly:
```bash
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

Or serve it locally (recommended, avoids browser `file://` restrictions):
```bash
python3 -m http.server 8000
# then visit http://localhost:8000 in your browser
```

## Deployment

This is a static site with no build step, so it deploys to [Vercel](https://vercel.com) as-is:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sanjith36/dosa-doneness-detector)

1. Go to [vercel.com/new](https://vercel.com/new) and import this repository.
2. Framework Preset: **Other**. Leave Build Command and Output Directory blank.
3. Click **Deploy** — Vercel serves `index.html`, `css/`, and `js/` directly.

Every push to `main` auto-redeploys once the repo is connected.

### Project Documentation
For Software:

#### Screenshots

<img width="1535" height="721" alt="Home screen of DDD" src="https://github.com/user-attachments/assets/5286a1ec-6c0e-4334-ab0f-bce3af76f0ca" />

The UI of the DDD.

<img width="1530" height="734" alt="DDD analyzing a golden dosa" src="https://github.com/user-attachments/assets/8c163de4-fb8a-45b2-a06f-9094718f8a61" />

Upload a golden dosa and DDD analyzes it and delivers its verdict.

<img width="1535" height="726" alt="DDD categorization example 1" src="https://github.com/user-attachments/assets/c0745d8a-e521-4697-baf0-042272d16b8a" />

The analyzer sorts every dosa into one of five categories: golden, burnt, uncooked, batter, or non-dosa.

<img width="1534" height="727" alt="DDD categorization example 2" src="https://github.com/user-attachments/assets/57b30b9b-ab60-4030-b58b-eb67da3ec671" />

Another verdict in action.

<img width="1535" height="726" alt="DDD categorization example 3" src="https://github.com/user-attachments/assets/8d67bb7d-1d42-4501-82b2-f3d6b2036bcb" />

Another verdict in action.

<img width="1534" height="730" alt="DDD categorization example 4" src="https://github.com/user-attachments/assets/8ef072b9-d650-4baa-88cc-71a57810081f" />

Another verdict in action.

#### Diagrams

<img width="2160" height="1800" alt="DDD workflow diagram" src="https://github.com/user-attachments/assets/264a46c4-ed02-4415-9759-52ba95aee35e" />

The full journey from dosa photo to public humiliation.

### Project Demo

#### Video
[Watch the DDD demo](https://drive.google.com/file/d/1K017oG0eXAPRohkgwvk12U7vh8KrAQdS/view?usp=sharing)

The video shows how the web app responds to different images based on categorization.

## Team Contributions
- **Sanjith S**: End-to-end build — trained the Teachable Machine vision model, developed the full frontend (HTML/CSS/JS), implemented the roast/audio/visual effects, and handled deployment.
- Built by Sanjith S, with AI assistance from Claude.

---
Made with ❤️ at TinkerHub Useless Projects

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--26-26?link=https%3A%2F%2Ftinkerhub.org%2Fevents%2F1M8ORET9A1%2Fuseless-projects-3.0)
