function calculateCircle() {
    const radius = parseFloat(document.getElementById('circleRadius').value);
    const area = Math.PI * radius ** 2;
    const circumference = 2 * Math.PI * radius;
  
    document.getElementById('circleResult').innerHTML = `Area: ${area.toFixed(2)}, ${circumference.toFixed(2)}`;
  }
  
  function calculateTriangle() {
    const base = parseFloat(document.getElementById('triangleBase').value);
    const height = parseFloat(document.getElementById('triangleHeight').value);
    const area = 0.5 * base * height;
    const perimeter = base + height + Math.sqrt(base ** 2 + height ** 2);
  
    document.getElementById('triangleResult').innerHTML = `Area: ${area.toFixed(2)}, Perimeter: ${perimeter.toFixed(2)}`;
  }
  
  function calculateRectangle() {
    const width = parseFloat(document.getElementById('rectangleWidth').value);
    const height = parseFloat(document.getElementById('rectangleHeight').value);
    const area = width * height;
    const perimeter = 2 * (width + height);
  
    document.getElementById('rectangleResult').innerHTML = `Area: ${area.toFixed(2)}, Perimeter: ${perimeter.toFixed(2)}`;
  }
  