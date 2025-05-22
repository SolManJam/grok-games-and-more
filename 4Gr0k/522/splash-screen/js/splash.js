// Fetch the HTML content from the raw GitHub URL
fetch('https://raw.githubusercontent.com/SolManJam/grok-games-and-more/main/4Gr0k/522/DIVS.HTML')
    .then(response => response.text())
    .then(html => {
        // Parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Find the bottom div (assuming it has a class 'bottom')
        const bottomDiv = doc.querySelector('.bottom');
        if (!bottomDiv) {
            console.error('Bottom div not found. Check the HTML structure.');
            return;
        }
        
        // Create the Start button
        const startButton = document.createElement('button');
        startButton.textContent = 'Start';
        startButton.className = 'start-button'; // Apply styling
        startButton.onclick = function() {
            // Dismiss the splash screen (example: hide the container)
            document.getElementById('splash-content').style.display = 'none';
            // Add your logic here to proceed to the main application
            console.log('Splash screen dismissed');
        };
        
        // Append the button to the bottom div
        bottomDiv.appendChild(startButton);
        
        // Set the modified HTML to the splash screen container
        document.getElementById('splash-content').innerHTML = doc.body.innerHTML;
    })
    .catch(error => console.error('Error fetching HTML:', error));