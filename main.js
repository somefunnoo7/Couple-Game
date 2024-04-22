let images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
  "24.png",
  "25.png",
  "26.png",
  "27.png",
  "28.png",
  "29.png",
  "30.png",
  "31.png",
  "32.png",
  "33.png",
  "34.png",
  "35.png",
  "36.png",
  "37.png",
  "38.png",
  "39.png",
  "40.png",
  "41.png",
  "42.png",
  "43.png",
  "44.png",
  "45.png",
  "46.png",
  "47.png",
  "48.png",
  "49.png",
  "50.png",
  "51.png",
  "52.png",
  "53.png",
  "54.png",
  "55.png",
  "56.png",
  "57.png",
  "58.png",
  "59.png",
  "60.png",
  "61.png",
  "62.png",
  "63.png",
  "64.png",
  "65.png",
  "66.png",
  "67.png",
  "68.png",
  "69.png",
  "70.png",
];
let btn = document.getElementById("btn");
const canvas = document.getElementById("cover"),
  ctx = canvas.getContext("2d");

// setting width and height of canvas
canvas.height = canvas.offsetHeight;
canvas.width = canvas.offsetWidth;

let isScratching = false,
  x = null,
  y = null,
  radius = 14,
  event = {
    touch: {
      down: "touchstart",
      move: "touchmove",
      up: "touchend",
    },
    mouse: {
      down: "mousedown",
      move: "mousemove",
      up: "mouseup",
    },
  },
  eventType = "ontouchstart" in window ? "touch" : "mouse";

function getPos(e) {
  const { left, top } = canvas.getBoundingClientRect();
  x = e.pageX - left;
  y = e.pageY - top;
}

function scratch(x, y) {
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  //   ctx.fillStyle = "gold";
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

// creating linear gradient background color
const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "pink");
gradient.addColorStop(0.7, "magenta");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener(event[eventType].down, () => {
  isScratching = true;
});
canvas.addEventListener(event[eventType].up, () => {
  isScratching = false;
});

// detect exact position of mouse
canvas.addEventListener(event[eventType].move, (e) => {
  if (!isScratching) return;
  getPos(e);
  scratch(x, y);
});

// get random image
btn.addEventListener("click", () => {
  window.location.reload();
});

let buttonHandler = () => {
  randomIndex = Math.round(Math.random() * images.length);
  selectedImage = images[randomIndex];
  document.getElementById("imageShow").src = `./Images/${selectedImage}`;
};
buttonHandler();
