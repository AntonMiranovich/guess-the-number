const numRandom = Math.floor(Math.random() * 100);

function searchBinar(numRandomFun) {
  let start = 0;
  let end = 100;
  let count = 0;

  for (let i = 0; i < 100; i++) {
    let value = +prompt(`Программа задает рандомное значение. Ваша задача угадать его. Введите число от ${start} до ${end}`);
    count++;
    if (value < 0 || value > 100 || isNaN(value)) {
      alert(`Вы ввели неверное значение.Введите число от ${start} до ${end}`);
      continue;
    }
    if (value == numRandomFun) {
      alert(`Вы угадали. Поздровляем!!! Вам понадобилось попыток ${count}`);
      break;
    } else if (value > numRandomFun) {
      end = value;
      alert(`Вы ввели число ${value} и это слишком большое значение. Введите число от ${start} до ${end}`);
      continue;
    } else if (value < numRandomFun) {
      start = value;
      alert(`Вы ввели число ${value} и это слишком маленькое значение. Введите число от ${start} до ${end}`);
      continue;
    }
  }
}

searchBinar(numRandom);
