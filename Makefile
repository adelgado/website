dev:
	coffee --watch --compile --bare assets/ &
	nodemon app.js
