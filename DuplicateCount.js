// function duplicateCount(text) {
//     const arrayOfElements = text.split("").map(char => char.toLowerCase());
//     const countObject = {}
//     const duplicateArray = [];

//     for (let char of arrayOfElements) {
//         if (!countObject.hasOwnProperty(char)) {
//             countObject[char] = 1
//         } else {
//             countObject[char]++
//         }
//     }

//     for (let char in countObject) {
//         if (countObject[char] > 1) {
//             duplicateArray.push(char);
//         }
//     }
  
//     return duplicateArray.length
//   }
  
// console.log(duplicateCount(""), 0);
// console.log(duplicateCount("abcde"), 0);
// console.log(duplicateCount("aabbcde"), 2);
// console.log(duplicateCount("aabBcde"), 2);
// console.log(duplicateCount("Indivisibility"), 1)
// console.log(duplicateCount("Indivisibilities"), 2)


// *refactored

function duplicateCount(text){
    var count = text.toLowerCase().split('').reduce((accum, curr) => {
      accum[curr] ? accum[curr] += 1 : accum[curr] = 1;
      return accum;
    }, {});
    
    console.log(count); // object
    console.log(Object.keys(count)) // array of objects keys
    return Object.keys(count).filter(key => count[key] > 1 ).length;
  }

// console.log(duplicateCount(""), 0);
// console.log(duplicateCount("abcde"), 0);
// console.log(duplicateCount("aabbcde"), 2);
// console.log(duplicateCount("aabBcde"), 2);
// console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2)