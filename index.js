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

function boolToWord( bool ){
    if(bool){
        return "Yes"
    } else {
        return "No"
    }
}

console.log(boolToWord(true))
console.log(boolToWord(false))
