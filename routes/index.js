var projects = require('../projects.json');


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