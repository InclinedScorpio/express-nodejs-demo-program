const express = require("express");
const app = express();

app.get("/favicon.ico", (req, res) => {});

app.use((req, res, next) => {
	console.log("Middleware Called");
	next();
});

app.use("/users", (req, res) => {
	res.send("<h2>These are the users");
});

app.use("/", (req, res) => {
	res.send("<h1>This is the Home Page '/'</h1>");
});

app.listen(3000, "localhost", () => {
	console.log("Server started at port 3000");
});
