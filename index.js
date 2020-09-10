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
