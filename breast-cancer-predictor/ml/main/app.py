from flask import Flask, request, jsonify
from artificial_neural_network import process_data as ann_process_data
from random_forest import process_data as rf_process_data

app = Flask(__name__)

@app.route("/artificial-neural-network", methods=["POST"])
def artificial_neural_network_route():
    data = request.json  # Receive JSON data
    print(f"Received from Node.js: {data}")

    # Use the correct imported function
    processed_data = ann_process_data(data)

    return jsonify({"prediction": processed_data.tolist()})  # Convert to JSON serializable format

@app.route("/random-forest", methods=["POST"])
def random_forest_route():
    data = request.json  # Receive JSON data
    print(f"Received from Node.js: {data}")

    # Use the correct imported function
    processed_data = rf_process_data(data)

    return jsonify({"prediction": processed_data.tolist()})  # Convert to JSON serializable format

if __name__ == "__main__":
    app.run(debug=True, port=53947)  # Specify the port here
