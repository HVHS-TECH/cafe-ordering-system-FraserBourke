console.log("Hello world!")
const OUTPUT = document .getElementById("spaceForJavaScriptOutput");
function start() {

//variables
let Username = "Fraser";
let money = 50;
halfMoney = money / 2;



const CHOOSE_FIELD = document.getElementById("CHOOSE_FILED");
_choose_field = Number(CHOOSE_FIELD.value);




OUTPUT.innerHTML += ("<p>you have " + money + " dollars </p>")
OUTPUT.innerHTML += ("<p>You spend half of your money, now you have " + halfMoney + " dollars</p>")
OUTPUT.innerHTML += (" <p>Then you get $3, now you have " + (halfMoney + 3) + " dollars </p>")

let classArray = ["Michael Jackson", "The Rock", "Gordon Ramsay", "David Attenborough"];

let choice = CHOOSE_FIELD.value;

OUTPUT.innerHTML = "You chose: " + classArray[choice] + "<br>";
}