document.body.onload = addElement;
const BMWs = ["M 50", "M Sport", "Sport"];
const SportArr = [
  "Velour floor mats",
  "Rain sensor including auto headlights activation",
  "Automatic Stability Control (ASC)",
  "Standard suspension",
  "Electric Power Steering (ESP) with Servotronic",
  "Automatic tailgate operation",
];
const M50Arr = [
  "Velour floor mats",
  "Sun protection glass",
  "Automatic Stability Control (ASC)",
  "Adaptive M suspension",
  "Storage for wireless charging",
  "Cruise control with brake assist",
  "Automatic tailgate operation",
];
const MSport = document.getElementById("M Sport");
const Sport = document.getElementById("Sport");
const M50 = document.getElementById("M 50");
const burgerMenu = document.getElementById("burger-menu");
const overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

function addElement() {
  for (i = 0; i < BMWs.length; i++) {
    const newContent = document.createElement("h2");
    const price = document.createElement("p");
    const div = document.getElementById(BMWs[i]);
    const img = document.createElement("img");
    img.src = "../VM interview assets/Trim-0" + (i + 1) + ".jpg";
    img.id = BMWs[i] + "img";
    newContent.innerHTML = BMWs[i];
    price.innerHTML = "From £65,795";
    price.id = "Price" + i;
    div.appendChild(img);
    div.appendChild(newContent);
    div.appendChild(price);
  }

  const ul = document.createElement("ul");
  const ul2 = document.createElement("ul");

  for (i = 0; i < M50Arr.length; i++) {
    const li1 = document.createElement("li");
    li1.id = "M50" + i;
    li1.innerHTML = M50Arr[i];

    ul.appendChild(li1);
  }
  M50.appendChild(ul);

  for (i = 0; i < SportArr.length; i++) {
    const li2 = document.createElement("li");
    li2.id = "Sport" + i;
    li2.innerHTML = SportArr[i];

    ul2.appendChild(li2);
  }

  MSport.appendChild(ul2);
  const MSportlastChild = MSport.lastChild;
  const clone = MSportlastChild.cloneNode(true);
  Sport.appendChild(clone);
}
