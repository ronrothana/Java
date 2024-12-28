const inputField = document.getElementById('userInput');
const submitButton = document.getElementById('btnSubmit');
const displayText = document.getElementById('displayText');

submitButton.addEventListener('click', () => {
    const inputValue = inputField.value; // Use .value to get the input value
    displayText.textContent = 'You entered: ' + inputValue; // Display the input value
    console.log('User Input:', inputValue); // Log the input value
});
