var projects = require('../projects.json');
var finalcheckout = require('../finalcheckout.json');
//var fs = require('fs');

var chickenbreast_track = 'pr';
var cookedentrees_track = 'pr';

if(chickenbreast_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Boneless Skinless Chicken Breasts",
				"imageURL": "./images/chickenbreast_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(cookedentrees_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Fully Cooked Entrees",
				"imageURL": "./images/cookedentrees_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 console.log(finalcheckout);

/*
 * GET home page.


function checkUser(user, pass){
	if((user == currentUser)){
		window.location.href='main';
	}else{
		alert("error");
	}
}
 */

exports.view = function(request, response){
  	response.render('index', projects);
};