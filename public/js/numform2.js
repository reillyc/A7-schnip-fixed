// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
	initNUMForm2();

 	//initLogin();
}


// init RSVP form submit listener


function initNUMForm2() {
  // add your code here
  $('#numForm2').submit(function(e) {
  	e.preventDefault();
  	console.log("submitting form..")
  	var numForm2 = $('#numForm2').val();
    alert("Phone number successfully connected to all associated reward cards!");
    


  
 $('#connect1').text("Connected to the highlighted stores above!");
   var image = document.getElementById('store2');
  image.src='images/rewardpressed.png';



  });

 

}


