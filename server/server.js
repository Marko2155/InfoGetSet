const express = require("express")
const parser = require("body-parser")
const path = require("path")
const fs = require("fs")
const port = 80
const app = express()
app.use(parser.json())

let info = JSON.parse(fs.readFileSync("info.json"))

function writeToDatabase(json, file, db) {
	db.push(json)
	fs.writeFileSync(file)
}

function dirpath(fileordir) {
	return path.join(__dirname, fileordir)
}

app.get('/', function(req, res) {
	res.sendFile(dirpath("index.html"))
})

app.post('/set', function(req, res) {
	
})

app.get('/get', function(req, res) {
	const { domain } = req.body;
	info.forEach(function(data, index) {
		if (data.domain == domain) {
			res.send(data.info)
		}
	})
})

app.listen(port, function() {
	console.log(`${port}`)
})
