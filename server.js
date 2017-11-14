var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser= require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url='mongodb://localhost:27017/lifeline';
app.use(cors());
app.use(bodyParser.json());


var current_user={};

app.post('/store_location_in_db',function(req,res){

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = {lat:req.body.lati_pati,long:req.body.long_pati};
  db.collection("location_doctor").insertOne(myobj, function(err, response) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
    res.send({val:"stored_sucessfully"});
  });
});

})

app.post('/authorisation',function(req,res){

  var query = {user_name: req.body.doctor_id_frontend_value,pass:req.body.doctor_password_value };

 MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   db.collection("senior_doctor_registration").find(query).toArray(function(err, result) {
     if (err) throw err;
     console.log(result);
     db.close();

     if(result.length==1)
     {
       res.send({val:"login_sucess",login_credentials:result});
     }else {
       res.send({val:"login_failed"});
     }

   });
 });



})



app.post('/get_location_from_db',function(req,res){

  MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  db.collection("location_doctor").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);

    res.send({val:result});

    db.close();
  });

});




})




app.listen(4000);
