// const numRandom = Math.floor(Math.random() * 100);

// function searchBinar(numRandomFun) {
//   let start = 0;
//   let end = 100;
//   let count = 0;

//   for (let i = 0; i <= 100; i++) {
//     if (i == 100) {
//       alert("Попытки закончились, вы не смогли угадать число");
//       break;
//     } else if (i >= 90) {
//       alert(`У вас осталось попыток - ${100 - i}`);
//     }

//     let value = +prompt(
//       `Программа задает рандомное значение. Ваша задача угадать его. Введите целое число от ${start} до ${end}`
//     );
//     count++;

//     if (
//       value < 0 ||
//       value > 100 ||
//       isNaN(value) ||
//       value !== Math.floor(value)
//     ) {
//       alert(`Вы ввели неверное значение.Введите число от ${start} до ${end}`);
//       continue;
//     }

//     if (value == numRandomFun) {
//       alert(`Вы угадали. Поздровляем!!! Вам понадобилось попыток - ${count}`);
//       break;
//     } else if (value > numRandomFun) {
//       end = value;
//       alert(
//         `Вы ввели число ${value} и это слишком большое значение. Введите число от ${start} до ${end}`
//       );
//       continue;
//     } else if (value < numRandomFun) {
//       start = value;
//       alert(
//         `Вы ввели число ${value} и это слишком маленькое значение. Введите число от ${start} до ${end}`
//       );
//       continue;
//     }
//   }
// }

// searchBinar(numRandom);

class Search {
  searchBinar(numRandomFun) {
    let start = 0;
    let end = 100;
    let count = 0;

    for (let i = 0; i <= 100; i++) {
      if (i == 100) {
        alert("Попытки закончились, вы не смогли угадать число");
        break;
      } else if (i >= 90) {
        alert(`У вас осталось попыток - ${100 - i}`);
      }

      let value = +prompt(
        `Программа задает рандомное значение. Ваша задача угадать его. Введите целое число от ${start} до ${end}`
      );
      count++;

      if (
        value < 0 ||
        value > 100 ||
        isNaN(value) ||
        value !== Math.floor(value)
      ) {
        alert(`Вы ввели неверное значение.Введите число от ${start} до ${end}`);
        continue;
      }

      if (value == numRandomFun) {
        alert(`Вы угадали. Поздровляем!!! Вам понадобилось попыток - ${count}`);
        break;
      } else if (value > numRandomFun) {
        end = value;
        alert(
          `Вы ввели число ${value} и это слишком большое значение. Введите число от ${start} до ${end}`
        );
        continue;
      } else if (value < numRandomFun) {
        start = value;
        alert(
          `Вы ввели число ${value} и это слишком маленькое значение. Введите число от ${start} до ${end}`
        );
        continue;
      }
    }
  }
}

numRandom = Math.floor(Math.random() * 100);
const search = new Search();
search.searchBinar(numRandom);
