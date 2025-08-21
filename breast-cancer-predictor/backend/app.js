const express = require('express');
// const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwtController = require('./controllers/jwtController.js');

const mlController = require('./controllers/mlController');


const app = express();
//Replace with your personal port number
const port = 9005;

// app.use(session(sessionService.getSessionOptions()));
app.use(bodyParser.json());
app.use(cors());


app.use('/api/example',jwtController.verifyTokenAPI);

app.get('/api/example',jwtController.exampleAPICall);
app.post('/authenticate',jwtController.authenticateWithJWTAPI);

app.post('/artificial-neural-network',mlController.annPrediction);
app.post('/random-forest',mlController.rfPrediction);

app.listen(port,() => {
   console.log("Server is running on port " + port);
})


