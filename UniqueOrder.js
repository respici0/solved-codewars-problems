const uniqueInOrder = (iterable) => [...iterable].filter((el, i) => el !== [...iterable][i + 1])
   
 uniqueInOrder('AAAABBBCCDAABBB')
 uniqueInOrder('ABBCcAD')

 console.log(uniqueInOrder([1,2,2,3,3]))