// typewriter effect
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Web Developer...", "Web Designer...", "Mentee...", "Learner..."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
})

// navigation
let menuIcon = document.getElementById("menuIcon");
let menuSpace = document.getElementById("menuSpace");
let sidebar = document.querySelector(".sidebar");
let closeSideBar = document.getElementById("closeSideBar");


menuIcon.addEventListener("click", function() {
  if (sidebar.style.display === "none") {
    sidebar.style.display = "inline";
    menuSpace.style.display = "none";

  } else {
    menuSpace.style.display = "none";
    sidebar.style.display = "inline";

  }
});
closeSideBar.addEventListener("click", function() {
  sidebar.style.display ="none";
  menuSpace.style.display = "block";
})
//contact me
var form = document.getElementById("form");

function submitForm(event){
  event.preventDefault();
}
form.addEventListener('submit', submitForm);


function sendEmail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };
  const serviceId = "service_slwl5rp";
  const templateId = "template_ivtj9gr";


  emailjs
  .send(serviceId, templateId, params)
  .then((res) => {
    document.getElementById("name").value = "",
    document.getElementById("email").value = "",
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your messege was successfully sent. Ransmon will be in touch.");
  })
  .catch((err) => console.log(err));
}

