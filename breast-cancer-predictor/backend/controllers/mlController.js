const mlService = require("../services/mlServices");

async function annPrediction(req, res) {
    let data = req.body;

    let prediction = await mlService.sendDataToANN(data);

    res.json(prediction);
}

async function rfPrediction(req, res) {
    let data = req.body;

    let prediction = await mlService.sendDataToRF(data);

    res.json(prediction);
}

module.exports = {
    annPrediction,
    rfPrediction
}