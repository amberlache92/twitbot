var fs = require('fs');
var twit = require('twit');
var path = require('path');
var config = require('./config.js');

// var express= require('express');
// var request=require('request');
// var cheerio= require('cheerio');

var TWITTER_SEARCH_PHRASE= "#bb19"
var T = new twit(config);

//streaming api

console.log('The bot is running...');
var stream= T.stream('statuses/filter', { follow: '312427406' })// our query
console.log("still runnging");
stream.on('tweet', function (tweet) {
	console.log(tweet.text);
	var tweets={
		status:tweet.text
	}
 T.post('statuses/update',tweets, Retweeted);
});


function Retweeted(err,data,reponse){
   if(err){
   	console.log('didnt work');


   }
   	else{

   		console.log('worked');
   	}
   
}
// bot.stream('statuses/filter',{track:'JokersBBUpdates'},
// 	function(stream){
// 		stream.on('data',function(tweet){
//              console.log("tweet");
// 		});
// 		stream.on('error',function(error){
// 			console.error(error);
// 		})
// 	});




	//rest api creates tweet
// function bigBrotherTweet(){
// bot.post('statuses/update', {status: 'big brother!'},  function(error, tweet, response){
//   if(error){
//     console.log(error);
//   }
//   console.log(tweet);  // Tweet body.
//   console.log(response);  // Raw response object.
// });
	

//}
// BotInit() : To initiate the bot 
//rest api to tweet recent from jokersupdates
// function BotInit() {
// 	bot.post('statuses/retweet/:id', { id: '669520341815836672' }, BotInitiated);
	
// 	function BotInitiated (error, data, response) {
// 		if (error) {
// 			console.log('Bot could not be initiated, : ' + error);
// 		}
// 		else {
//   			console.log('Bot initiated : 669520341815836672');
// 		}
// 	}
	
// 	BotRetweet();
// }

//  //BotRetweet() : To retweet the matching recent tweet 
// function BotRetweet() {

// 	var query = {
// 		from:"JokersBBUpdates",
// 		result_type: "recent"
// 	}

// 	bot.get('search/tweets', query, BotGotLatestTweet);

// 	function BotGotLatestTweet (error, data, response) {
// 		if (error) {
// 			console.log('Bot could not find latest tweet, : ' + error);
// 		}
// 		else {
// 			var id = {
// 				id : data.statuses[0].id_str
// 			}

// 			bot.post('statuses/retweet/:id', id, BotRetweeted);
			
// 			function BotRetweeted(error, response) {
// 				if (error) {
// 					console.log('Bot could not retweet, : ' + error);
// 				}
// 				else {
// 					console.log('Bot retweeted : ' + id.id);
// 				}
// 			}
// 		}
// 	}
	
// 	/* Set an interval of 30 minutes (in microsecondes) */
// 	setInterval(BotRetweet, 10000);

// }
//tweets random images
// /* Initiate the Bot */
// BotInit();
// var images=['bb1.jfif','bb2.jfif','bb3.jfif'];
// function randomImages(images){
	
// 	return images[Math.floor(Math.random() *3)];
// }
// function upload_random_image(){
// 	console.log("opening images");
// 	var image_path= path.join(__dirname,'/images/'+ randomImages(images)), b64content = fs.readFileSync(image_path, { encoding: 'base64' });
  

//   console.log('Uploading an image...');

//   T.post('media/upload', { media_data: b64content }, function (err, data, response) {
//   	console.log('here');
//     if (err){
//       console.log('ERROR');
//       console.log(err);
//     }
//     else{
//       console.log('Uploaded an image!');

//       T.post('statuses/update', {
//         media_ids: new Array(data.media_id_string)
//       },
//         function(err, data, response) {
//           if (err){
//             console.log('Error!');
//             console.log(err);
//           }
//           else{
//             console.log('Posted an image!');
//           }
//         }
//       );
//     }
//   });
// }

// setInterval(
//   upload_random_image,
//   10000
// );
