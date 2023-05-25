#!/usr/bin/node

//linked list

function node(element) {
    this.element = element;
    this.next = null;
}


function LList() {
    this.head = new node("head");
    this.find = find;
    this.length = 0;
    this.findPrev = findPrev;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.reverse = reverse;

}



function find(item) {

    var currNode = this.head;

    while (!(currNode.element == item)) {
        currNode = currNode.next;
    }
    return currNode;
}

function reverse(){
    var currNode = this.head;
    var nextNode = null;
    var prevNode = null;
    while (!(currNode == null)){
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    this.head = prevNode;
}

function findPrev(item) {

    var prevNode = this.head;
    while (!(prevNode.next.element == item)) {
        prevNode = prevNode.next;
    }
    return prevNode;
}


function insert(newElement, item) {
    var currNode = this.find(item);
    var newNode = new node(newElement)
    newNode.next = currNode.next;
    currNode.next = newNode;
    this.length++;

}


function remove(item) {
    var prevNode = this.findPrev(item);
    var currNode = this.find(item);
    var newNode = new node(item);
    prevNode.next = currNode.next;
    this.length--;

}


function display() {
    var disnode = this.head;
    while (!(disnode == null)) {
        console.log(disnode.element);
        disnode = disnode.next;
    }
}



// var cities = new LList();
// cities.insert("Conway", "head");
// cities.insert("Russellville", "Conway");
// cities.insert("Carlisle", "Russellville");
// cities.insert("Alma", "Carlisle");
// cities.insert("zalense","Alma");
// cities.insert("graylma", "zalense");
// cities.display();
// console.log("   ");
// console.log(cities.length)
// console.log("reversing .........")
// cities.reverse();
// cities.display();




//double linked list

function dnode(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}


function DLList() {
    this.head = new dnode("head");
    this.find = find;
    this.display = display;
    this.insert = insert;
    this.remove = remove;
    this.dispReverse = dispReverse;
    this.findlast = findlast;
    this.reverse = reverse;
}


function find(item) {
    var currNode = this.head
    while (!(currNode.element == item)) {
        currNode = currNode.next;
    }
    return currNode;
}


function reverse(){
    var currNode = this.head;
    var prevNode = null;
    var nextNode = null;
    while(!(currNode == null)){
        nextNode = currNode.next;
        currNode.next = prevNode;
        currNode.prev = nextNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    this.head = prevNode;
}

function insert(newElement, item) {
    var currNode = this.find(item);
    var newNode = new dnode(newElement);
    newNode.next = currNode.next;
    // currNode.next.prev = newNode;
    newNode.prev = currNode;
    currNode.next = newNode;
}



function remove(item) {
    var currNode = this.find(item);
    currNode.prev.next = currNode.next;
    currNode.next.prev = currNode.prev;
}


function display() {
    var currNode = this.head;
    while (!(currNode == null)) {
        console.log(currNode.element);
        currNode = currNode.next;
    }
}



function findlast(){
    currNode = this.head;

    while(!(currNode.next == null)){
        currNode = currNode.next;
    }
    return currNode;
}



function dispReverse(){
    var currNode = this.findlast();
    while(!(currNode.prev == null)){
        console.log(currNode.element);
        currNode = currNode.prev;
    }
}


var cities = new DLList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.insert("zalense","Alma");
cities.insert("graylma", "zalense");
cities.display();
console.log(" ");
console.log("\nprinting iin reverse orde\n...............");
cities.dispReverse();
console.log("  ");
console.log("reversing the elments...........");
cities.reverse();
cities.display();
console.log("   after reverse")
cities.dispReverse();

