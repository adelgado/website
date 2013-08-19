setup:
	npm install
	cd assets && bower install

dev:
	coffee --watch --compile --bare assets/ &
	nodemon app.js
