const request = require ('request')


const forecast=(latitude,longtitude, callback)=>{
    const url = "https://api.weatherapi.com/v1/current.json?key=1d502c644d834e79bb1144056231005%20&q=" + latitude +","+ longtitude
    request ({url ,json:true} , (error,Response)=>{
        if(error){
            callback ("Unable to connect weather service" , undefined)
        }
        else if(Response.body.error){
            callback(Response.body.error.message, undefined)
        }
        else{
            callback (undefined, Response.body.location.name + ' It is '+Response.body.current.condition.text + "And Temp  " + Response.body.current.temp_c)
        }
    } )
    }
module.exports = forecast