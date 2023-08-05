async function generateText() {
    const userInput = document.getElementById('userInput').value;
    
    // Make an API call to your back-end with the user input
    const response = await fetch('/generate_text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: userInput })
    });

    const data = await response.json();
    document.getElementById('output').innerText = data.generated_text;
}