var exports = module.exports = {}

var models = require("./../models");
var Account = models.account;
var Mattress = models.mattress;

exports.renderDeposit = function(req, res){
	res.render('deposit',
		{
			operationoperationTitle:'Depositar Dinero',
			operation: 'deposit',
			bname: 'Depositar'
		}
	);
}

exports.renderWithdraw = function(req, res){
	res.render('deposit',
		{
			operationTitle:'Retirar Dinero',
			operation: 'withdraw',
			bname: 'Retirar'
		}
	);
}

exports.deposit = function(req, res){
	var amount = req.body.amount;
	var userid = req.user.id;

	Account.findAll({
	  where: {
	    userId: userid
	  }
	}).then(user =>{
		Account.update(
		  { balance: user[0].get('balance') + amount },
		  { where: { userId: userid } }
		)
		  .then(result =>{
		  	res.render('deposit',
				{
					operationoperationTitle:'Depositar Dinero',
					operation: 'deposit',
					bname: 'Depositar',
					message: 'Se ha depoitado el dinero correctamente'
				}
			);
		  }
		    
		  )
		  
	});
	
	                
}
 
exports.withdraw = function(req, res){
	var amount = req.body.amount;
	console.log(amount);
	                
}
/*exports.dashboard = function(req, res) {
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

    
 
}*/
