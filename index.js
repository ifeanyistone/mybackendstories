// const arrs = ['tunde','bose','chinedu','peter']

// let numbers = [3,3,5,7,8,9,2,11]

// numbers.forEach((a,b)=> {

// })

// const ran = Math.random()

// if(ran < 2){
//     console.log('still number')7

//    } else{
//     console.log(Math.floor(ran*10000))
// }

//
   let arr1 = ["tea", "coffe", "lipton"]

//  let arr2  = ["tea", "coffe", "lipton", "pine"];

      const arr3 = ["tea", "coffe", "lipton"];
      const arr2 = [];

      let evenNumbers = [2, 4, 6, 8, 10];

      //reducer method
      const newValu = evenNumbers.reduce((acc, value)=>acc + value , 0)
      console.log(newValu)
    
      //    let ren =  evenNumbers.reduce((acc, val)=>  acc += val ,initial)
      //   console.log(ren)
      // console.log(evenNumbers.slice(2,4))
      // import { Axios } from "axios";
      // const express = require("express");
      // const mongoose = require("mongoose");

      // const app = express();

      // //routes
      // app.get("/", (req, res) => {
      //   res.send("hello API");
      // });

      // app.get("/about", (req, res) => {
      //   res.send("hey its about section");
      // });

      // app.get("/Contact", (req, res) => {
      //   res.send("Hey dont hesitate to reach us through our email");
      // });

      // mongoose
      //   .connect(
      //     "mongodb+srv://admin:admin123@cluster0.rpwjesx.mongodb.net/node-api?retryWrites=true&w=majority"
      //   )
      //   .then(() => {
      //     app.listen(3000, () => {
      //       console.log("Api is running on port 3000");
      //     });

      //     console.log("connected to a data base ");
      //   })
      //   .catch(() => {
      //     console.log("this is an error message");
      //   });

      
        //   fetch("http://localhost:3000")
        // .then((res) => res.json())
        // .then((data) => {
        //   console.log(data)
        // })

        // Axios.get("http://localhost:3000/about").then((res))=> {
        //   console.log(res.data)
        // }
       
   const os = require('os')

   const osVersion = os.version()
   console.log(osVersion)