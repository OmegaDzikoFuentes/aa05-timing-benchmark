const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {

  let funcArr = [addNums(increment)];

  let incrementValue = increment;

  for (let i = 1; i <= 9; i++) {

    incrementValue += increment;

      funcArr.push(addNums(incrementValue));

  }

  return funcArr;

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {

  let funcArr = [addManyNums(increment)];

  let incrementValue = increment;

  for (let i = 1; i <= 9; i++) {

    incrementValue += increment;

      funcArr.push(addManyNums(incrementValue));

  }

  return funcArr;

}

module.exports = [addNums10, addManyNums10];
