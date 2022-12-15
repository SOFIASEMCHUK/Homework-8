const operator = prompt('Введіть оператор: +, -, *, /');
const firstOperand = +prompt('Ввведіть перше число');
const secondOperand = +prompt('Ввведіть друге число');
  
switch(operator) {
    case '+':
        alert(`${firstOperand} ${operator} ${secondOperand} = ${firstOperand + secondOperand}`);
        break;
    case '-':
        alert(`${firstOperand} ${operator} ${secondOperand} = ${firstOperand - secondOperand}`);
        break;
    case '*':
        alert(`${firstOperand} ${operator} ${secondOperand} = ${firstOperand * secondOperand}`);
        break;
    case '/':
        alert(`${firstOperand} ${operator} ${secondOperand} = ${firstOperand / secondOperand}`);    
        break;
    default:
        alert('Do it again!')
}
