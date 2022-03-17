function calculate(event){
    hideErrorMessage();
    toggleActiveState(event);

    let tipPercentage = parseInt(event.value.replace('%',''));
    let bill = parseInt(document.getElementById("bill").value);
    console.log();
    let nbOfPeople = parseInt(document.getElementById("numberofpeople").value);
    if(nbOfPeople == 0){
        displayErrorMessage("Can't be zero");
    } else{
        let tipAmount = calculateTipAmountPerPerson(bill, tipPercentage, nbOfPeople);
        let total = calculateTotalPerPerson(bill, tipAmount, nbOfPeople);
    
        document.getElementById("tip-amount").innerText = "$" + tipAmount.toFixed(2);
        document.getElementById("total").innerText = "$" + total.toFixed(2);
    }
}

function reset(){
    document.getElementById("bill").value = null;
    document.getElementById("numberofpeople").value = null;
    document.getElementById("tip-amount").innerText = "$0.00";
    document.getElementById("total").innerText = "$0.00";
    toggleActiveState(this);
    hideErrorMessage();
}

function calculateTipAmountPerPerson(bill, percentage, nbOfPeople){
    return ((bill * percentage) / 100) / nbOfPeople;
}

function calculateTotalPerPerson(bill, tip, nbOfPeople){
    return (bill + tip) / nbOfPeople;
}

function toggleActiveState(event){
    let btns = document.querySelectorAll("input[type=button]");
    btns.forEach(btn =>{
        if(event.id === btn.id){
            btn.classList.add('active');
        }
        else if(btn.classList.contains('active')){
            btn.classList.remove('active');
        }
    });
}

function displayErrorMessage(message){
    document.getElementById("error-message").style.visibility = "visible";
    document.getElementById("error-message").innerText = message;
    document.getElementById("numberofpeople").style.border = "3px solid #D8000C";
}

function hideErrorMessage(){
    let node = document.getElementById("error-message");
    if(node.style.visibility == "visible"){
        node.style.visibility == "hidden";
        node.innerText = "";
        document.getElementById("numberofpeople").style.border = "none";
    }
}


