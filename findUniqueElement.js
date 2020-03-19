function findUniq(arr) {
    const sortedObject = {};
    let uniqueItem = ""

    for (let i of arr) {
        console.log(i)
        if (!sortedObject.hasOwnProperty(`${i}`)) {
            sortedObject[`${i}`] = 1;
        } else {
            sortedObject[`${i}`]++
        }
    }
    for (const key in sortedObject) {
        if (sortedObject[key] === 1) uniqueItem = key
    }
    return parseFloat(uniqueItem)
  }


//   function findUniq(arr) {
//     console.log(arr.sort((a,b)=>a-b))
//     arr.sort((a,b)=>a-b);

//     console.log(arr[0], arr[1])
//     console.log(arr[0]==arr[1]? arr.pop():arr[0])
//     return arr[0] === arr[1]? arr.pop():arr[0]
//   }

console.log(findUniq([ 0, 1, 0 ]))
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 3, 2, 3, 3, 3 ]))