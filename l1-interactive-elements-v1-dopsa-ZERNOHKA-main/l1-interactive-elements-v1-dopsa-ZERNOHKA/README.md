[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/qHs2oPP9)
## Правила и регламент

- [Правила, рекомендации и порядок проведения](https://github.com/hexlet-college-students/exam-rules)

## Задание

Ваша задача состоит в том, чтобы создать форму с валидацией инпута.

### Примечания

## 1 задача

Подключите в `index.html` стили **styles/app.css** и **styles/default.css**.
Подключите в `index.html` скрипты, это можно сделать, вставив в \<head> документа следующий тег:

```html
<script defer src="index.js" type="module"></script>
<script defer src="utils.js" type="module"></script>
```

Добавьте в \<body> `index.html` следующую разметку:

```html
  <h1>l1-interactive-elements-v1</h1>
  <form class="input-validation">
    <label for="equation">Введите выражение с двумя однозначными операндами:</label>
    <input type="text" id="equation" maxlength="3" name="equation">
    <button type="submit">Вычислить</button>
    <p class="error-output"></p>
    <p class="result"></p>
  </form>
```

## 2 задача

Добавьте в файл `styles/app.css` стили

1. Для класса `error`:

```css
border: 3px solid rgb(255, 71, 71);
```

2. Для \<button> при событии hover:

```css
color:rgb(255, 255, 255);
background-color: #616467;
```

## 3 задача

В файле `utils.js` реализуйте и экспортируйте функцию `validateEquation()`, которая проверяет входящую строку c математическим выражением на соответствие следующим критериям в указанном порядке:

- в строке есть хотя бы один символ из перечисленных: +, -, /, *
- перед символом и после символа есть операнды
- операнды являются числами

Функция всегда возвращает строку с первой встреченной ошибкой и возвращает следующий текст для каждой ошибки:

- не хватает одного или нескольких операндов
- в выражении должны использоваться только операторы +, -, /, *
- операнды могут быть только числами

Если ошибок нет, то функция `validateEquation()` возвращает пустую строку. Если выражение не удовлетворяет нескольким условиям сразу, то выводится первое из них, в порядке, определенном выше.

Любой операнд и оператор всегда является однозначными символами.

```javascript
validateEquation('1+1') // ''
validateEquation('1*') // 'не хватает одного или нескольких операндов'
validateEquation('1@2') // 'в выражении должны использоваться только операторы +, -, /, *'
validateEquation('3*g') // 'операнды могут быть только числами'
validateEquation('') // 'не хватает одного или нескольких операндов'
validateEquation('2+3') // ''
```

## 4 задача

В файле `utils.js` реализуйте и экспортируйте функцию `calcEquation()`, которая принимает на вход строку с выражением, вычисляет выражение и возвращает его результат в виде строки. В том случае, если на вход приходит строка, которая не является валидным выражением, следует вернуть пустую строку.

```javascript
calcEquation('2+3') // '5'
calcEquation('1*2') // '1'
calcEquation('1-2') // '-1'
calcEquation('9/3') // '3'
calcEquation('39') // ''
calcEquation('*39') // ''
```
