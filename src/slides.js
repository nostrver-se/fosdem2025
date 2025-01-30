// source: https://stackoverflow.com/a/12646864
function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function combineData(texts, backgrounds, images) {
  const result = [];

  backgrounds.forEach((background) => {
    shuffleArray(texts).forEach((text) => {
      result.push({ text, background, image: "" });
    });
  });
  images.forEach((image) => {
    const randomPosition = Math.floor(Math.random() * (result.length + 1));
    result.splice(randomPosition, 0, { text: "", background: "", image });
  });

  return result;
}

const backgrounds = ["", "/fosdem2025/omar-bg.png"];
const images = [
  "/fosdem2025/arch1.png",
  "/fosdem2025/arch2.png",
  "/fosdem2025/arch3.jpg",
  "/fosdem2025/arch4.jpg",
];
const texts = [
  "NOSTR",
  "It's a protocol, <br /> not a platform",
  "Notes and Other Stuff Transmitted by Relays",
  "Foster freedom and social cohesion",
  "A libre protocol for communication using websockets",
  "Key signed events with data (JSON),<br /> broadcasted between clients and relays",
  "Not a crypto, blockchain or web3 project",
  "A grassroots project <br /> started in 2019 <br /> by Fiatjaf",
  "Easy to implement, <br /> simplicity is key",
  "You are free to build anything, <br /> but also embrace the chaos ;-)",
  "The database for your local-first application",
  "Rich development ecosystem with many libraries and SDKs",
  "It's serving the freedom of choice",
  "Not perfect and it will never be <br /> Worse is better (Richard P. Gabriel 1989)",
  "Stop studying protocols, <br /> just start building",
  "A movement endorsing digital autonomy",
  "Use and build social media for friends, not for billionaires",
  "The protocol is the API, <br /> the API is on the protocol level",
  "Jack Dorsey and Edward Snowden loves it <br /> #freedomtech",
  "A local-first internet identity",
  "The most open network with digitally signed and verifiable data",
];

const slides = combineData(texts, backgrounds, images);

export default slides;
