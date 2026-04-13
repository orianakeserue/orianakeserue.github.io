const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/images.jpeg") {
    myImage.setAttribute("src", "images/image2.jpg");
  } else {
    myImage.setAttribute("src", "images/images.jpeg");
  }
});
