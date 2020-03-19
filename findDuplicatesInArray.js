function duplicateCount(text) {
  const arrayOfElements = text.split("");
  const duplicateArray = [];
  console.log(arrayOfElements);
  //   for (let i = 0; i < arrayOfElements.length - 1; i++) {
  //     if (typeof arrayOfElements[i] === "number") {
  //       if (arrayOfElements[i] === arrayOfElements[i + 1]) {
  //         duplicateArray.push(arrayOfElements[i]);
  //       }
  //     } else if (
  //       arrayOfElements[i].toLowerCase() === arrayOfElements[i + 1].toLowerCase()
  //     ) {
  //       duplicateArray.push(arrayOfElements[i]);
  //     }
  //   }
  console.log(duplicateArray);

  return duplicateArray;
}

// const x = duplicateCount("");
// const y = duplicateCount("abcde");
// const z = duplicateCount("aabbcde");
const zz = duplicateCount("aabBcde");
const zzz = duplicateCount("aabBc11d3e");

// console.log(x);
// console.log(y);
console.log(zz);
console.log(zzz);
