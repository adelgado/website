var mock = require('./mock').profile

exports.all = function(req, res){
  console.log(mock)
  console.log('passei')
  res.json(mock.all)
}

exports.delete = function(req,res){

}

exports.update = function(req,res){

}

exports.create = function(req,res){

}

exports.get = function(req,res){

}
