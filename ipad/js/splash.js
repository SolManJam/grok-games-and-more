// Fetch the HTML content from the raw GitHub URL
document.addEventListener('DOMContentLoaded', () => {
  const svgObject = document.getElementById('border-svg');
  svgObject.addEventListener('load', () => {
    const svgDoc = svgObject.contentDocument; // Access the SVG's DOM
    if (svgDoc) {
      // Example: Style all <path> elements
      const paths = svgDoc.querySelectorAll('path');
      paths.forEach(path => {
        path.setAttribute('stroke', '#ff0000'); // Red border
        path.setAttribute('stroke-width', '6');
        path.setAttribute('fill', 'none'); // Ensure transparency
      });

      // Example: Target elements with a specific class
      const borderElements = svgDoc.querySelectorAll('.border-path');
      borderElements.forEach(el => {
        el.setAttribute('stroke', 'blue');
        el.setAttribute('stroke-width', '4');
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const svgObject = document.getElementById('border-svg');
  svgObject.addEventListener('load', () => {
    const svgDoc = svgObject.contentDocument;
    if (svgDoc) {
      svgDoc.documentElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const div = document.querySelector('.your-div-class');
  const svgObject = document.getElementById('border-svg');
  svgObject.addEventListener('load', () => {
    const svgDoc = svgObject.contentDocument;
    if (svgDoc) {
      const divWidth = div.clientWidth;
      const divHeight = div.clientHeight;
      svgDoc.documentElement.setAttribute('viewBox', `0 0 ${divWidth} ${divHeight}`);
      svgDoc.documentElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    }
  });
});

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
    */