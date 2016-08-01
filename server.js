var express = require('express');
app = express();
app.use(express.static(__dirname));
app.get("/",function(req,res){
	res.sendFile("index.html");
})

app.listen(5000,function(){
	console.log("server running localhost:5000");
})