function squareSum(numbers) {
    return numbers.reduce((total, number) => total + number ** 2, 0)
}

squareSum([1,2])
squareSum([0, 3, 4, 5])
console.log(squareSum([-1,-8,-20,-20,-18,-7,7,6,-15,17]))