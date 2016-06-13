var face = require('fb');
var mongoose = require('mongoose');
var Promise = require('promise');


var access_token = new Promise(function(fulfill,reject){
  face.api('oauth/access_token',{
    //this is to be added from the request object in the future
    //client_id: req.body.id;
    client_id: '214452038941667',
    //client_secret: req.body.secret;
    client_secret: '2f20bd63078928880bbcd123a349923d',
    //this should be changed, but im not sure to what for now
    grant_type: 'client_credentials'}, function(res){
      if(!res || res.error){
        console.log(!res ? 'error occurred' : res.error);
        reject(res.error);
      }
      else {
        console.log("i gots here");
        console.log(res.access_token);
        fulfill(res.access_token);
      }
    });
});


var facebook = setInterval(function(){
  access_token.then(function(value){
    face.setAccessToken(value);
    face.api('https://www.facebook.com/testapi7/','get',{"fields":"link,name,fan_count,checkins,new_like_count"},function(res){
      if(!res || res.error){
        console.log(!res ? 'error occurred' : res.error);
        return;
      }
      else {
        //for testing im just gonna print the info and see if it works
        console.log("id:");
        console.log(res.id);
        console.log("name:");
        console.log(res.name);
        console.log("fan count:");
        console.log(res.fan_count);
        console.log("checkins:");
        console.log(res.checkins);
        console.log("link:");
        console.log(res.link);
      }
    });
  });
},10000); //this is 5 minutes 300000

module.exports = facebook;
