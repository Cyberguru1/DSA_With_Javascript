// array and operation on  array 

//declaration of an array
var new_array = [];
var new_array1 = new Array(); // new Array(24) lenght of arrary


new_array.push(1);
new_array1.push(2);

console.log(new_array, new_array1);

//opearations on array 

for(var i = 20; i>=0; i--){
    new_array.push(i);
}

console.log("total array:  ", new_array)


//length of an array

var len = new_array.length;
console.log(len);

//checking if array

console.log(Array.isArray(new_array));
console.log(Array.isArray(len));

//accessing an array and writing to an array

var nums = [];

for(var i = 0; i < 10; i++){
    nums[i] = i+1;
}

var sum = nums[0] + nums[1] + nums[2] + nums[3] + nums[4] + nums[5] + nums[6] ;

console.log(sum);

//using loop to sum an array 

var sum = 0;
for(var i = 0; i < nums.length; i++){

    sum += nums[i];
    console.log(`sum: ${sum} , added: ${nums[i]}`);
}

//creating array from strings

var sentence = "Hello my world from string which contains something!!!!";

var words = sentence.split(" ");

console.log(words);


for(var i = 0; i < words.length; i++){
    console.log(`word  ${i} ${words[i]}`);
}


//aggregating array operations


// /assining an array to another


var agg_array = [];

for(var i = 0; i < 10; i++){
    var sub_array = [];

    for(var j = 0; j < 5; j++){
        sub_array.push(i+j);
    }

    agg_array[i] = sub_array;
}

console.log(agg_array);


for(var v = 0; v < agg_array.length; v++){
    console.log(agg_array[v]);

}

// converting array to strings 


console.log(new_array.join(" "));// join("delimeter")
console.log(new_array.toString());


//new array from existing array 

//concatenating two  arrays

var array1 = ["america", "california","chillies", "douglas","bahamas","virgina","misisipi"];
var array2 = ["ghana","nigeria","niger","cot'dvour","cameroon"];

var new_arrays = array1.concat(array2);

console.log(new_arrays);

//or

console.log(array2.concat(array1));


//splicing array from another array


console.log(array1.splice(2,4)); //splice from index 2 and pick 4 contents from index 2

console.log(array2.splice(3,0,"algeria", "egypt","southafrica")); //splice from index 3 and add contents to it
console.log(array2);


//mutator fucntions

//push

array1.push("japan");
console.log(array1);

//pop

array1.pop();
console.log(array1);

//unshift: to add at the beginning of the array

array1.unshift("india");
console.log(array1);

//shift: to remove at the beginning of the array

array1.shift();
console.log(array1);

//ordering array elements

new_array.reverse();
console.log(new_array);

// sorting array elements

new_array.sort();  //sorting of interger array does not work
console.log(new_array);

//sorting array of words

array1.sort(); //sorting of characters array does work
console.log(array1);

//sorting integer array elements

function sortter(num1, num2){   
    return num1 - num2;
}

new_array.sort(sortter);
console.log(new_array);

//iterator fucntions 

//forEach fucntion itereator
function square(num){
    console.log(num, ":  " , num **2);
}

new_array.forEach(square);


//every iterator: use to check if every element of an array obeys a certain condition

function iseven(num){
    return num % 2 === 0;
}

var bolll = new_array.every(iseven);

if (bolll){
    console.log("every element of the array is even");
}

else{
    console.log("every element of the array is odd");
}


//some iterator: use to check if atleast a single element of an obeys a certain condition

var boll = new_array.some(iseven);

if (boll){
    console.log("at least one element of the array is even");
}
else{
    console.log("at least one element of the array is odd");
}


//reduce iterator: use to reduce the number of elements of an array

function sumation(num1, num2){
    return num1 + num2;
}

var summ = new_array.reduce(sumation);
console.log(summ);


function concater(string1, string2){
    return [string1, string2].join(" ");
}

console.log(array1.reduce(concater));



//reduceRight iterator: use to reduce from  the right direction of the array

console.log(array1.reduceRight(concater));


//filter iterator: use to filter the elements of an array that does not satisfy a certain condition

var even_array = new_array.filter(iseven);
console.log(even_array);


//map iterator: use to map the elements of an array to a funciton 

function adder(num){
    return num + 1;
}

var added = new_array.map(adder);
console.log(added);


//array of objects 

function structer(x, y){
    this.x = x;
    this.y = y;
}


obj0 = new structer(1, 2);
obj1 = new structer(2, 3);
obj2 = new structer(3, 4);
obj3 = new structer(4, 5);
obj4 = new structer(5, 6);
obj5 = new structer(6, 7);
obj6 = new structer(7, 8);
obj7 = new structer(8, 9);
obj8 = new structer(9, 10);
obj9 = new structer(10, 11);
obj10 = new structer(11, 12);

var points = [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10];

for(var i = 0; i <= 10; i++){
    console.log("Point " + i + ": " + points[i].x + ",  " + points[i].y);

}

//arrays in objects

function weekTmps(){
    this.datastore = [];
    this.add = add;
    this.avearage = avearage;
}


function add(tmps){
    this.datastore.push(tmps);
}

function avearage(){
    var sum = 0;
    for(var i = 0; i < this.datastore.length; i++){
        sum += this.datastore[i];
    }
    return sum/this.datastore.length;
}

var thisweek = new weekTmps();

for(var i = 1; i <= 10; i++){
    thisweek.add(i + (i*i + (i+i)**2));
}

console.log(thisweek.datastore);
console.log(thisweek.avearage());



// //excercises

function grade(){
    this.grade_datastore = [];
    this.addr = addr;
    this.cavearage = cavearage;
}

function addr(ngrade){
    this.grade_datastore.push(ngrade);
}

function cavearage(){
    var tota = 0;
    for(var i = 0; i < this.grade_datastore.length; i++){
        tota += this.grade_datastore[i];
    }
    return tota/this.grade_datastore.length;
}

var grades = new grade();
for(var i = 80; i<=100; i++){
    grades.addr(i);
}

console.log(grades.grade_datastore);

console.log(grades.cavearage());
