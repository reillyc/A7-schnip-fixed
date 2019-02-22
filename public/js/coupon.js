'use strict';
var finalcheckout = require('../finalcheckout.json');

var alaska_track = 'un';
var baconwrapped_track = 'un';
var breadedchicken_track = 'un';
var buddinglunch_track = 'un';
var chickenbreast_track = 'un';
var cookedentrees_track = 'un';
var cornishhens_track = 'un';
var fillet_track = 'un';
var flatiron_track = 'un';
var grassbeef_track = 'un';


function alaskaChange(){
	var image = document.getElementById('alaska');
	
	if(alaska_track=='un'){
		image.src='images/alaska_pressed.png';
		alaska_track='pr';	

	}else{
		image.src='images/alaska_unpressed.png';
		alaska_track='un';
	}
 }

function baconwrappedChange(){
	var image = document.getElementById('baconwrapped');
	
	if(baconwrapped_track=='un'){
		image.src='images/baconwrapped_pressed.png';
		baconwrapped_track='pr';

	}else{
		image.src='images/baconwrapped_unpressed.png';
		baconwrapped_track='un';
	}
 }

 function breadedchickenChange(){
	var image = document.getElementById('breadedchicken');
	
	if(breadedchicken_track=='un'){
		image.src='images/breadedchicken_pressed.png';
		breadedchicken_track='pr';

	}else{
		image.src='images/breadedchicken_unpressed.png';
		breadedchicken_track='un';
	}
 }

 function buddinglunchChange(){
	var image = document.getElementById('buddinglunch');
	
	if(buddinglunch_track=='un'){
		image.src='images/buddinglunch_pressed.png';
		buddinglunch_track='pr';

	}else{
		image.src='images/buddinglunch_unpressed.png';
		buddinglunch_track='un';
	}
 }

 function chickenbreastChange(){
	var image = document.getElementById('chickenbreast');
	
	if(chickenbreast_track=='un'){
		image.src='images/chickenbreast_pressed.png';
		chickenbreast_track='pr';

	}else{
		image.src='images/chickenbreast_unpressed.png';
		chickenbreast_track='un';
	}
 }

 function cookedentreesChange(){
	var image = document.getElementById('cookedentrees');
	
	if(cookedentrees_track=='un'){
		image.src='images/cookedentrees_pressed.png';
		cookedentrees_track='pr';

	}else{
		image.src='images/cookedentrees_unpressed.png';
		cookedentrees_track='un';
	}
 }

function cornishhensChange(){
	var image = document.getElementById('cornishhens');
	
	if(cornishhens_track=='un'){
		image.src='images/cornishhens_pressed.png';
		cornishhens_track='pr';

	}else{
		image.src='images/cornishhens_unpressed.png';
		cornishhens_track='un';
	}
 }

 function filletChange(){
	var image = document.getElementById('fillet');
	
	if(fillet_track=='un'){
		image.src='images/fillet_pressed.png';
		fillet_track='pr';

	}else{
		image.src='images/fillet_unpressed.png';
		fillet_track='un';
	}
 }

 function flatironChange(){
	var image = document.getElementById('flatiron');
	
	if(flatiron_track=='un'){
		image.src='images/flatiron_pressed.png';
		flatiron_track='pr';

	}else{
		image.src='images/flatiron_unpressed.png';
		flatiron_track='un';
	}
 }

 function grassbeefChange(){
	var image = document.getElementById('grassbeef');
	
	if(grassbeef_track=='un'){
		image.src='images/grassbeef_pressed.png';
		grassbeef_track='pr';

	}else{
		image.src='images/grassbeef_unpressed.png';
		grassbeef_track='un';
	}
 }

function checkout(){
	console.log("ran");
	if(alaska_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Alaska CoD Fillet", 
				"imageURL": "./images/alaska_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);
 	}
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
 	if(cornishhens_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Cornish Game Hens",
				"imageURL": "./images/cornishhens_bar.png"	
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(baconwrapped_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Bacon Wrapped Hot Dogs",
				"imageURL": "./images/baconwrapped_bar.png"	
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(breadedchicken_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Breaded Chicken Selections",
				"imageURL": "./images/breadedchicken_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(buddinglunch_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Budding Lunchmeat",
				"imageURL": "./images/buddinglunch_bar.png"	
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(fillet_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Fresh Dover Sole",
				"imageURL": "./images/fillet_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(flatiron_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Flat Iron Flank",
				"imageURL": "./images/flatiron_bar.png"	
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	if(grassbeef_track == 'pr'){
 		var newcoupon = 
			{
				"product": "Grass Fed Beef",
				"imageURL": "./images/grassbeef_bar.png"
			}
			finalcheckout.coupons.push(newcoupon);
 	}
 	console.log(alaska_track);
 	console.log(finalcheckout);
 	window.location.href="checkout";
}

/*
 
 var heart_track = 'un';
 var guac_track = 'un';
 var gran_track = 'un';
 var pizza_track = 'un';
 var spam_track = 'un';

function heartChange(){
	var image = document.getElementById('heart');
	
	if(heart_track=='un'){
		image.src='images/sheart_pressed.jpg';
		heart_track='pr';
	}else{
		image.src='images/sheart_unpressed.jpg';
		heart_track='un';
	}
 }

 function alaskaChange(){
	var image = document.getElementById('alaska');
	
	if(alaska_track=='un'){
		image.src='images/alaska_pressed.jpg';
		alaska_track='pr';

	}else{
		image.src='images/alaska_unpressed.jpg';
		alaska_track='un';
	}
 }

 function guacChange(){
	var image = document.getElementById('guac');
	
	if(guac_track=='un'){
		image.src='images/guac_pressed.jpg';
		guac_track='pr';
	}else{
		image.src='images/guac_unpressed.jpg';
		guac_track='un';
	}
 }
 
  function granChange(){
	var image = document.getElementById('gran');
	
	if(gran_track=='un'){
		image.src='images/gran_pressed.jpg';
		gran_track='pr';
	}else{
		image.src='images/gran_unpressed.jpg';
		gran_track='un';
	}
 }
 
  function pizzaChange(){
	var image = document.getElementById('pizza');
	
	if(pizza_track=='un'){
		image.src='images/pizza_pressed.jpg';
		pizza_track='pr';
	}else{
		image.src='images/pizza_unpressed.jpg';
		pizza_track='un';
	}
 }
 
  function spamChange(){
	var image = document.getElementById('spam');
	
	if(spam_track=='un'){
		image.src='images/spam_pressed.jpg';
		spam_track='pr';
	}else{
		image.src='images/spam_unpressed.jpg';
		spam_track='un';
	}
 }

 */