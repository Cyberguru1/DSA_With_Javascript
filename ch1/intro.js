
// js review
// switch statement

var name = "name";
var na
switch (name) {
    case "n":
        na = "n";
        break;
    case "name":
        na = "nme";
        break;
    default:
        na = "none";
}

console.log(na);


//if -else statements

var mid = 24;
var high = 30;
var low = mid + high/2


if (mid > high) {
    console.log("mid is greater than hight");
}

else if (high > mid) {
    console.log("high is grater than mid");
}

else {
    console.log(mid, high, low);
}

// loops (while and for loops)

var count = 20;

while (count >= 1) {
    console.log(count ** 2);
    count -= 1;
}

console.log("this is count: ", count);

for (var i = count; i <= 20; i++){
    console.log(i);
}

//fucntions

function appraise(){
    console.log("Appraisal !!!!!!!!!");
    console.log("Appraisal mode");
    console.log("Appraising");
}

appraise();

function factorial(num) {
    if (num < 1){
        return 1;
    }
    return num * factorial(num - 1);
}

function factorial2(num){
    var total = 1;

    for(var index = num; index >= 1; index--){
        total *= index;
    }

    return total;
}

function transoform(val, listt, index=0){

    if (index >= listt.length){
        return listt
    }

    listt[index] = listt[index] * val;

    index += 1;

    return transoform(val, listt, index);
}


var out = factorial(20);
var out2 = factorial2(20);

var outt = transoform(2, [1,2,3,4]);
console.log(outt);
console.log(out, out2);


//objects or object oriednted programinging


function dog(dog_name){
    this,name = dog_name;
    this.walk = walk;
    this.barf = barf;
    this.wiggle = wiggle;
}

function walk(){
    console.log(name,"is walking..............!!!!!!!!!");
}

function barf(){
    console.log("barf barf! says ", name);
}

function wiggle(){
    console.log("tail wiggling, tail wiggling!!!!!!!");
}


var mr = new dog("salman");
mr.walk();
mr.barf();
mr.wiggle();


