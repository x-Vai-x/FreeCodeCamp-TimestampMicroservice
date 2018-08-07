const express=require('express')
const app = express()

console.log(new Date())

app.get('/api/timestamp/:date_string',function(req, res) {
 const date=new Date((req.params.date_string))
 const jsonDate = {"unix":date.getTime(), "utc":date.toUTCString()}
 res.json(jsonDate)
})

app.listen(8080, function() {
	console.log("Listening on port 8080");
})
