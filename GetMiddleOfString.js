function getMiddle(s) {
let strLength = s.length;
let arrayOfChar = s.split("");

  return strLength === 1 ? s : strLength % 2 === 0 ? arrayOfChar.splice(strLength / 2 - 1, 2).join("") : arrayOfChar.splice(strLength / 2, 1).join("");
}

console.log(getMiddle("A"))
console.log(getMiddle("HELLO"))
console.log(getMiddle("HELP"))
console.log(getMiddle("SUPERS"))