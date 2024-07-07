// 1-masala
// function yoshVaIsmQaytarish(arr){
//     return arr.map(value => {
//         return {name: value.name, age: value.age}
//     })
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];

// console.log(yoshVaIsmQaytarish(students));

// 2-masala
// function engKattaBall(arr){
//     let ball = 0
//     arr.forEach(value => {
//         if(value.score > ball){
//             ball = value.score
//         }
//     })
//     return ball
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// console.log(engKattaBall(students));

// 3-masala
// function boshHarf(arr){
//     return arr.filter(value => value.name.charAt(0) == 'A')
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Andrew', age: 23, score: 88, status: 'active' }
//   ];
// console.log(boshHarf(students));

// 4-masala
// function engKattaBall(arr){
//     let res = arr.reduce((sum,value)=>sum + value.score, 0)
//     return res / arr.length
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// console.log(engKattaBall(students));

// 5-masala
// function topuvchi(arr, name){
//     return arr.find(student => student.name == name)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'John', age: 22, score: 92, status: 'inactive' },
//     { name: 'Bob', age: 23, score: 88, status: 'active' }
//   ];
// console.log(topuvchi(students, 'John'));

// 6-masala
// function findIndex(arr){
//     return arr.findIndex(value => value.score >= 85)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 80, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 85, status: 'active' }
//   ];
// console.log(findIndex(students));

// 7-masala
// function filtrlash(arr){
//     return arr.filter(value => value.status == 'active')
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// console.log(filtrlash(students));

// 8-masala
// function every(arr){
//     return arr.every(value => value.age > 18)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 17, score: 88, status: 'active' }
//   ];
// console.log(every(students));

// 9-masaala
// function some(arr){
//     return arr.some(value => value.score > 90)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// console.log(some(students));

// 10-masala
// function qoshish(arr1, arr2){
//     return arr1.concat(arr2)
// }
// const students1 = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const students2 = [
//     { name: 'Charlie', age: 23, score: 88, status: 'active' },
//     { name: 'David', age: 21, score: 90, status: 'inactive' }
//   ];
// console.log(qoshish(students1,students2));

// 11-masala

// 12-masala
// function ozgartirish(arr){
//     return arr.map(value => {
//         return {...value, name: value.name.toUpperCase()}
//     })
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// console.log(ozgartirish(students));

// 13-masala
// function qiymatOlish(arr){
//     return arr.map(value => value.score)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// console.log(qiymatOlish(students));

// 14-masala
// function kalitniOlish(arr){
//     return Object.keys(arr[0])
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' }
//   ];
// console.log(kalitniOlish(students));

// 15-masala
// function qoshish(arr,element){
//     return [...arr, element]
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const newStudent = { name: 'Charlie', age: 23, score: 88, status: 'active' };
// console.log(qoshish(students,newStudent));

// 16-masala
// function ochirish(arr,element){
//     return arr.filter(value => value.name !== element)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// console.log(ochirish(students, 'Bob'));

// 17-masala
// function every(arr){
//     return arr.every(man => man.age > 18)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }
//   ];
// console.log(every(students));

// 18-masala
// function map(arr){
//     return arr.map(value => value.status)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// console.log(map(students));

// 19-masala
// function ochirish(arr,element){
//     return arr.filter(value => value.name !== element)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// console.log(ochirish(students, 'Bob'));

// 20-masala
// function engKichikYosh(arr){
//     let min = 0
//     arr.forEach(value => {
//         if(min > value.age){
//             min = value.age
//         }
//     })
//     return min
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }
//   ];
// console.log(engKichikYosh(students));


// 1-masala
// function substring(str, start, end){
//     return str.substring(start, end)
// }
// console.log(substring('Hello, word', 0, 5));

// 2-masaala
// function swapCase(str){
//     let res = ''
//     for(let i = 0; i < str.length; i++){
//         let char = str[i]
//         if(char == char.toUpperCase()){
//             res += char.toLowerCase()
//         } else{
//             res += char.toUpperCase()
//         }
//     }
//     return res
// }
// console.log(swapCase("Hello, WORLD!"));

// 3-masala
// function split(str){
//     return str.split(' ')
// }
// console.log(split('Hello world from JavaScript'));

// 4-masala
// function join(arr){
//     return arr.join(',')
// }
// console.log(join(["Hello", "world", "from", "JavaScript"]));

// 5-masala
// function replaceAll(str){
//     return str.replaceAll('a', '@')
// }
// console.log(replaceAll("JavaScript"));

// 6-masala
// function trim(str){
//     return str.trim()
// }
// console.log(trim("   Hello, world!   "));

// 7-masala
// function charAt(str, index){
//     return str.charAt(index)
// }
// console.log(charAt("Hello, world!", 7));

// 8-masala
// function includes(str){
//     return str.includes('world!')
// }
// console.log(includes('Hello, world!'));

// 9-masala
// function endsWith(str){
//     return str.endsWith('world!')
// }
// console.log(endsWith('Hello, world!'));

// 10-masala
function startsWith(str){
    return str.startsWith('Hello')
}
console.log(startsWith("Hello, world!"));