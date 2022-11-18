const numberButttons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll('[data-operation]');
// const equalButton = document.querySelector('[data-equals]');
// const deleteButton = document.querySelector('[data-delete]');
// const allClearButton = document.querySelector('[data-all-clear]');
// const previousOperandTextElement = document.querySelector('[data-previous-operand]');
// const currentOperandTextElement = document.querySelector('[data-current-operand]');

var calNums = []

numberButttons.forEach((numBtn) => {
    numBtn.addEventListener("click", (number) => {

        calNums.push(number.target.innerHTML)
        document.querySelector(".current-operand").innerHTML += number.target.innerHTML

    })
})

var prevVal;
var currVal;
var operation;
var clear;

// multiply
document.getElementById("multiply").addEventListener("click", (product) => {
    document.querySelector(".previous-operand").innerHTML = document.querySelector(".current-operand").innerHTML
    document.querySelector(".current-operand").innerHTML = ''
    prevVal = document.querySelector(".previous-operand").innerHTML
    // operation
    operation = product.currentTarget.innerHTML
})

document.getElementById("equal").addEventListener("click", () => {
    currVal = document.querySelector(".current-operand").innerHTML
    document.querySelector(".previous-operand").innerHTML = ''
    document.querySelector(".current-operand").innerHTML = eval(prevVal + operation + currVal)


})


// divide
document.getElementById("divide").addEventListener("click", (division) =>{
    document.querySelector(".previous-operand").innerHTML = document.querySelector(".current-operand").innerHTML
    document.querySelector(".current-operand").innerHTML = ''
    prevVal = document.querySelector(".previous-operand").innerHTML
    // operation
    operation = division.currentTarget.innerHTML
    
})

// Add
document.getElementById("add").addEventListener("click", (addition) =>{
    document.querySelector(".previous-operand").innerHTML = document.querySelector(".current-operand").innerHTML
    document.querySelector(".current-operand").innerHTML = ''
    prevVal = document.querySelector(".previous-operand").innerHTML
    // operation
    operation = addition.currentTarget.innerHTML
    
})

// subtract 

document.getElementById("subtract").addEventListener("click", (subtraction) =>{
    document.querySelector(".previous-operand").innerHTML = document.querySelector(".current-operand").innerHTML
    document.querySelector(".current-operand").innerHTML = ''
    prevVal = document.querySelector(".previous-operand").innerHTML
    // operation
    operation = subtraction.currentTarget.innerHTML
    
})


// clear 
document.getElementById("clear").addEventListener("click", (cls) => {
    document.querySelector(".current-operand").innerHTML = document.querySelector(".current-operand").innerHTML = ''

})

// Delete a single number
document.getElementById("del").addEventListener("click", (del) => {
var currCalValue = document.querySelector(".current-operand").innerHTML
document.querySelector(".current-operand").innerHTML = currCalValue.slice(0, -1)

})

