function squareDigits(num){
    const arrOfIntegers = Array.from(String(num), Number);
    const squareEachNumber = arrOfIntegers.map(number => number ** 2);
    return parseInt(squareEachNumber.join(""))
 }

 squareDigits(9119);
p