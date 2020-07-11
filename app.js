const express = require("express");
const app = express();

app.use((req, res, next) => {
	console.log("1st Middleware Reached.. Next() called...");
	next();
});

app.use((req, res) => {
	console.log("2nd Middleware Reached.. Next() called...");
	res.send("<h1>Last Middleware Reached</h1>");
});

app.listen(3000, "localhost", () => {
	console.log("Server started at port 3000");
});
