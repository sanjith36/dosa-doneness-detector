// A deck of roasts for each state (make sure keys match your Teachable Machine class names!)
const ROASTS = {
  "dosa batter": [
    "This is warm fermented puddle water. Step away from the spatula.",
    "Did you just spill milk on a black plate and call it cooking?",
    "Patience is a virtue, but this hasn't even met heat yet.",
    "If you try to eat this now, your stomach will file a formal complaint."
  ],
  "uncooked dosa": [
    "Disappointment on a pan. Looks as pale as a ghost.",
    "This has the structural integrity of wet tissue paper.",
    "My sensors detect zero Maillard reaction. Turn up the stove, coward.",
    "Your ancestors are weeping at this rubbery disaster.",
    "It's cooked on one side and crying on the other."
  ],
  "golden dosa": [
    "Peak South Indian engineering. Certified edible.",
    "The golden hour has arrived. Grab the coconut chutney immediately.",
    "Crisp on the outside, soft on the inside. You might actually survive today.",
    "Gordon Ramsay would stay silent. That is a masterpiece.",
    "Mouth-watering perfection. Quick, eat it before it gets soggy!"
  ],
  "Burnt dosa": [
    "Congratulations, you have invented edible charcoal.",
    "Crunch level: tooth-shattering. Smoke alarm level: active.",
    "You were supposed to cook it, not cremate it.",
    "NASA wants their carbon heat shield tile back.",
    "Are you trying to exfoliate your throat with that sandpaper?"
  ],
  "non dosa": [
    "That is not a dosa. If you put that on a tava, you are going to jail.",
    "My optical sensors are deeply offended. That is definitely not food.",
    "Error 404: Dosa not found. Please do not cook that living creature or object.",
    "Did you seriously try to feed me a photo of that?"
  ]
};

// Helper function to pick a random roast from the array
function getRandomRoast(category) {
  const options = ROASTS[category];
  if (!options || options.length === 0) {
    return "Culinary chaos detected. I have no words for this.";
  }
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
