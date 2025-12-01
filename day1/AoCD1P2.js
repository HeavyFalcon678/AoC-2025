const fs = require('node:fs');

const useTestCase = false;
const startingNumber = 50;

// handy way to switch between the test and the actual input
let input;
if (useTestCase) {
  input = fs.readFileSync('./testInput.txt', 'utf8', (err, input) => {return input;})
} else {
  input = fs.readFileSync('./input.txt', 'utf8', (err, input) => {return input;})
}

input = input.split("\n")



let finalVal = 0;
let currentVal = startingNumber;

input.forEach((value) => {
  let [dir, num] = (value.split(/(?=[A-Z])|(?<=[A-Z])/g)); // split value into direction and amount
  num = Number(num); // convert num to a number

  let multiplier = dir == 'R' ? 1 : -1; // which direction to turn the dial

  // this next block basically moves the dial one click and handles the edge cases
  for (let i=0; i < num; i++) {
    if (multiplier == -1 && currentVal == 0) currentVal = 100;
    if (multiplier == 1 && currentVal == 99) currentVal = -1;
    currentVal += multiplier;

    currentVal == 0 && finalVal++; // if value is 0 increment password
  }

  //console.log(currentVal);
});

console.log(`Password: ${finalVal}`);