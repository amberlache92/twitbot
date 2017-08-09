//var fs = require('fs');
var twit = require('twit');
//var path = require('path');
var config = require('./config.js');
const translate = require('google-translate-api');


var T = new twit(config);





console.log('The bot is running...');

var stream= T.stream('user');
stream.on('tweet', followed);

// ...trigger the callback
function followed(tweet) {  
  console.log('Follow Event is running');
  //get their twitter handler (screen name)
  //tweeting when i tweet or someone tweets at me
  var
    name = tweet.user.name,
    screenName=tweet.user.screen_name,
    tweetText= tweet.text;
    if(screenName == 'ATwitbot12'){
           return;
    }
    var regexEx=/@\s*ATwitbot12/; //remove @Atwitbot12 that preceeds the tweet reply
    var newText=tweet.text.replace(regexEx, "\n");
       
    //translate tweet to french
        translate(newText, {from: 'en', to: 'fr'}).then(res => {
            console.log(res.text);
            tweetText= res.text;
            tweetNow( "@" + screenName + " "+tweetText);
            
    }).catch(err => { 
          console.error(err);
          tweetText= 'sorry dont know that word or phrase, check your spelling';
          tweetNow(tweetText);
          
    });
  
}

// function definition to tweet back to user who followed
function tweetNow(TweetTxt) {  
 
    var tweet = {
      status: TweetTxt
  }
  //

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

