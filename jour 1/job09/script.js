function tri(numbers, order) {
  var temp = [];

  for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
      switch (order) {
      case "asc":
      if (numbers[i] < numbers[j]) {
      temp = numbers[j];
      numbers[j] = numbers[i];
      numbers[i] = temp;
      }
      break;

      case "desc":
      if (numbers[i] > numbers[j]) {
      temp = numbers[j];
      numbers[j] = numbers[i];
      numbers[i] = temp;
            }
    default:
    break;
  }

 }
}
  return numbers;

}

console.log(tri([7, 21, 58, 11, 9, 4, 74, 0, 47, 6, 152, 39, 98], "desc"));