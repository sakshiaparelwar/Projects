let display = document.getElementById("display");
let inputs = document.querySelectorAll("input");

let string = "";
let arr = Array.from(inputs);
arr.forEach((input) => {
  input.addEventListener("click", (e) => {
    // console.log(e.target);
    // if (e.target.value == "Enter") {
    //   string = eval.string;
    //   display.value = string;
    // } else {
    string += e.target.value;
    display.value = string;
    // }
  });
});

function sqrt() {
  document.getElementsByClassName("button").value = Math.sqrt(display.value);
}
