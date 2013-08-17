var express     = require('express')
  , http        = require('http')
  , path        = require('path')
  , consolidate = require('consolidate')
  , routes      = require('./routes')
  , profile     = require('./routes/profile')

var app = express()

app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/views')
app.engine('html', consolidate.handlebars)
app.set('view engine', "html")
app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(express.cookieParser('your secret here'))
app.use(express.session())
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler())
}

app.get    ('/',            routes.index)

app.get    ('/profile/:id', profile.get)
app.get    ('/profiles',    profile.all)
app.post   ('/profiles',    profile.create)
app.put    ('/profiles',    profile.update)
app.delete ('/profiles',    profile.delete)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'))
})
