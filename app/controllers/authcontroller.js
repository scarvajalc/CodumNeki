var exports = module.exports = {}

var models = require("./../models");
var Account = models.account;
var Mattress = models.mattress;
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.dashboard = function(req, res) {
	var userid = req.user.id;
	Account.findAll({
	  where: {
	    userId: userid
	  }
	}).then(account => {
		Mattress.findAll({
		  where: {
		    userId: userid
		  }
		}).then(mattress => {
	  		
	  		res.render('dashboard', 
	  			{
	  				user: req.user.firstname, 
	  				accBalance: account[0].get("balance"), 
	  				matBalance: mattress[0].get("balance")});
		});

	});

    
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}