// Task 1
let arr = ['a', 'b', 'c', 'd']
console.log(`${arr[0]} + ${arr[1]}, ${arr[2]} + ${arr[3]}`)
// Task 2
let arr1 = [2, 5, 3, 9]
let result = arr1[0] * arr1[1] + arr1[2] * arr1[3]
console.log(result)
// Task 3
let arr3 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
let newArr = arr3.flat()
console.log(newArr[3])
// Task 4
let objTech = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
console.log(objTech.js[0])
// Task 5
let arrStr = []
let str = 'x'
for (let i = 0 ; arrStr.length < 10 ; i++){
    arrStr.push(str)
    str += 'x'
}
console.log(arrStr)
// Task 6
let arrNum = []
for (let i = 1 ; arrNum.length < 9 ; i++){
    let num = ''
    for (let y = 0 ; y < i ; y++){
        num += i;
    }
    arrNum.push(num)
}
console.log(arrNum)
// Task 7
 let arrFill = []
function arrayFill(sym , num) {
    for (let i = 1 ; i <= num ; i++){
        arrFill.push(sym)
    }
}
arrayFill( 'x' , 5)
console.log(arrFill)
// Task 8
let arrayNum = [ 5 , 8 , 9 , 32]
let sum = 0
for (let i = 0 ; i < arrayNum.length ; i++){
    sum += arrayNum[i]
    if (sum > 10){
        console.log(i + 1)
        break;
    }
}
// Task 9
let arrayNum1 = [ 5 , 8 , 9 , 32]

function reverseArr (arr) {
    let arrayNum2 = []
    for (let i = 0 ; i < arr.length; i++){
        arrayNum2[i] = arr[(arr.length - 1 ) - i ]
    }
    return arrayNum2;
}

console.log(reverseArr(arrayNum1))
// Task 10
let arr5 = [[1, 2, 3], [4, 5], [6]]
let sum1 = arr5.flat().reduce(function(accum , curr){
    return accum + curr;
})
console.log(sum1)
// Task 11
let arr6 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
let sum2 = arr6.flat(2).reduce(function(accum , curr){
    return accum + curr;
})
console.log(sum2)


