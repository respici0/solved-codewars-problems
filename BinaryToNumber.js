const binaryArrayToNumber = arr => {
   const binaryNumber = parseInt(arr.join(""), 2);
   return binaryNumber
};


 console.log(binaryArrayToNumber([0,0,0,1]));
 console.log(binaryArrayToNumber([0,0,1,0]));
 console.log(binaryArrayToNumber([1,1,1,1]));
 console.log(binaryArrayToNumber([0,1,1,0]));
 