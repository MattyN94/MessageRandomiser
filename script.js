// Define different categories of phrases for fake-inspirational messages
const openers = ["Dunno, might die", "You'll be fine today", "Answers unclear, please click again", "Buy a lottery ticket", "Watch out for Joel", "Just go back to bed"];

// Function to generate a random fake-inspirational message
function generateFakeInspirationalMessage() {
    // Randomly select one phrase from the openers array
    const opener = getRandomElement(openers);
    
    // Generate a random fake-inspirational message
    const message = `${opener}`;
    
    return message;
}

// Helper function to get a random element from an array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to display the generated message in the speech bubble
function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}

// Event listener for the button click
const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', function() {
    // Generate a new fake-inspirational message
    const fakeInspirationalMessage = generateFakeInspirationalMessage();
    // Display the message in the speech bubble
    displayMessage(fakeInspirationalMessage);
});
