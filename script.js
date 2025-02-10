function calculate(operator) {
  
    var num1 = parseFloat(document.getElementById("num1").value);
  
    var num2 = parseFloat(document.getElementById("num2").value);
  
    var resultText = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
      
        resultText.innerText = "Please enter valid numbers.";
      
        return;
    }
  
    var result;
  
    if (operator === "+") 
      
    {
      
        result = num1+num2;
      
        resultText.innerText = "The sum of " + num1 + " and " + num2 + " is " + result + ".";
      
    } 
      
    else if (operator === "-") 
      
    {
      
        result = num1-num2;
      
        resultText.innerText = "The difference of " + num1 + " and " + num2 + " is " + result + ".";
      
    } 
      
    else if (operator === "*") 
      
    {
      
        result = num1*num2;
      
        resultText.innerText = "The product of " + num1 + " and " + num2 + " is " + result + ".";
      
    } 
      
    else if (operator === "/") 
      
    {
        if (num2 === 0) {
          
            resultText.innerText = "Cannot divide by zero.";
          
            return;
          
        }
      
        result = num1/num2;
      
        resultText.innerText = "The quotient of " + num1 + " and " + num2 + " is " + result + ".";
      
    }
      
    else if (operator === "%") 
      
    {
      
        if (num2 === 0) {
          
            resultText.innerText = "Cannot find remainder with zero.";
          
            return;
          
        }
      
        result = num1%num2;
      
        resultText.innerText = "The remainder of " + num1 + " and " + num2 + " is " + result + ".";
      
    } 
      
    else 
      
    {
      
        resultText.innerText = "Invalid operation.";
      
    }
  
}
