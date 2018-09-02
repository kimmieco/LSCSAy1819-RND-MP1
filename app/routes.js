//require express
var express = require('express');
var path = require('path');

//create router object
var router = express.Router();

//export router
module.exports = router;

//route for homepage
router.get('/', function(req, res){
	//res.send('hello hi');
	//res.sendFile(path.join(__dirname,'../index.html'));
	res.render('pages/index');

});

//route for aboutpage
router.get('/about', function(req, res){
	//res.send('hello aboutpage');
	res.render('pages/about');
});

router.get('/contact',function(req, res){
	res.render('pages/contact');
});
router.post('/contact',function(req, res){
});