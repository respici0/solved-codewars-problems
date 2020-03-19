// function duplicateCount(text) {
//     const arrayOfElements = text.split("");
//     const duplicateArray = [];
//       for (let i = 0; i < arrayOfElements.length - 1; i++) {
//         if (typeof arrayOfElements[i] === "number") {
//           if (arrayOfElements[i] === arrayOfElements[i + 1]) {
//             duplicateArray.push(arrayOfElements[i]);
//           }
//         } else if (
//           arrayOfElements[i].toLowerCase() === arrayOfElements[i + 1].toLowerCase()
//         ) {
//           duplicateArray.push(arrayOfElements[i]);
//         }
//       }
  
//     return duplicateArray.length;
//   }
  
//   const x = duplicateCount("");
//   const y = duplicateCount("abcde");
//   const z = duplicateCount("aabbcde");
//   const zz = duplicateCount("aabBcde");
//   const zzz = duplicateCount("aabBc11d3e");
  
//   console.log(x);
//   console.log(y);
//   console.log(z)
//   console.log(zz);
//   console.log(zzz);

  function findingAllDuplicates(text) {
    const arrayOfElements = text.split("");
    const duplicateArray = [];
      for (let i = 0; i < arrayOfElements.length; i++) {
        if (typeof arrayOfElements[i] === "number") {
          if (duplicateArray.indexOf(arrayOfElements[i]) === -1) {
              console.log(arrayOfElements[i]);
            duplicateArray.push(arrayOfElements[i]);
          }
        } else if (
            duplicateArray.indexOf(arrayOfElements[i].toLowerCase()) === -1
        ) {
          console.log(arrayOfElements[i]);
          duplicateArray.push(arrayOfElements[i]);
        }
      }
   
    return duplicateArray;
  }

//   const x = findingAllDuplicates("");
//   const y = findingAllDuplicates("abcde");
//   const z = findingAllDuplicates("aabbcde");
//   const zz = findingAllDuplicates("aabBcde");
  const zzz = findingAllDuplicates("aabBc11d3e");
  
//   console.log(x);
//   console.log(y);
//   console.log(z)
//   console.log(zz);
  console.log(zzz);

  