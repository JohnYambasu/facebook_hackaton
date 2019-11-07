
// ["hello", "world", "hi", "bye"]

let longestWordArr = ["hello", "world", "hi", "bye"]

const longestWord = arr => {
  let long = 0
  let longestWd
  for(let i=0; i < arr.length; i++){
    if(arr[i].length > long){
      long = arr[i].length
      longestWd = arr[i]
    }
  }
  return longestWd
}

console.log(`The longest is: ${longestWord(longestWordArr)}`)