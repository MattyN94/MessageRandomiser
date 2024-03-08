// Define different categories of phrases for fake-inspirational messages
const openers = ["Embrace the chaos and", "Dance like nobody is watching and", "Believe in the magic of"];
const actions = ["riding invisible unicorns", "discovering the secret of rainbow muffins", "finding joy in bubble wrap popping", "befriending intergalactic space hamsters"];
const closers = ["because you're a glitter-covered superhero!", "in a world where llamas sing operas.", "and remember, the answer is always pancakes!"];

// Function to generate a random fake-inspirational message
function generateFakeInspirationalMessage() {
    // Randomly select one phrase from each category
    const opener = getRandomElement(openers);
    const action = getRandomElement(actions);
    const closer = getRandomElement(closers);

    // Combine the selected phrases to create the final fake-inspirational message
    const message = `${opener} ${action}, ${closer}`;
    
    return message;
}

// Helper function to get a random element from an array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Generate and log a new fake-inspirational message each time the program is run
const fakeInspirationalMessage = generateFakeInspirationalMessage();
console.log(fakeInspirationalMessage);
