function findingAllDuplicates(text) {
  const duplicateArray =  [...text].reduce((accum, currVal) => {
      accum.indexOf(typeof currVal === "string" ? currVal.toLowerCase() : currVal) === -1 ? accum.push(currVal) : null
      return accum;
  }, [])

  return duplicateArray;
}

  const x = findingAllDuplicates("");
  const y = findingAllDuplicates("abcde");
  const z = findingAllDuplicates("aabbcde");
  const zz = findingAllDuplicates("aabBcde");
  const zzz = findingAllDuplicates("aabBcc11d3e");

console.log(x);
console.log(y);
console.log(z)
console.log(zz);
console.log(zzz);
