var projects = require('../projects.json');

/*
var finalcheckout = require('../finalcheckout.json');

var newcoupon = 
			{
				"product": "Alaska CoD Fillet", 
				"imageURL": "./images/alaska_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);

var newcoupon = 
			{
				"product": "Alaska CoD Fillet", 
				"imageURL": "./images/alaska_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);



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