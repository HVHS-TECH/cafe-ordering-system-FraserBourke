console.log("Running Hello world!")

const OUTPUT = document.getElementById("celebrity");
function start() {}

//variables








let price = 0; 


function addItem() {

    const form = document.getElementById("orderForm");

    let name = document.getElementById("nameInput").value;
    let item = document.getElementById("itemInput").value;
    let moneySpent = document.getElementById("moneyInput").value;

    OUTPUT.innerHTML +=
    "<p>Order added successfully!</p>";

    OUTPUT.innerHTML += "<p> Added to order: "  +  name  + "  has ordered,  " + item + " for $"   + moneySpent "</p>";



    if (moneySpent < 150) {
        OUTPUT.innerHTML += "<p>You don't have enough money</p>";
    }
}




