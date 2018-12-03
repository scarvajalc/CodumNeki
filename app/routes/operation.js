var operationController = require('../controllers/operationcontroller.js');
 
module.exports = function(app) {
 
    app.get('/deposit', isLoggedIn, operationController.renderDeposit);
    app.get('/withdraw', isLoggedIn, operationController.renderWithdraw);
    app.post('/deposit', isLoggedIn, operationController.deposit);
    app.post('/withdraw', isLoggedIn, operationController.withdraw);
    

    

    function isLoggedIn(req, res, next) {
    	if (req.isAuthenticated())
        	return next();
    	res.redirect('/signin');
	}
 


 
}
