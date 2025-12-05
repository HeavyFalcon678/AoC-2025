const fs = require('fs');

const useTestCase = false;

// handy way to switch between the test and the actual input
let input;
if (useTestCase) {
  input = fs.readFileSync('./testInput.txt', 'utf8', (err, input) => {return input;});
} else {
  input = fs.readFileSync('./input.txt', 'utf8', (err, input) => {return input;});
}

input = input.split("\n");


let finalCount = 0;

input.forEach((batteryBank, bankIndex) => {
  let totalVal = ""; // string that will contain the value for each row; in string format for easy concatenation
  let currentPos = 0; // keep track of where to start looking for the next value
  for (let batteryIndex=0; batteryIndex<12; batteryIndex++) {
    let [highestNumber, highestIndex] = [0];

    for (let voltageIndex = currentPos; voltageIndex < batteryBank.length; voltageIndex++) {
      // If number is greater than the highest number so far and enough digits are left
      if (batteryBank[voltageIndex] > highestNumber && voltageIndex <= (batteryBank.length - Math.abs(batteryIndex - 12))) {
        highestNumber = batteryBank[voltageIndex];
        highestIndex = voltageIndex;
      }
    }
    currentPos = highestIndex + 1; // update where to start the for loop
    totalVal += highestNumber.toString()
  }
  finalCount += +totalVal;
});

console.log(finalCount)