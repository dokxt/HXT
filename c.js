// A function = a recipe. Write it once, use it many times.
function sayHello(name) {
  return "Hello, " + name + "!";
}

// Find the elements from the HTML (using their id)
const button = document.getElementById("myButton");
const message = document.getElementById("message");

// When the button is clicked, do something:
button.addEventListener("click", () => {
  message.textContent = sayHello("world") + " Time: " + new Date().toLocaleTimeString();
});
