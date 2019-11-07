
// [1, 2, 3, 4, 5, 7]

let arrnumbers = [1, 2, 3, 4, 5, 7]

let oddNumbers = arrnumbers.filter( number => {
  return !(number%2) == 0
})

console.log(oddNumbers)