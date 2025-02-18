function validateEquation(equation) {
    if (!equation.includes('+') && !equation.includes('-') &&
        !equation.includes('/') && !equation.includes('*')) {
      return 'в выражении должны использоваться только операторы +, -, /, *';
    }
    
    const [operand1, operator, operand2] = equation.split('');
    
    if (operator === undefined || operand2 === undefined) {
      return 'не хватает одного или нескольких операндов';
    }
    
    if (isNaN(+operand1) || isNaN(+operand2)) {
      return 'операнды могут быть только числами';
    }
    
    return '';
  }
  
  function calcEquation(equation) {
    try {
      const result = eval(equation);
      return String(result);
    } catch (e) {
      return '';
    }
  }
  
  // Обработчик события отправки формы
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.input-validation');
    const inputField = document.getElementById('equation');
    const errorOutput = document.querySelector('.error-output');
    const resultOutput = document.querySelector('.result');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const equation = inputField.value.trim();
      const validationError = validateEquation(equation);
      
      if (validationError) {
        errorOutput.textContent = validationError;
        resultOutput.textContent = '';
      } else {
        const result = calcEquation(equation);
        
        if (result) {
          errorOutput.textContent = '';
          resultOutput.textContent = `Результат: ${result}`;
        } else {
          errorOutput.textContent = 'Невозможно вычислить выражение.';
          resultOutput.textContent = '';
        }
      }
    });
  });
