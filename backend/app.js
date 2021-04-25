const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.send("you are on the home page of the app.");
});

app.listen("8000", () => {
	console.log("Listening on port 3000");
});
