#!/usr/bin/node

function stack(){
    this.datastore = [];
    this.top = 0;
    this.pop = pop;
    this.push = push;
    this.peek = peek;
}

function push(element){
    this.datastore[this.top++]= element;
}

function pop(){
    return this.datastore[--this.top];
}

function peek(){
    console.log(this.datastore[this.top-1]);
}

var stackk = new stack();

stackk.push(4);
stackk.push(5);
stackk.push(6);
stackk.peek();
console.log(stackk.top);
console.log(stackk.pop());
console.log(stackk.pop());
console.log("this is the top: ", stackk.top);

// checking for palindrome using stack

var palindromes = ["A man, a plan, a canal: Panama", "mum", "dad", "racecar" ];

function isPalindrome(str){

    var new_stack = new stack();

    for(var i = 0; i < str.split("").length; i++){
        new_stack.push(str.split("")[i]);
    }

    var rpal = "";

    while(new_stack.top > 0) {
        rpal += new_stack.pop();

    }

    if (rpal === str) {
        return true;
    }

    else {
        return false;

    }

}

for (var i = 0; i< palindromes.length; i++) {
    console.log(isPalindrome(palindromes[i]));
}
