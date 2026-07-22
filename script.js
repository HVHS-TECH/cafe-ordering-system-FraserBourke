console.log("Running Hello world!")

const OUTPUT = document.getElementById("celebrity");
function start() {}






function addItem() {

    const form = document.getElementById("orderForm");

    let name = document.getElementById("nameInput").value;
    let item = document.getElementById("itemInput").value;
    let moneySpent = document.getElementById("moneyInput").value;

    



    if (moneySpent < 150) {
        OUTPUT.innerHTML += " <p>You don't have enough money </p>";


    } else {
        
    OUTPUT.innerHTML +=
    "<p>Order added successfully!</p>";

    OUTPUT.innerHTML += " <p>Added to order: "  +  name  + "  has ordered,  " + item + " for $"   + moneySpent + " </p>";
    OUTPUT.innerHTML += " <p>Change: $" + (moneySpent - 150) + "</p>";


    }





}




