console.log("Hello world!")

//variables
let Username = "Fraser";
let money = 50;
halfMoney = money / 2;

const OUTPUT = document .getElementById("spaceForJavaScriptOutput");



OUTPUT.innerHTML += ("<p>you have " + money + " dollars </p>")
OUTPUT.innerHTML += ("<p>You spend half of your money, now you have " + halfMoney + " dollars</p>")
OUTPUT.innerHTML += (" <p>Then you get $3, now you have " + (halfMoney + 3) + " dollars </p>")
