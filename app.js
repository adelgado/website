//requires
var express     = require('express')
var http        = require('http')
var path        = require('path')
var consolidate = require('consolidate')
var config      = require('./config')

//routes
var profile     = require('./routes/profile')
var topic       = require('./routes/topic')
var home        = require('./routes/home').home

//mangoose
var mongoose    = require('mongoose').connect(config.mongo.getUrl())

mongoose.connection.on('error',  function(){ console.log('error on mongodb')})
mongoose.connection.once('open', function(){ console.log('connection open on mongodb') })

var app = express()

app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/views')
app.engine('html', consolidate.handlebars)
app.set('view engine', 'html')
app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(express.cookieParser('your secret here'))
app.use(express.session())
app.use(app.router)
app.use('/assets', express.static(__dirname + '/assets'))

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler())
}

app.get    ('/',                home)

app.get    ('/api/profiles',    profile.all)
app.get    ('/api/profile/:id', profile.get)
app.post   ('/api/profile',     profile.create)
app.put    ('/api/profile',     profile.update)
app.delete ('/api/profile',     profile.delete)

app.get    ('/api/topics',      topic.all)
app.get    ('/api/topic/:id',   topic.get)
app.post   ('/api/topic',       topic.create)
app.put    ('/api/topic',       topic.update)
app.delete ('/api/topic',       topic.delete)

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})
