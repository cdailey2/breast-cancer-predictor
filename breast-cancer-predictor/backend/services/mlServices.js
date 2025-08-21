const fetch = require('node-fetch');

const BASE_URL = 'http://127.0.0.1:53947';

// Posts data for artificial neural network
async function sendDataToANN(data) {
    try {
        const response = await fetch(`${BASE_URL}/artificial-neural-network`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
    
        if (!response.ok) {
          throw new Error(`Flask API returned status ${response.status}`);
        }
    
        return response.json(); // Return Flask API response
    } 
    catch (error) {
        console.error('Error communicating with Flask API:', error.message);
        throw error;
    }
}

// Posts data for random forest
async function sendDataToRF(data) {
  try {
      const response = await fetch(`${BASE_URL}/random-forest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`Flask API returned status ${response.status}`);
      }
  
      return response.json(); // Return Flask API response
  } 
  catch (error) {
      console.error('Error communicating with Flask API:', error.message);
      throw error;
  }
}

module.exports = { 
    sendDataToANN,
    sendDataToRF
};