const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to TechRank!");
});

// Export the app as a Firebase Cloud Function
exports.app = functions.https.onRequest(app);
