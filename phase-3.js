const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {

  console.time('addNums10') ;


    let funcArr = [addNums(increment)];

    let incrementValue = increment;

    for (let i = 1; i <= 9; i++) {

      incrementValue += increment;

      const startTime = Date.now();

        funcArr.push(addNums(incrementValue));

      const endTime = Date.now();

      console.log(endTime - startTime);
    }


    return funcArr;

  console.timeLog('addNums10');
  // Then, add timing code
  console.timeEnd('addNums10')
  // Your code here



}


function addManyNums10Timing(increment) {

  console.time('addManyNums10');



    let funcArr = [addManyNums(increment)];

    let incrementValue = increment;

    for (let i = 1; i <= 999; i++) {

      incrementValue += increment;

      const startTime = Date.now();

        funcArr.push(addManyNums(incrementValue));

        const endTime = Date.now();

        console.log(endTime - startTime);

    }

    return funcArr;



  console.timeLog('addManyNums10');

// Then, add timing code

console.timeEnd('addManyNums10');
  // Your code here

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
