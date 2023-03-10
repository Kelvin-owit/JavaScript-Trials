//  created a variable
var index = 0;

//   Created a function for when a user clicks on the button
//   Get access to be able to create a background effect by accessing the body using getElementByTagName
//   Get access to the css by using the keyword (style).

function changeColor() {
  var colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "purple",
    "orange",
    "brown",
    "black",
  ];

  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if (index > colors.length - 1) {
    index = 0;
  }
}
