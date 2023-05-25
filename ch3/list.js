#!/usr/bin/node

//List ADT


// listSize (property)Number of elements in list
// pos (property)Current position in list
// length (property)Returns the number of elements in list
// clear (function)Clears all elements from list
// toString (function)Returns string representation of list
// getElement (function) Returns element at current position
// insert (function)Inserts new element after existing element
// append (function)Adds new element to end of list
// remove (function)Removes element from list
// front (function)Sets current position to first element of list
// end (function)Sets current position to last element of list
// prev (function)Moves current position back one element
// next (function)Moves current position forward one element
// currPos (function)Returns the current position in list
// moveTo (function)Moves the current position to specified position


function List(){
    this.listSize = 0;
    this.pos = 0;
    this.length = length;
    this.datastore = [];
    this.clear = clear;
    this.toString = toString;
    this.getElement = getElement;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.contains = contains;
}

function clear(){
    this.listSize = 0;
    this.pos = 0;
    this.datastore = [];
    console.log("list is cleared!!");
}

function toString(){
    return this.datastore.join(" ");
}

function getElement(){
    return this.datastore[this.pos];
}

function insert(position, element){

    for(var i = 0; i < this.length(); i++){
        if(i == position){
            this.datastore.splice(i, 0, element);
        }
    }
    this.listSize += 1;
    console.log(`${element} inserted successfully!`);
}

function append(element){
    this.datastore[this.listSize] = element;
    this.listSize += 1;
    console.log(`${element} appended successfully!`);
}

function length(){
    return this.listSize;
}


function remove(element) {
    for(var i = 0; i < this.length(); i++) {
        if (this.datastore[i] == element) {
            this.datastore.splice(i, 1);
        }
    }
    this.listSize -= 1;
    console.log(`${element} removed successfully!`);
}

function front() {
    this.pos = 0;
    console.log("Front element is now: " + this.datastore[this.pos]);
}

function end() {
    this.pos  =  this.length()-1;
    console.log("End element is: " + this.datastore[this.pos]);
}

function prev(){
    this.pos = (this.pos - 1) % (this.length());
}

function next(){
    this.pos = (this.pos + 1) % (this.length());
}

function currPos(){
    return "Current position is: " + this.pos;
}

function moveTo(destination){
    if (destination >= this.datastore.length || destination < 0){
        return `destination cannot be greater than or less than the size of the datastore which is ${this.length}`;
    }

    this.pos = destination;
}

function contains(element){
    var i = 0;
    while ( i < this.length()){
        if (this.datastore[i] == element) {
            return true;
        }
        i += 1;
    }
    return false;
}

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());
console.log(names.length());
console.log(names.getElement());
console.log(names.currPos());
console.log(names.toString());
console.log(names.listSize);
names.remove("Barbara")
console.log(names.length());
names.insert(0,"jOHN");
names.clear();
console.log(names.length());
console.log(names.toString());


//Excersie

// 1. Write a function that inserts an element into a list only if the element to be inserted
// is larger than any of the elements currently in the list. Larger can mean either greater
// than when working with numeric values, or further down in the alphabet, when
// working with textual values.

function check(listt, val){
    var out = true;
    for (var i = 0; i < listt.length; i++){
        if (val > listt[i]){
            out = true;;
        }
        else{
            out = false;
            return out;
        }
    }
    return out;
}

function add(listt, val){
    if (check(listt, val)){
        listt.push(val);
        console.log("done");
    }
    else {
            console.log("not greater than!");
        }

}
var listt = [1,2,3,5];
for(var i = 0; i <= 10; i++){
    console.log(i);
    add(listt, i);
    console.log(listt);
}
console.log(listt);


// 2. Write a function that inserts an element into a list only if the element to be inserted
// is smaller than any of the elements currently in the list.

function check2(listt, val){
    var out = true;
    for (var i = 0; i < listt.length; i++){
        if (val < listt[i]){
            out = true;;
        }
        else{
            out = false;
            return out;
        }
    }
    return out;
}

function add2(listt, val){
    if (check2(listt, val)){
        listt.push(val);
    }
    else {
            console.log("not lesser than!");
        }

}

var listt2 = [6,7,8,9,10];
for(var j = 10; j >= 0; --j){
    add2(listt2, j);
}
console.log("list 2: ", listt2);



// 3. Create a Person class that stores a person’s name and their gender. Create a list of
// at least 10 Person objects. Write a function that displays all the people in the list of
// the same gender.

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

var person_class = [];
var pers=0 ;

for(var i=0; i<10; i++) {
    if (i % 2 == 0) {
        gender = 'm';
    }
    else {
        gender = 'f';
    }
    pers = new Person(`${i}hamza`,gender)
    person_class.push(pers);
}
console.log(person_class)


function printout(person_class) {
for(var i=0; i<person_class.length; i++) {
    console.log("name: ", person_class[i].name, "____","Age: ",person_class[i].gender);

}
}

printout(person_class)

function gender_male(personn){
    if (personn.gender == 'm'){
        return true;
    }
    else {
        return false;
    }
}

function gender_female(personn){
    if (personn.gender == 'f'){
        return true;
    }
    else {
        return false;
    }
}
console.log("printing males...........")
var males = person_class.filter(gender_male);
printout(males);


console.log("printing females...........");
var females = person_class.filter(gender_female);
printout(females);


