async function processArtificialNeuralNetwork() {
    let inputs = getInputs();
    console.log(inputs);
    let annResponse = await callArtificialNeuralNetwork(inputs);
    console.log(annResponse)
    let mappedResponse = annResponse.prediction[0];
    console.log("Prediction: " + mappedResponse);
    diagnosisToHTML(mappedResponse);
}

async function processRandomForest() {
    let inputs = getInputs();
    console.log(inputs);
    let rfResponse = await callRandomForest(inputs);
    console.log(rfResponse);
    let mappedResponse = rfResponse.prediction[0];
    console.log("Prediction: " + mappedResponse);
}

function getInputs() {
    const inputs = document.querySelectorAll('#cancer-form input');

    // Create an object to store input values
    let inputData = {};

    // Loop through each input field and store its value in the inputData object
    inputs.forEach(input => {
        inputData[input.name] = input.value;
    });

    return inputData; 
}

async function callArtificialNeuralNetwork(inputData) {
    let annResponse = await makeAPICall("http://localhost:9005/artificial-neural-network", "post", undefined, inputData);
    return annResponse;
}

async function callRandomForest(inputData) {
    let rfResponse = await makeAPICall("http://localhost:9005/random-forest", "post", undefined, inputData);
    return rfResponse;
}

function diagnosisToHTML(mappedResponse) {
    let targetElement = document.getElementById("diagnosis");
    let capitalizedResponse = mappedResponse.charAt(0).toUpperCase() + mappedResponse.slice(1);
    targetElement.innerHTML = capitalizedResponse;
    setColorRed(mappedResponse, targetElement);
}

function setColorRed(mappedResponse, targetElement) {
    if(mappedResponse === 'malignant') {
        targetElement.style.color = "red";
    }
    else {
        targetElement.style.color = "black";
    }
}