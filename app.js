const request= require ('request')
const forecast= require ("./Task2-node.js/forecast")
const geocode=require('./Task2-node.js/geocode')



const country =process.argv[2]
geocode(country,(error,data)=>{
    console.log("ERROR :", error)
    console.log("DATA  :", data)
if(data){
    forecast(data.latitude , data.longtitude ,( error , data )=>{
        console.log("ERROR :", error)
       console.log("DATA  :", data)
   })
}else{
    console.log("Data Entered have and Error")
}
})