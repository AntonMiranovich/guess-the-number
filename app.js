const numRandom = Math.floor(Math.random() * 100);

const value = prompt("Введите число от 1 до 100");

if (value < 0 || value > 100 || isNaN(value)) {
  alert("Вы ввели неправильное значение. Введите значение от 1 до 100");
  value = prompt("Введите число от 1 до 100");
}

function searchBenary(num, val) {
  let start = 0;
  let end = 100;

  
}

searchBenary(numRandom, value);
