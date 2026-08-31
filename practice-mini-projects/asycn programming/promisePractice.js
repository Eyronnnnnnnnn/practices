

const numbers = new Promise((resolve,reject)=>{
       const num = 50;
    if(num >= 50){
        resolve("You Passed");
    }else{
        reject("you dont passed");
    }

})

numbers 

.then((result)=>{
    console.log(result);
})

.catch((error)=>{
    console.log(error);
})