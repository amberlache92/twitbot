var Twit = require('twit');
var fs=require('fs');
var path = require('path');
var config = require('./config.js');
var T = new Twit(config);
console.log('bot is starting');


// FOLLOW-Reply BOT ===========================

// when someone follows
var stream= T.stream('user');
stream.on('tweet', followed);

// ...trigger the callback
function followed(event) {  
  console.log('Follow Event is running');
  //get their twitter handler (screen name)
  var
    name = event.source.name;
   // screenName = event.source.user.screen_name;
  // function that replies back to the user who followed
  tweetNow('@'  + ' Thank you for the follow up.');
}

// function definition to tweet back to user who followed
function tweetNow(tweetTxt) {  
  var tweet = {
      status: tweetTxt
  }
  T.post('statuses/update', tweet, function(err, data, response) {
    if(err){
     // console.log("Error in Replying");
      console.log(err);
    }
    else{
      console.log("Gratitude shown successfully");
    }
  });
}

// var stream= T.stream('user');
// stream.on('follow',function(tweet){
//  var screenName= tweet.user.screen_name;

// 	var reply='thanks @'+ screenName;
// 	var nameID= tweet.id_str;
   
// 	var tweets={
// 		status:reply,
// 		in_reply_to_status_id:nameID
// 	}
// 	console.log("someone followed me");
//     T.post('statuses/update', tweets,tweeted);


// });

//  function tweeted(err,data,reponse){
//       if(err){
//       	console.log('fail');
//       }
//       	else{
//       		console.log('pass');
//       	}
      
// }