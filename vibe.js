const vibes = [
    "this is java love",
    "test use java in jamstack",
    "this is example",
    "test run on cloudflare page"
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);