const defaultResult = 0;
let currentResult = defaultResult;

function FinalOutput(PrevNumber , operator , calcNumber){
  const calcDescription = `${PrevNumber}  ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}


function calculatedOutput (CalculationType){
  const enteredNumber = parseInt(userInput.value);
  const intialNumber = currentResult
  let MathOperator
  /*  Adding the OR Operator to test and verify the output was the same or Not
   {In Or if any one of the statement is true then the whole condition is true "its not the case with AND"}*/
   
  if (CalculationType === 'Add' || 
    CalculationType === 'Subtract' ||
    CalculationType === 'Multiply'
){

  if (CalculationType === 'Add'){
    currentResult = currentResult + enteredNumber
    MathOperator = '+'
  }
  else if (CalculationType === 'Subtract') {
    currentResult -= enteredNumber
    MathOperator = '-'
  }
  else {
    currentResult = currentResult * enteredNumber
    MathOperator = '*'
  }
  
  FinalOutput(intialNumber, MathOperator , enteredNumber)
}
}

function add() {
  calculatedOutput('Add');
}
function subtract(){
  calculatedOutput('Subtract');
}

function multiply(){
  calculatedOutput('Multiply');
  
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
