function indicegrande(numbers) {
  let indiceMajor = 0;
  for (let i in numbers) {
    if (numbers[indiceMajor] < numbers[i]) {
      indiceMajor = i;
    }
  }
  return indiceMajor;
}
console.log(indicegrande([1, 2, 3, 4, 5, 0]));
