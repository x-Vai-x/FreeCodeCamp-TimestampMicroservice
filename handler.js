const express=require('express')
const app = express()



app.get('/api/timestamp/:date_string?',function(req, res) {




 
 let date=new Date()

 if(req.params.date_string){
 	date=new Date((req.params.date_string))
 }

 if(date!="Invalid Date"){
 	const jsonDate = {"unix":date.getTime(), "utc":date.toUTCString()}

 	res.json(jsonDate)
 }else{
 	const invalidJson = {"error":"Invalid Date"}
 	res.json(invalidJson)

 }

 
})

app.listen(8080, function() {
	console.log("Listening on port 8080");
})
