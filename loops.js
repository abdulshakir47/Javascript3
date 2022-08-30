// const array = new Array(1,2,3,4,5)
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

const mystates =[
    "Karnataka",
    "Kerala",
    "Tamilnadu",
    1947,
    "Punjab",
    "delhi",
    "Assam"
]

// for (let i = 0; i < mystates.length; i++) {
//     const element = mystates[i];

//     if(typeof element === "string"){
//         continue;
//     }
//     console.log(element);

// }


// while loop and While loops


// var j = 0;
// while(j<mystates.length){
//     console.log(mystates[j]);
//     j++;
// }



// let k = 0;
// do {
//     console.log(mystates[k]);
//     k++;
// } while (k<mystates.length);
// let l = 0
// for(;;){
//     if(l > 3){
//         break;
        
//     }
//     console.log(l);
//         l++;
// }

// For Each Loops

// mystates.forEach(element => {
//     console.log(element);
// });

//mystates.forEach((e)=>console.log(e))

// ForIn and Forof Loops

// for(const n in mystates){
//     console.log(n);
// }

var user = {
    firstName: "Abdul",
    lastName: "Shakir",
    role:"admin",
    loginCount:32,
    googleSignedIn:true,
}

for(const m in user){
    console.log(`Key is ${m} User is ${user[m]}`);
}
