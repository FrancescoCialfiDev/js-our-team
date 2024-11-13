"use strict"
console.clear()

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  },
];

const containerCard = document.querySelector(".container");

teamMembers.forEach(element => {
  containerCard.innerHTML += genCard(element);
});

const form = document.getElementById("formRegister")
const inputs = document.querySelectorAll("input");
let newObject;






form.addEventListener("submit", (event) => {
  event.preventDefault()

  let newUser = []
  for (const element of inputs) {
    newUser.push(element.value);
  }

  newObject = {
    name: newUser[0],
    role: newUser[1],
    email: newUser[2],
    img: newUser[3],
  }

  containerCard.innerHTML += genCard(newObject);

})

function genCard(element) {
  return `<div class="card d-flex ">
    <div class="img">
        <img src="img/${element.img}" alt="">
    </div>
    <div class="details">
        <p class="nome">${element.name}</p>
        <p class="work">${element.role}</p>
        <a href="mailto:marcobianchi@team.com">${element.email}</a>
    </div>
</div>
`
}


