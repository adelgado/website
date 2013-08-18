var express     = require('express')
  , http        = require('http')
  , path        = require('path')
  , consolidate = require('consolidate')
  , profile     = require('./routes/profile')
  , home        = require('./routes/home')

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

app.get    ('/api/profile/:id', profile.get)
app.get    ('/api/profiles',    profile.all)
app.post   ('/api/profiles',    profile.create)
app.put    ('/api/profiles',    profile.update)
app.delete ('/api/profiles',    profile.delete)

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})
