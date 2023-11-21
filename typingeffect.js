// typing-effect.js

document.addEventListener("DOMContentLoaded", function () {
  // Your text to be typed
  var textToType = "Welcome To Your Dreams";
  var typingSpeed = 100; // Adjust the typing speed (milliseconds per character)

  // Get the container and create a div for the typing effect
  var container = document.querySelector('.image1');
  var typingDiv = document.getElementById('typing-text');

  // Start typing effect
  function typeText(index) {
    if (index < textToType.length) {
      typingDiv.innerHTML += textToType.charAt(index);
      index++;
      setTimeout(function () {
        typeText(index);
      }, typingSpeed);
    }
  }

  // Call the function to start typing when the window is loaded
  typeText(0);
});
