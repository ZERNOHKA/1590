import * as funcs from './utils.js';

const input = document.querySelector('input');
const form = document.querySelector('form');
const errorOutput = document.querySelector('.error-output');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value } = input;
  const calcEquation = funcs.calcEquation || (() => {});
  const validateEquation = funcs.validateEquation || (() => {});
  // чтобы не выбросило ошибку, если функции undefined
  if (validateEquation(value) !== '') {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
  errorOutput.textContent = validateEquation(value);
  result.textContent = calcEquation(value);
});
