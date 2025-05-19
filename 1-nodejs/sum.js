const inputValue = process.argv[2];

try {
  const parsedArray = JSON.parse(inputValue);

  function sumArrayValues(array) {
    let sum = 0;

    for (const item of array) {
      if (Array.isArray(item)) {
        sum += sumArrayValues(item);
      } else if (typeof item === "number") {
        sum += item;
      } else {
        console.warn(`Пропускаємо значення "${item}", яке не є числом`);
      }
    }

    return sum;
  }

  const total = sumArrayValues(parsedArray);
  console.log(`Сума чисел: ${total}`);
} catch (error) {
  console.error("Помилка: Невірний формат вхідних даних.");
}
