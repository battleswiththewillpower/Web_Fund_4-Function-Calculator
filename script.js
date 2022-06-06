console.log("Ashley for the WIN$$$$$$$$$$$$")
//FIX THE NEGATIVE EDGE CASE


//display is an id #display
var displayDiv = document.querySelector("#display");
// displayDiv.innerText = "";
//create a empty string to have a placeholder for the numbers
let numberOne = '';
//create a second variable to hold the second number 
let numberTwo = '';
//this will str will keep account which operator thats being used
let symbol = '';

//press takes a number
function press(num) {
    // displayDiv.value += num;
    //we want to add that number to the string
    numberOne += num;
    //want to be aable to see that string as a text
    displayDiv.innerText = numberOne;
}

//reassign the display value, should add mutiple numbers

//press(num) class .row



//setOP() class .operator
function setOP(str) {
    // console.log(numberOne);
    // console.log('we are clicked');
    //anytime a second number/str is passed in we want it to equal numberOne 
    //becuase numberTwo is a placeholder
    numberTwo = numberOne;
    // console.log(numberOne);
    // console.log(numberTwo);
    //we want out symbol thats being passed in as a str
    symbol = str;
    //
    numberOne = '';
    // console.log(numberOne);


}

//equals calculate() id #equals
function calculate() {
    //convert from str to floating number that can use a deciaml
    let a = parseFloat(numberOne);
    let b = parseFloat(numberTwo);
    //result is equal to 0 until we find a new result once our symbols are passed in
    let result = 0;

    if (symbol === "+") {
        result = a + b;
    }
    else if (symbol === "-") {
        result = a - b;
    }
    else if (symbol === "/") {
        result = a / b;
    }
    else if (symbol === "*") {
        result = a * b;
    }
    //want to return the text element in html
    displayDiv.innerText = result;
    //want our final result to equal the two values being passed in
    numberOne = result;

}

// clear clr()
function clr() {
    //reset each starting value
    numberOne = "";
    numberTwo = "";
    //will display once the value is cleared
    displayDiv.innerText = '0';
}

