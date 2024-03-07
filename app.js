let string = "";
let buttons = document.querySelectorAll(".button");
let history = document.querySelector(".history");
let deLete = document.querySelector(".delete");
let pwr = document.querySelector(".power");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      if (string.includes("PWR")) {
        string = string.replace("PWR", "**");
      }
      let result = eval(string);
      let expression = string + "=" + result;
      history.innerHTML += expression + "<br>";
      string = result.toString();
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "SQRT") {
      let result = Math.sqrt(string);
      let expression = "SquareRoot of " + string + "=" + result;
      history.innerHTML += expression + "<br>";
      string = result.toString();
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "sin") {
      let radians = (string * Math.PI) / 180;
      let result = Math.sin(radians).toFixed(5);
      let expression = "sin of " + string + "=" + result;
      history.innerHTML += expression + "<br>";
      string = result.toString();
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "cos") {
      let radians = (string * Math.PI) / 180;
      let result = Math.cos(radians).toFixed(5);
      let expression = "cos of " + string + "=" + result;
      history.innerHTML += expression + "<br>";
      string = result.toString();
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "tan") {
      let radians = (string * Math.PI) / 180;
      let result = Math.tan(radians).toFixed(5);
      let expression = "tan of " + string + "=" + result;
      history.innerHTML += expression + "<br>";
      string = result.toString();
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "log(10)") {
      let result = Math.log10(string).toFixed(5);
      let expression = "Log to the Base 10 of " + string + "=" + result;
      history.innerHTML += expression + "<br>";
      string = result.toString();
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "ln") {
      let result = Math.log(string).toFixed(5);
      let expression = "Natural Log of " + string + "=" + result;
      history.innerHTML += expression + "<br>";
      string = result.toString();
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Delete") {
      let currentValue = document.querySelector("input").value;

      let newValue = currentValue.slice(0, -1);
      document.querySelector("input").value = newValue;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
