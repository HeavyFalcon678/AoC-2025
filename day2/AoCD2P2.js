const fs = require('node:fs');

const useTestCase = false;

// handy way to switch between the test and the actual input
let input;
if (useTestCase) {
  input = fs.readFileSync('./testInput.txt', 'utf8', (err, input) => {return input;})
} else {
  input = fs.readFileSync('./input.txt', 'utf8', (err, input) => {return input;})
}

input = input.split(",")

const regex = /^(\d+)\1+$/
let totalValue = 0;

input.forEach(value => {
  let [min, max] = value.split("-");
  [min, max] = [+min, +max]

  for (let i=min; i<=max; i++) {
    let val = i.toString()

    if (val.match(regex)) { // ignore null cases
      let currentVal = val.match(regex)[0];

      if(currentVal[0] == "0") {
        console.log("starts with 0")
      } else {
        console.log(currentVal)
        totalValue += Number(currentVal);
      }
    }
  }
})

console.log(`Total: ${totalValue}`)