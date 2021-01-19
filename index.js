// #1
// function solution(str, ending){
//     if(str.endsWith(ending)){
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(solution('abc', 'bc'))
// console.log(solution('abc', 'd'))

// #2
// function boolToWord( bool ){
//     if(bool){
//         return "Yes"
//     } else {
//         return "No"
//     }
// }
//
// console.log(boolToWord(true))
// console.log(boolToWord(false))

// #3
// function isDivideBy(number, a, b) {
//     if (number%a ===0 && number%b ===0){
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(isDivideBy(-12,2, -6))
// console.log(isDivideBy(-12, 2, -5))

// #4
// function getAverage(marks){
//     sum = marks.reduce((a,b)=> a+b,0)
//     return Math.floor(sum/marks.length)
// }
//
// console.log(getAverage([2,2,2,2]))
// console.log(getAverage([1,2,3,4,5]))

// #5
// function even_or_odd(number) {
//     if(number%2===0){
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }

// #6
// function highAndLow(numbers){
//     let array = numbers.split(" ")
//     // console.log(array)
//     for(let i = array.length -1; i>=0 ; i--){
//         array.splice([i], 1, Number(array[i]))
//         // console.log(Number(array[i]))
//     }
//     let max = array.reduce(function (a,b){
//         return Math.max(a,b)
//     })
//     let min = array.reduce(function (a,b){
//         return Math.min(a,b)
//     })
//     // console.log(array)
//     return `${max} ${min}`
// }
//alt solution:
// function highAndLow(numbers){
//     numbers = numbers.split(' ').map(Number);
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }

// console.log(highAndLow("1 2 3 4 5"))

// #7
// function squareDigits(num){
//     const arr = num.toString().split('')
//     const squared = arr.map(e => e*e)
//     const joined = squared.join('')
//     return +joined
//
// }
// #8
// function opposite(number) {
//     return number*-1
// }
//
// console.log(opposite(5))
// console.log(opposite(-5))
// console.log(opposite(602))

// #9
// function removeChar(str){
//     let newArr = str.split('')
//     let popped = newArr.pop()
//     let shifted = newArr.shift()
//     return newArr.join('')
//
// };
//Alt solution:
// function removeChar(str) {
//     return str.slice(1, -1);
// }
// console.log(removeChar('eloquent'))
// console.log(removeChar("Ahsoka"))
// console.log(removeChar("Xambee"))

//#10
// function nbYear(p0, percent, aug, p) {
//     let count = 0
//     while(true){
//         if(p0>=p){return count}
//         p0 = p0 + p0 * (percent/100) + aug;
//         count ++
//     }
// }
//
// console.log(nbYear(1500, 5, 100, 5000))

//#11
// function count (string) {
//     arr = string.split('')
//     object = {}
//     for(let i = 0; i< arr.length -1; i++)
//         key = arr[i]
//         object.key = 1
//         // if(arr[i] !== object){
//         //     arr[i].push(object)
//         // }
//     return object;
// }
//
// console.log(count('aba'))
console.log('Still work on 11')

//#12

// function hero(bullets, dragons){
//  if(bullets>= dragons*2){
//      return true
//  } else {
//      return false
//  }
// }
// or
// function hero(bullets, dragons){
//     return bullets >= dragons * 2
// }
//
// console.log(hero(100, 40))

// # 13
// function hello(name) {
//    let correctName = name.replace(/[a-z]/ig, '')
//    return name ? `Hello, ${name}!`: 'Hello, World!';
// }
//
// console.log(hello('SuSan'))
// console.log(hello(''))

// # 14

// var isAnagram = function (test, original) {
//     // remove the variation of lowercase/uppercase for easier comparison
//     let a = test.toLowerCase()
//     let b = original.toLowerCase()
//
//     //split strings into an array, sort that array and join back into a string.
//     a = a.split("").sort().join("")
//     b = b.split("").sort().join("")
//
//     //compare sorted strings, return if they are true or false.
//     return a === b;
// };
//
// console.log(isAnagram("foefet", "toffee"))
// console.log(isAnagram("Buckethead", "DeathCubeK"))
// console.log(isAnagram("dumble", "bumble"))

// # 15

// function positiveSum(arr) {
//     //defining the sum variable we'll need to add to and return.
//     let sum = 0
//     //creating a for loop to iterate through the array.
//     for(let i = 0; i < arr.length; i++){
//         //if statement to check for negative numbers. If positive, add the # to sum
//         if (arr[i] > 0) {
//             sum = sum + arr[i]
//         }
//     }
//     return sum
// }
//
// console.log(positiveSum([1,2,3,4,5]))
// console.log(positiveSum([]))
// console.log(positiveSum([-1,2,3,4,-5]))

// # 16 Return Negative

// function makeNegative(num) {
//     //checking if num is a positive #, if it is multiply by -1 and returning it.
//     if (num > 0) {
//        num = num * -1
//         return num
//         //if the number is already negative or 0, returning it unchanged.
//     } else {
//         return num
//     }
// }
//
// console.log(makeNegative(42))
// console.log(makeNegative(0))
// console.log(makeNegative(-0.987))

// # 17 Return String Spaces

// function noSpace(x) {
//     //split the string up into an array so we can use array methods to modify it.
//     let xArr = x.split("")
//     //created an empty string to put the non-space characters into
//     let arr = []
//     //for loop to iterate over the array
//     for (let i = 0; i < xArr.length; i++) {
//         // if statement to check each value, if it's not a space, push it into the new array.
//         if (xArr[i] !== " ") {
//             arr.push(xArr[i])
//         }
//     }
//     //return the new array joined back together into a string with no spaces.
//     return arr.join("")
// }

// alt solution =
// function noSpace(x){return x.split(' ').join('')}
//
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
// console.log(noSpace('8aaaaa dddd r     '))

// # 18 Reversed Strings

// function solution(str){return str.split('').reverse().join('')}
//
// console.log(solution('world'))
// console.log(solution('hi'))

// # 19


// # 20
// # 21
// # 22
// # 23
// # 24
// # 25
// console.log()
