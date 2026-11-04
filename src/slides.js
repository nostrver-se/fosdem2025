// source: https://stackoverflow.com/a/12646864
function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function combineData(texts) {
  const result = [];

  if (texts) {
    shuffleArray(texts).forEach((text) => {
      result.push({ text });
    });
  }

  return result;
}

const backgrounds = ["", "/omar-bg.png"];
const images = [
  "/arch1.png",
  "/arch2.png",
  "/arch3.jpg",
  "/arch4.jpg",
  "/arch5.jpg",
  "/arch6.jpg",
  "/arch7.png",
  "/arch8.png",
];
const texts = [
  "NOSTR",
  "It's a protocol, <br /> not a platform",
  "Notes and Other Stuff Transmitted by Relays",
  "Foster freedom and social cohesion",
  "A libre protocol for communication using websockets",
  "Key signed events with data (JSON),<br /> broadcasted between clients and relays",
  "Not a crypto, blockchain or web3 project",
  "Nostr events swarm around on relays",
  "A grassroots project <br /> started in 2019 <br /> by Fiatjaf",
  "There is no billionaire owner, no corporate authority, not even a foundation",
  "You are free to build anything, and enjoy the chaos ;)",
  "The `database` for your local-first application",
  "A npub1 is your public key",
  "Zero switching costs between clients",
  "A nsec1 is your private key (keep it secret!)",
  "The only decentralized protocol that has a chance of working",
  "Stop studying <br /> Start building",
  "Your profile is not tied to a domain",
  "Micropayments with zaps",
  "A movement endorsing digital autonomy",
  "Anyone can run a relay",
  "Download a client, write a note with your introduction and use the hashtag #introductions",
  "Freedom Tech",
  "Censorship-resistant",
  "It's like e-mail",
  "Build for anyone <br /> Use with anyone",
  "Visit nostr.org",
  "The protocol is the API, <br /> the API is on the protocol level",
  "It's intrastructure, it's social, it's open",
  "A local-first internet identity",
  "Each relay is free to have its own policy",
  "All data are JSON-formatted Nostr events",
  "The most open network",
  "Digitally signed and verifiable data",
  "Natural communities can form around any relay",
];

const slides = combineData(texts, backgrounds);

export default slides;