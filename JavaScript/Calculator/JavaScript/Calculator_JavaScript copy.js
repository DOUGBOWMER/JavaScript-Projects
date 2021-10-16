// create an object to keep track of values
const Calculator = {
    //this display 0 on the screen
    Display_value: '0',
    //this will hold the first operan for anyu expresios, we set it to null for now
    First_Operand: null,
    //thiss checks whether or not the sevonc operand has been input
    Wait_Second_Operand: false, 
    // this will hold the operator, we set it to null for now
    operator: null,
};

// this modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_value, Wait_Second_Operand } = Calculator;
    //we are checking  to see if Wait_Second_Operand is true and set
    //Dispaly_Value to the key that was clicked.
    if (Wait_Second_Operand === true) {
        Calculator.Display_value = digit;
        Calculator.Wait_Second_Operand = false;
    }   else    {
        //this overwrites Display_Value if the current value is 0
        //otherwise it adds onto it
        Calculator.Display_value  === '0' ? digit : Display_value + digit;
    }
}//this section handles decimal point
function Input_Decimal(dot) {
    //this ensure that accidental clicking of decimal point
    //doesnt cause bugs in you operation
    if (Calculator.Wait_Second_Operand === true) return;
    if(!Calculator.Display_value.includes(dot)) {
        // we are saying that if the Display_Value does not contain a decimal point
        //we want to ad a decimal point
        Calculator.Display_value += dot;
    }
}

//this section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_value, operator } = Calculator
    //when an operator key is pressed, we convert the current number
    //displayed on the screen to a number and then store the result in 
    // calculator.FIrst_Operand if it doesnt alreadu exist
    const Value_of_Input = parseFloat(Display_value);
    //checks if an operator alreadu exists and if Wait_Second_Operand is true'
    //then update the operator and exits from function
    if (operator && Calculator.Wait_Second_Operand){
        Calculator.operator = Next_Operator;
        return;
    }


if (First_Operand == null) {
    Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//check is and operaotr already exists
        const Value_Now = First_Operand || 0;
        //if operator exists, propery lookup is performed for the operator
        //in the Perform_Calculation object and the function that matches the 
        //operator is executed
    let result = Perform_Calculation [operator] (Value_Now, Value_of_Input);
        // here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
        //this will remove any trailinf 0's
        result = (result*1).toString()
        Calculator,Display_value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
        

    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}


const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,

    "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,

    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,

    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,

    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_value = '0'
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;

}
 //this funstion update the scree with the contents of Display_Value
 function Update_Display() {
     const display = document.querySelector('.calculator-screen');
     display.value = Calculator.Display_value;

 }


 Update_Display();
 //this section monitors button clicks
 const keys = document.querySelector('.calculator-keys');
 keys.addEventListener('click', (event) => {
     //the target variable is and object that represents the element
     //that was cliicked
     const { target } = event;
     //if the element that was clicked on is not a buttom=n, exit the function
     if(!target.matches('button')) {
         return;
     }
if (target.classList.contains('operator')) {
    Handle_Operator(target.value);
    Update_Display();
    return;
}

if (target.classList.contains('deciamal')) {
Input_Decimal(target.value);
    Update_Display();
    return;
}
//ensure that AC clears the Numbers from the Calculator
if (target.classList.contains('all-clear')) {
    Calculator_Reset();
    Update_Display();
    return;
}
Input_Digit(target.value);
Update_Display();
})