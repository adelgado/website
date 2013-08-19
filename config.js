exports.mongo = { 
	getUrl : function(){
					var user   = 'website'
					var pass   = 'website'
					var schema = 'website'
					var host   = 'localhost'
					var port   = 27017
					return 'mongodb://' + user + ':' + pass + '@' + host + ':' + port + '/' + schema
				}
}
