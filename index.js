

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
        

        // const head = document.querySelector('h4')
        // const page = document.querySelector('.pages')
        //   page.style.color = 'red';
    
        //   head.style.color = "green";

        // document.getElementById('convert').addEventListener('submit',function(e){
        //     e.preventDefault();

        //     let val = document.getElementById('name').value
            
        //     if(val < 10 ){

        //         console.log("NaN")
        //     }else{

        //         document.getElementById('ans').innerHTML = val;
                
               
                
        //         // console.log('a number')
        //     }
        //     val.value = ""
        // })
       
        

 
        //    let arr1 = ["tea", "coffe", "lipton"]

        //  let arr2  = ["tea", "coffe", "lipton", "pine"];  

         const arr3 = ["tea", "coffe", "lipton"]  
         const arr2 = ["tea", "coffe", "lipton", "pine"]

                 let evenNumbers = [2, 4, 6, 8, 10]; 
          //    let ren =  evenNumbers.reduce((acc, val)=>  acc += val ,initial)
          //   console.log(ren)
            // console.log(evenNumbers.slice(2,4))


       // import mongoose from 'mongoose';
        const mongoose = require('mongoose')

         const express = require('express')
         const app = express()
          
         //routes 
         app.get('/', (req, res)=>{
          res.send("hello API")
         })
         
         app.get('/about', (req, res)=>{
          res.send('hey its about section')
         })

         app.get('/home',(req,res)=>{
          res.send('hey bro its the home page')
         })

        

         mongoose.connect('mongodb+srv://admin:admin123@cluster0.rpwjesx.mongodb.net/node-api?retryWrites=true&w=majority')
         .then(()=>{

           app.listen(3000, ()=>{
          console.log("Api is running on port 3000")
         })

          console.log("connected to data base mongodb")
         })
         .catch(()=>{
         console.log("this is an error message")})
       
