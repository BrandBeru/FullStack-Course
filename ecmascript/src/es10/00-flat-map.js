// flat
const array = [1,2,3,4,5,6,8, [1,54,32,32,12, [4,4,3,2,1]]]
console.log(array.flat(3))

// flatmap
const array2 = [2,5,4,3,2];
console.log(array2.flatMap(v => [v,v * 2]))