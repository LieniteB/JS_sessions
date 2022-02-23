// const arr = [];

// arr[0] = "This is the first element";
// arr[1] = "This is the second element";

// console.log(arr[0]);
// console.log(arr[1]);

// console.log("This arrat has " +arr.length + " elements");

// arr[arr.length] = "The last element";
// arr.push("Another element")
// arr[15] = 3232;
// // console.log(arr)

// const arr = [];
// while(true) {
//     let element = prompt("Enter the array element");
//     arr.push(element);
//     if(prompt("enterX to stop").toLowerCase() ==="x")
//         break;
// }
// arr.sort();
// for(let 1=0; i<arr.lenght; i++)
//     console.log(arr[1]);

// const arr = [212, "Str", true, { name: "janis", lastname: "Jaunzemnieks"}];
// console.log(arr.sort().reverse());
// console.log(arr.pop());
// console.log(arr.join());

// const arr1 = [3,5,7];
// const arr2 = [5,3,9];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);
// console.log(arr1 + arr2);

// console.log(arr3.indexOf(3));

// const arr = [];

// arr["key1"] = "value1";
// arr["key2"] = "value2";
// arr["key3"] = "value3";

// console.log(arr);
let times = parseInt(prompt("How many FizzBuzz numbers do you want?"));
let numbers = []
for (let count = 1; count <= times; count++){
    numbers[numbers.length] = count * 15
    
    console.log(count * 15); 
}
console.log(numbers)

document.getElementById("FizzBuzz").innerHTML = numbers;
