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

input.forEach(row => {
  highestVoltage = 0;

  // find all combinations of voltage and find the highest
  for (let num in row) {
    for(let i=Number(num)+1; i<row.length; i++) {
      if (Number(row[num]+row[i]) >= highestVoltage) {
        highestVoltage = Number(row[num]+row[i]);
      }
    }
  }
  
  finalCount += highestVoltage; // add the highest value to the final count
});

console.log(finalCount);