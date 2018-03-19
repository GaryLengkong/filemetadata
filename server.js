// server.js
// where your node app starts

// init project
const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('./public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

app.post('/', multer({dest: './uploads'}).single('file'), function (req, res) {
  res.json({
    size: req.file.size
  })
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
