//Question 8
//8.Remove Duplicate Items from Array using reduce function.
/* Explanation : 
   To remove duplicate items from an array using the reduce() function in JavaScript, we can follow below approach
   In this code we can that the reduce() function is used to iterate over the array. The accumulator (uniqueArray) intializes
   as an empty array [], and for each element currentElement in the array, it checks if uniqueArray already contains the element 
   using the includes() method. If the element is not already present, it is pushed into uniqueArray. The reduce() function returns the final uniqueArray after all iterations.*/

function removeAllDuplicates(input) {
    return input.reduce((uniqueArray, currentElement) => {
      if (!uniqueArray.includes(currentElement)) {
        uniqueArray.push(currentElement);
      }
      return uniqueArray;
    }, []);
}
  
const input = [1, 2, 3, 4, 2, 3, 5, 6, 6];
const uniqueArray = removeAllDuplicates(input);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5,6]



//Question 9
//9.Sort an array of strings by length.
/* Explanation: 
   To sort an array of strings by length in JavaScript, we can use the sort() method along with a custom comparison function. 
   In this code, the sort() method is used on the array with a comparison function (a, b) => a.length - b.length. This function 
   compares two strings, a and b, based on their lengths. By subtracting b.length from a.length, the comparison function determines 
   the correct order for the elements. If the result is negative, a should come before b. If the result is positive, b should come before a. 
   If the result is zero, the order remains unchanged.*/


function sortUsingLength(input1) {
    return input1.sort((a, b) => a.length - b.length);
}
  
const input1 = ["Testing", "The", "Code", "Kaif"];
const sortedArray = sortUsingLength(input1);
console.log(sortedArray);// Output: [ 'The', 'Code', 'Kaif', 'Testing' ]



//Question 10
//10.Write a JavaScript function to check whether an `input` is an array or not.
/* Explanation:
   To check whether an input is an array or not in JavaScript, we can use the Array.isArray() method. 
   In this below code, the isArray() function takes an input parameter. Inside the function, the Array.isArray() 
   method is used to check if the input is an array. The function returns the result of Array.isArray(input3), which will be true if the input is an array and false otherwise.*/

function isArray(input3) {
    return Array.isArray(input3);
}
  
console.log(isArray([1, 2, 3, 4, 5])); // Output: true
console.log(isArray("Hello I am Kaif Khan")); // Output: false
console.log(isArray({ key: "value" })); // Output: false



//Question 11
//11.Write a JavaScript function to sort the following array of objects by title value. 
/* Explanation:
   To sort the given array of objects by the title value in JavaScript, you can use the Array.prototype.sort() method along with a custom comparison function.
   In this code, the sortUsingTitle() function takes the array of objects as input. Inside the function, the sort() method is used on the array with a custom
   comparison function. The comparison function compares the title values of the objects.
   By converting both title values to lowercase using toLowerCase(), we ensure that the sorting is case-insensitive. The comparison function then returns -1 
   if titleA comes before titleB, 1 if titleA comes after titleB, and 0 if they are equal.*/

function sortUsingTitle(input4) {
return input4.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) {
    return -1;
    }
    if (titleA > titleB) {
    return 1;
    }
    return 0;
});
}

var libraryData = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

var sortedLibraryData = sortUsingTitle(libraryData);
        console.log(sortedLibraryData);    /* Output [
                                                    {
                                                    author: 'Suzanne Collins',
                                                    title: 'Mockingjay: The Final Book of The Hunger Games',
                                                    libraryID: 3245
                                                    },
                                                    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
                                                    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 }
                                              ]*/



//Question 12                                              
//12.Write a program to derive the provided output:-
//Input: var arrOfObj=[{name: 'Rohan', physics: 20, chemistry: 18, math: 26}, {name: 'Geeta', physics: 29, chemistry: 30, math: 22}, {name: 'Kunal', physics: 27, chemistry: 25, math: 21}, {name: 'Abhishek', physics: 21, chemistry: 26, math: 23}, {name: 'Aashish', physics: 25, chemistry: 16, math: 18}];
/* Explanation:
   To derive the desired output from the given input array of objects, we can use JavaScript to calculate the sum of physics, chemistry, and math marks for each student. 
   In this code, we initialize an empty result object to marks the name and total marks score for each student. Then, we iterate over each object in the arrOfObj array using the forEach() method. 
   For each object, we calculate the sum of physics, chemistry, and math scores and assign it to the totalScore variable. Finally, we add an entry to the result object using the student's name as the key and the total score as the value.*/

var arrayOfObject = [
  { name: 'Rohan', physics: 20, chemistry: 18, math: 26 },
  { name: 'Geeta', physics: 29, chemistry: 30, math: 22 },
  { name: 'Kunal', physics: 27, chemistry: 25, math: 21 },
  { name: 'Abhishek', physics: 21, chemistry: 26, math: 23 },
  { name: 'Aashish', physics: 25, chemistry: 16, math: 18 }
];

var result = {};
arrayOfObject.forEach(marks => {
  var totalMarksScore = marks.physics + marks.chemistry + marks.math;
  result[marks.name] = totalMarksScore;
});

console.log(result);//Output: { Rohan: 64, Geeta: 81, Kunal: 73, Abhishek: 70, Aashish: 59 }



//Question 13
//13.Write a JavaScript function to filter false, null, 0 and blank values from an array.
//Input: [“Test”, true, null, false, 0]
/* Explanation:
   To filter out false, null, 0, and blank values from an array in JavaScript, we can use the filter() method along with a condition to print the desired values.
   In this code, the filterFalsyValues() function takes an array parameter. Inside the function, the filter() method is used on the array. The callback function passed 
   to filter() checks if the value is not equal to false, null, 0, or an empty string. If the condition is true, the value is included in the filtered array.*/

function filterFalsyValues(array) {
    return array.filter(value => {
    // This will exclude false, null, 0, and blank values
    return value !== false && value !== null && value !== 0 && value !== '';
    });
}
  
const inputArray = ["Test", true, null, false, 0];
const filteredArray = filterFalsyValues(inputArray);
console.log(filteredArray);//Output: [“Test”, true]



//Question 14
//14.Write a JavaScript program to count the number of arrays inside a given array.
//Input: [2,8,[6],3,3,5,3,4,[5,4]]
/* Explanation:
   To count the number of arrays inside a given array in JavaScript, we can iterate over the elements of the array and check if each element is an array using the Array.isArray() method.
   In this code, the countArrays() function takes an array parameter. Inside the function, the forEach() method is used to iterate over each element of the array. For each element, the Array.isArray() 
   method is used to check if it is an array. If it is, the count variable is incremented.*/

function arrayCount(array) {
    let count = 0;
    array.forEach(element => {
        if (Array.isArray(element)) {
        count++;
        }
    });
    return count;
}
  
const arrayInput = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
const totalArrayCount = arrayCount(arrayInput);
console.log(totalArrayCount);//Output: 2
   


   

