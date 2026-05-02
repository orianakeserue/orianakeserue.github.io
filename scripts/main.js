const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/images.jpeg") {
    myImage.setAttribute("src", "images/image2.jpg");
  } else {
    myImage.setAttribute("src", "images/images.jpeg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name."); //uses what the user writes to store in myName variable
  if (!myName) {
    //forces user to set a name
    setUserName();
  } else {
    localStorage.setItem("name", myName); //uses web storage API to store myName variable in the browser
    myHeading.textContent = `Mozilla is cool, ${myName}`; //sets text content of the heading using user's input}
  }
}

if (!localStorage.getItem("name")) {
  //initialization code; runs first when page loads. Here, if there's no name in localStorage, runs the above function
} else {
  const storedName = localStorage.getItem("name"); //otherwise, get back the name and change heading text content
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
  //when button is clicked, setUserName() runs. Allows user to change name.
  setUserName();
});
