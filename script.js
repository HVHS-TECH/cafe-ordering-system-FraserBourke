console.log("Running Hello world!")

const OUTPUT = document.getElementById("celebrity");
function start() {}




// Function for the recipt

function addItem() {

    const form = document.getElementById("orderForm");

    let name = document.getElementById("nameInput").value;
    let item = document.getElementById("itemInput").value;
    let moneySpent = document.getElementById("moneyInput").value;

    



    if (moneySpent < 150) {
        OUTPUT.innerHTML += " <p>You don't have enough money :(, You need: $" + (150 - moneySpent) + " more</p>";


    } else {
        
    OUTPUT.innerHTML +=
    "<p>Order has been added successfully!</p>";

    OUTPUT.innerHTML += " <p>Added to order: "  +  name  + "  has ordered,  " + item + " for $"   + moneySpent + " </p>";
    OUTPUT.innerHTML += " <p>Change: $" + (moneySpent - 150) + "</p>";


    }





}




