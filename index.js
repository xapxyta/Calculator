let display = document.getElementById("display");

allButtonFirst = document.querySelectorAll(".first").length;

allButtonSecond = document.querySelectorAll(".second").length;

for (i = 0; i < allButtonFirst; i++) {
  document.querySelectorAll(".first")[i].addEventListener("click", function() {
    let x = this.innerHTML;
    switch (x) {
      case x:
        display.value += x;
        break;
      default:
        console.log(x);
    };
  });
};

for (y = 0; y < allButtonSecond; y++) {
  document.querySelectorAll(".second")[y].addEventListener("click", function() {
    let x = this.innerHTML;
    switch (x) {
      case "=":
        display.value = eval(display.value);
        break;
      case "C":
        display.value = "";
        break;
      case "1%":
        display.value = display.value / 100;
        break;
      case "R":
        display.value = Math.round(display.value);
        break;
      case "&lt;=":
        display.value = display.value.substring(0, display.value.length - 1);
        break;
      default:
        console.log(x);
    };
  });
};
