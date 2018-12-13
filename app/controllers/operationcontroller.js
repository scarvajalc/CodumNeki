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
	var amount = parseInt(req.body.amount);
	var userid = req.user.id;

	if(amount < 0){
		res.render('deposit',
		{
			operationoperationTitle:'Depositar Dinero',
			operation: 'deposit',
			bname: 'Depositar',
			message: 'No se puede depositar una cantidad Negativa'
		});
	}

	else {
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
						message: 'Se ha depositado el dinero correctamente'
					});
			  })
		});
	}
}

exports.withdraw = function(req, res){
	var amount = parseInt(req.body.amount);
	var userid = req.user.id;

	Account.findAll({
	  where: {
	    userId: userid
	  }
	}).then(user =>{
		var balance = user[0].get('balance');
		if(balance >= amount){
			Account.update(
			  { balance: balance - amount },
			  { where: { userId: userid } }
			)
			  .then(result =>{
			  	res.render('deposit',
					{
						operationTitle:'Retirar Dinero',
						operation: 'withdraw',
						bname: 'Retirar',
						message: 'Se ha retirado el dinero correctamente'
					}
				);
			  }

			  )
		} else {
			res.render('deposit',
					{
						operationTitle:'Retirar Dinero',
						operation: 'withdraw',
						bname: 'Retirar',
						message: 'Fondos insuficientes'
					}
				);
		}

	});
}
