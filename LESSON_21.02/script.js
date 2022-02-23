// let a = Number.parseInt(prompt("Enter the value"));

// if (a<10)
//     console.log("the value is less than 10")
// else if (a>=10 && a <= 20)
//     console.log("The value is between 10 and 20")
// else console.log("The value is greater than 10")


// val = cond ? val_1 : val_2


// let absVal = a>= 0 ? a : (-1) * a;
// console.log(absVal)

// let age = parseInt(prompt.("Enter your age:"))

// let retMessage = age >= 18 ? "You can but beer" : "You are underage";
// console.log(retMessage);


// for (let i = 0; i<5; i++) {
//     alert(i)
// }

// let sum = 0;
// for (let i=0; i < 501; i++)
//     sum +=i;
// console.log("Summa ir:" + sum)


// let noIterations = parseInt(prompt("Enter the number of intereations"));
// let startElement = parseInt(prompt("Enter the starting element"));

// for (let i=startElement; i<noIterations; i++){
//     console.log("Iteration " + 1);
// }

// let sum = 0;
// for {;;} {
//     sum++;
//     console.log(sum)
//     let finish = prompt("Enter X to finish").toUpperCase();
//     if (finish === ""X")
//         break;
// }

// let sum = 0;
// while (prompt("Enter X to finish").toUpperCase() !== "X"){
//     sum++;
//     console.log(sum);
// }

// let sum = 0;
// do {
//     sum++;
//     console.log(sum);

// }while (prompt("Enter X to finish").toUpperCase() !== "X");


for (let i = 1; i < 100 ; i++) {
    if (i%3==0 && i%5==0) {
        console.log("Fizz Buzz")
    }
    else if (i%5==0) {
        console.log("Buzz")
    }
    else if (i%3==0) {
        console.log("Fizz")
    }
    else console.log(i)
}

// for (let i = 1; i < 100 ; i++){
//     switch (i){
//         case (i%3==0 && i%5==0):
//             console.log("Fizz Buzz");
//             break;
//         case (i%5==0):
//             console.log("Buzz");
//             break;
//         case (i%3==0):
//             console.log("Fizz");
//             break;
//         default:
//             console.log(i);
//     }}