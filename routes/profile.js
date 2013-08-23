var mock = require('./mock').profile

exports.all = function(req, res){
	res.json(mock.all)
}

exports.delete = function(req,res){
	var id = req.params.id
	res.json(mock.delete)
}

exports.update = function(req,res){
	var id = req.params.id
	res.json(mock.update)
}

exports.create = function(req,res){
	res.json(mock.create, 201)
}

exports.get = function(req,res){
	var id = req.params.id
	res.json(mock.get)
}
