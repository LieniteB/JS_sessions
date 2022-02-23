//Window - as an object and these are the comands for it:

this;


// let myObject = {
//     myFunction: function() {

//     }
// }
// alert("Here is the alert");
// this.alert ("Here is the alert");

//this is a keyword??  - look up!

let answer = this.confirm("Do you want to continue?");
console.log(answer);
let answer1 = this.prompt("How are you?", "Good!");
console.log(answer1);

//look up history
this.history.foward; //it shows the last page you went to and then go foward in the history. Like back and foward buttons

this.location.href; ///shows where we are, can show the pathway utml.
this.open("https://www.google.com");
let answer_page = this.prompt("Which page do your want to open?")
console.log(answer_page)
this.open("https://" + answer)

//math object functions:

Math.random();
Math.random() * 11;
Math.floor(Math.random() * 11) + 1;


//date object functions:
let d = new Date();
d.getFullYear();

this.alert("Today is " + d.getDate() + "." + d.getMonth() + "." + d.getFullYear())


//functions to strings:
let str = "myString";
str.replace("my", "your"); //replaces the string with a new one
str.replaceAll();
str.concat()
str.charAt(0); // get first character\
// str.charSt(str.length - 1)
str.indexOf("Str");


// Branching with if and else::

let age = this.prompt("How old are you?");
if (age >= 18) {
    this.alert("You can buy a glass of wine");
}
else {
    this.alert("You are not allowed to buy alcohol");
}


if (age < 18)
    this.alert("You are underage");
else if (age >= 18 && age < 21)
    this.alert("You caņt buy alcohol in USA")
else
    this.alert("Enjoy your wine");
