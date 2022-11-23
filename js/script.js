// const generateArray = array => {
//     for (var i = 0; i < 20; i++) {
//         array.push(Math.floor(Math.random()*100))
//     }
//     console.log(array);
// }

// var arr=[]
// generateArray(arr)





//foreach()
//map()
//filter()
//find()
//reduce()
//findIndex()


// arr.forEach((item)=>console.log(item))


// var arr2=[1,2,3,4,5,6,7,8,9]

// arr2.forEach((item)=>item % 2===0 && console.log(item))




const arr2 = [
    {
        id:1,
      name:"Alex",
      age: 15
    },
    {
        id:2,
      name:"Alisa",
      age: 20
    },
    {
        id:3,
      name:"Frank",
      age: 35
    },
    {
        id:4,
      name:"Taje",
      age: 15
    },
  ];



//   const newArray = arr2.map(item =>{
//     if (item.age>18) {
//         item.name="Ali"
//         return item
//     }else{
//         return item
//     }
//   })
//   console.log(newArray);


// const newArray=arr2.map(item=>{
//     return{...item,isDiplom:true}
// })
// console.log(newArray);


// const name=prompt("name")
// const newArray=arr2.filter(item=>item.name===name && item)
// console.log(newArray);




// const newArray=arr2.find(item=>item.id===2 && item.age===20 && item)
// console.log(newArray);



