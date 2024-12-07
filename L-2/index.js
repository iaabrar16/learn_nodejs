const fs = require('fs');
// fs.writeFile('demo1.txt', "My name is Aabrar", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Succesful")
//     }
// })

// fs.appendFile('demo1.txt', ". My age is 25", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Succesful")
//     }
// })

// fs.readFile('demo1.txt', "utf-8", (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data)
//     }
// })

// fs.rename('demo1.txt', "demo2.txt", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Succesful")
//     }
// })

fs.exists('demo2.txt', (result)=>{
    if(result){
        console.log("found");
    }else{
        console.log("not found")
    }
})