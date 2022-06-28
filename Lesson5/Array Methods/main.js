// .find()
//.findindex()
//.findOf()
// .filter()
// .map()
// .some()
// .every()
// .reduce()
// .startWith()
// .endWith()



// find()
let arr = [
{ad:"havva",lname:"eliyeva",age:24, id:"3", address:"balaken"},
{ad:"matanat",lname:"veliyeva",age:22, id:"5", address:"balaken"},
{ad:"ayla",lname:"eeliyeva",age:25, id:"5", address:"balaken"}
]
console.log(arr);
let result = null;

// result = arr.find(item => item.id =="5")



// 2-ci usul eger cox kod yazilacaqsa
// result = arr.find(item =>{
//     return (item.id =="5" && item.age ==25 && item.ad =="ayla")
// })
// console.log(result)



//.indexof()
// let arr1 = [ "metanet", "havva", 5,"9"]
// result = arr1.indexOf("havv")
// result = arr1.indexOf("havva" ,2)
// console.log(result)



//.filter()

// result = arr.filter(item =>{
//     return (item.id =="9")
// })
// console.log(result)



//.map()

// result = arr.map(item =>{
//     return (item.id)
// })


result = arr.map(item =>{
    return {
     istifadeciIdsi: item.id,
        
    }
})
console.log(result)