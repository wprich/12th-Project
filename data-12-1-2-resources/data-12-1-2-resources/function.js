//Function to double each number in array
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);
//Same function as above but using arrows instead
var numbers = [1,2,3,4,5];
var doubled = numbers.map(num => num * 2);
console.log(doubled);


//Function to add 5 to each number in array
var numbers1 = [0,2,4,6,8];
var plusFive = numbers1.map(function(num){
    return num + 5;
});
console.log(plusFive)
//Same function as above but using arrows instead
var PlusFive = numbers1.map(num => num + 5);
console.log(plusFive);


//map() used to extract a specific property from each object in an array
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];
var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);


//Filter method to return any value greater than 1 thats in array
var numbers = [1,2,3,4,5];
var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);


//Filter method to include only animals whose species name starts with an s
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var species = words.filter(function(words){
    return words.startsWith("s");
});
console.log(species);


//Big differences between map and filter method is that map method transforms every element in the array
//whereas the filter method returns an array of values that meet certain criteria.
//Now to use arrow notations


//Sorts the array in ascending order
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);
//Sorts the above array in descending order
var sortedAge = familyAge.sort((a,b) => b - a);

//The slice method, used to select a subset of data from a data set
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1);
//Using the slice method to select the first three elements on an array
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1 = words.slice(0,3);
console.log(slice1);
//To select all of the elements after a certain element, leave 2nd option blank
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1 = words.slice(3,);
console.log(slice1);