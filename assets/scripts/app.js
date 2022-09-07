const defaultResult = 0;
let currentResult = defaultResult;

function FinalOutput(PrevNumber , operator , calcNumber){
  const calcDescription = `${PrevNumber}  ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = parseInt(userInput.value);
  const intialNumber = currentResult
  currentResult = currentResult + enteredNumber
  FinalOutput(intialNumber, '+' , enteredNumber)
}
function subtract(){
  const enteredNumber = parseInt(userInput.value);
  const intialNumber = currentResult
  currentResult = currentResult - enteredNumber
  FinalOutput(intialNumber, '-' , enteredNumber)
}

function multiply(){
  const enteredNumber = parseInt(userInput.value);
  const intialNumber = currentResult
  currentResult = currentResult * enteredNumber
  FinalOutput(intialNumber, 'x' , enteredNumber)

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
