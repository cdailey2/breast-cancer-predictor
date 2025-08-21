function saveSelection() {
    const selected = document.querySelector('input[name="model-type"]:checked');
    // check if radio button is selected
    if (selected) {
        sessionStorage.setItem('selectedModel', selected.value);

        // Redirect to model page
        window.location.href='./model1.html';
    }
    else {
        alert('Please select a machine learning model');
    }
}

// Adds the model name to span with id "model-selection" and sets the id to the 
function modelToHTML() {
        const selectedModel = sessionStorage.getItem('selectedModel');
        let formattedModel = formatStringWithSpaces(selectedModel);
        formattedStringToHTML(formattedModel, selectedModel);
        setActionAttribute(selectedModel);
}

// format radio button's value for use in inner html
function formatStringWithSpaces(selectedModel) {
    let formattedModel = selectedModel.split('-') // split on '-'
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize first letter
        .join(' '); // replace '-' with ' '
    return formattedModel;
}

// upload string and set id
function formattedStringToHTML(formattedModel, modelAttribute) {
    let targetElement = document.getElementById("model-selection");
    targetElement.innerHTML = formattedModel;
    targetElement.setAttribute('id', modelAttribute);

    console.log(targetElement.getAttribute('id'));
}


function formatStringRemoveSpaces(selectedModel) {
    let formattedModel = selectedModel.split('-') // split on '-'
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize first letter
    .join(''); // replace '-' with ''
    return formattedModel;
}

function setActionAttribute(selectedModel) {
    let formattedModel = formatStringRemoveSpaces(selectedModel);
    let action = "javascript:process" + formattedModel + "()";

    let targetElement = document.getElementById("cancer-form");
    targetElement.setAttribute('action', action);
}
