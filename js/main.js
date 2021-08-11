// //============ Exercise #1 ============//
// /*
// Write a function that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" 
// Expected output
// Given arr: ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// Output arr: ["even index","Baseball","even index","Goku","even index","Rodger"]
// */

// const testArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function repEvens(arr){
//     for (let i = 0; i <=arr.length; i+=2){
//         arr.splice(i, 1, 'even index');
//     }
//     console.log(arr)
//     newNames.splice(0,1, 'Brian');
// }
// console.log(repEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//============ Exercise #2 ============//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

const person = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Taco Bell",
    burgers:"Shake Shack",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Shamrock Shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let favFood = (person1) => {
    for(let i=0; i<Object.keys(person1).length; i++){
        console.log(Object.keys(person1)[i])
        console.log(Object.values(person1)[i])
    }
}
console.log(favFood(person1))
