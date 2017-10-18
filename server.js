const express = require('express');
const app =  express();

app.listen(process.env.PORT || 4000, function() {
  console.log("Server is listening at the port", process.env.PORT || 4000);
});

app.use('/', function(req, res){
	res.send("This is test screen");
	
});