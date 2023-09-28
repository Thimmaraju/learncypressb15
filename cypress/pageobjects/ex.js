// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("fizzbuzz");
//     }
//     else if (i % 5 == 0) {
//         console.log("buzz");
//     }
//     else if (i % 3 == 0) {
//         console.log("fizz");
//     }
//     else {
//         console.log(i);
//     }
// }


// function isAnagram(a, b) {
//     str1 = a.toLowerCase().split("").sort().join("")
//     str2 = b.toLowerCase().split("").sort().join("")

//     if (str1 == str2) {
//         console.log("Given strings are anagram")
//     }
//     else {
//         console.log("Given strings are not anagram")
//     }
// }


// isAnagram("listen", "silent")

// function isPal(str) {
//     var a = str.split("").reverse().join("")

//     if (str == a) {
//         console.log("Given String is palindrome")
//     }
//     else {
//         console.log("Given string is not palindrome")

//     }

// }


// isPal("anna")


// var a = 10, b = 20
// b = b - a
// a = a + b
// console.log(a, b)


// function countCharacters(str) {
//     const charCount = {};

//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     return charCount;
// }

// const inputString = "Thimmaraju";
// const result = countCharacters(inputString);
// console.log(result);


// reverse the string 

// Raju 

// uajR

// stringgiven = "Raju"

// reversedstring = stringgiven.split("").reverse().join("")

// console.log(reversedstring)


// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// reverseString('hello');

// var x= [1,4,5,9,8,3]
// var y = x.sort()
// var secondlargetnumber =  y[y.length-2]
// console.log(secondlargetnumber)
// var indexofseclarge = x.indexOf(secondlargetnumber)
// console.log(indexofseclarge)

number = 100110011

str = String(100110011)
var count = 0
var count2 = 0
for (let i = 0; i <= str.length; i++) {
    if (str[i] == 1) {
        count = count + 1
    }
    if (str[i] == 0) {
        count2 = count2 + 1
    }
}

console.log(count)

console.log(count2)
