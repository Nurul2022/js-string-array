// 'Bangladesh is a beautiful country'.endsWith('country')
// true

// const str1 = 'Bangladesh is a beautiful country.'; console.log(str1.endsWith("country"));
// VM228:1 false
/*
const str1 = 'Bangladesh is a beautiful country.'; 
console.log(str1.endsWith("country"));
*/
/*
const str= 'I love coding more than eating.';
//console.log(str);
const  smallSlice = str.slice(2, 6);
console.log(smallSlice); */
/*
const names =["rafiq", "jabbar","bakkar", "habib", "dalim"];
 const sortedNames = names.sort();
// console.log(sortedNames);
const reversedNames = names.reverse();
console.log(reversedNames); */
/*
for (let i==0; i<10;i++){}
//should be
for (let i = 0; i<10;i++){} */

/*// Quiz No 12, Method str
const str1 = "Ami"
const str2 = "Tumi"
// const fullString = str1 + str2;
// console.log(fullString);

// const fullString = str2 + str1;
// console.log(fullString);

const fullString = Str2 + str1; //first letter Capital
console.log(fullString);        // so result com error
 */
/*// below method ok
const str1 = "Ami"
const str2 = "Tumi"
const fullString = str2.concat(str1);
console.log(fullString); */

//Use new Date() to generate a new Date object containing the current date and time.
/*
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today); */

//console.log(today);

// let today = new Date().toISOString().slice(0, 10)
// console.log(today) 

// let today = new Date().toLocaleDateString()
// console.log(today)

/*var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
document.write(utc); 
*/

//console.log(Date.now())  // 1644818593591 that is not valid
// console.log(Date())   //Mon Feb 14 2022 12:04:00 GMT+0600 (Bangladesh Standard Time) //this method effective
//console.log(Date.current()) // error
//console.log(Date(today)); // error 


const array = ["121", "12", "1", "112", "111"];

console.log(array.sort());

