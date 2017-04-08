var express = require("express");
var bodyParser = require('body-parser');
var git = require('simple-git')( workingDirPath );

var app = express();
app.use(bodyParser.json());

app.get("/", function  (req,res) {
	res.status(200).send("WARNING: There's a hooker here, eavesdropping on my repo. And pretty much nothing else.")
});

app.post("/git-hook", function (req, res) {
	console.log("A push was made to git, fetching changes...");

	function pullCallback (err, branch_summary) {
		if (!err) console.log("Git pull done: ", branch_summary);
		else console.log("Error in git pull: ", err);
	}

	git().pull('origin', 'master', pullCallback);

	res.status(200).send();
})

var port = 617;
app.listen(port, function() {
	console.log("Listening on " + port);
});
