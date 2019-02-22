var finalcheckout = require('../finalcheckout.json');

    

 exports.view = function(request, response){
  	response.render('checkout', finalcheckout);
};