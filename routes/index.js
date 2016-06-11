var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/***********************************************
* Template for new routes                      *
*router.get('/routeName', functionName);       *
*router.post('/routeName', functionName);      *
* when you have both post and get              *
*router.use('/routeName', functionName);       *
***********************************************/
router.get('/test',function(req,res){
  console.log("dafdsf");
  res.sendStatus(200);
});
//UTILIZA POST CHUY
router.post('/test',function(req,res){
  //req.body.VARIABLE es la variable que te mando
  //obviamente en vez de VARIABLE ponle el nombre que quieras y dime que nombre es para mandarlo asi
  //LO QUE TE MANDO ES UN ARREGLO DE ANGULOS
  //BASICAMENTE ES VAR[0].angle1, VAR[0].angle2, VAR[0].angle3
  //ESTOS SON LOS ANGULOS DEL PRIMER PUNTO, Y LUEGO VAR[1].angle1 etc. son el punto dos
  console.log("i got to the test");
  res.sendStatus(200);
});
module.exports = router;
