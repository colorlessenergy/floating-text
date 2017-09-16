const body = document.querySelector("body");

const h1 = document.querySelector("body h1");


function randColor () {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return "rgb("+r+", "+g+", "+b+")";
}


setInterval(function () {
  let fontS = (Math.floor(Math.random() * 60) + 10) + "px";
  let color = randColor();
  body.style.backgroundColor = randColor();
  body.style.color = color;
  body.style.fontSize = fontS;

  h1.style.color = color;
  h1.style.fontSize = fontS;
  h1.style.left = (Math.floor(Math.random() * 100) + 10) + "vh";
  h1.style.top = (Math.floor(Math.random() * 80) + 10) + "vh";

}, 1000)
