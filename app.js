function benar() {
  const numRandom = Math.floor(Math.random * 100);
  let start = 0;
  let end = 100;
  let count = 0;
  for (let i = start; i < end; i++) {
    let value = prompt(
      "Программа задает рандомное значение. Ваша задача угадать его. Введите число от 0 до 100"
    );
    count++;
    if (value == numRandom) {
      alert(`Вы угадали. Поздровляем!!! Вам понадобилось попыток ${count}`);
      break
    }
  }
}

benar();
