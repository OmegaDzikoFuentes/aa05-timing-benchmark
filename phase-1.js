// Adds up positive integers from 1-n
function addNums(n) {

  let num = 0;

  for (let i = 1; i <= n; i++) {

           num += i;
  }

  return num;

}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in

}



module.exports = [addNums, addManyNums];
