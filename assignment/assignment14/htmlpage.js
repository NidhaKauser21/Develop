// Create the HTML elements
var htmlElement = document.createElement('html');
var headElement = document.createElement('head');
var titleElement = document.createElement('title');
var bodyElement = document.createElement('body');
var h1Element = document.createElement('h1');
var pElement = document.createElement('p');

// Set the text content of the elements
titleElement.textContent = 'Simple HTML Page';
h1Element.textContent = 'Welcome to my page!';
pElement.textContent = 'This is a simple HTML page generated using pure JavaScript.';

// Append the elements to build the structure
headElement.appendChild(titleElement);
bodyElement.appendChild(h1Element);
bodyElement.appendChild(pElement);
htmlElement.appendChild(headElement);
htmlElement.appendChild(bodyElement);

// Set the document's root element to the created HTML structure
document.documentElement.replaceWith(htmlElement);
