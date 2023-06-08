const drawContainer = (containerSize, childSize, numberOfChildren) => {
    const container = document.getElementById('container');
    container.style.width = containerSize + 'px';
    
    // Calculate the number of children
    const maxChildren = Math.floor(containerSize / childSize) ** 2;
    if (numberOfChildren > maxChildren) {
        document.getElementById('message').innerText = `Cannot fit ${numberOfChildren} children in the container. Rendering ${maxChildren} children instead.`;
        numberOfChildren = maxChildren;
    }

    for (let i = 0; i < numberOfChildren; i++) {
      const child = document.createElement('div');
      child.className = 'child';
      child.style.width = childSize + 'px';
      child.style.height = childSize + 'px';
      child.style.backgroundColor = getRandomColor();

      container.appendChild(child);

      // Add hover effect
      child.addEventListener('mouseenter', function() {
        child.style.backgroundColor = getRandomColor();
      });

      // Add hover timeout to hide the child
      let timeout;
      child.addEventListener('mouseover', function() {
        timeout = setTimeout(function() {
          child.style.display = 'none';
        }, 2000);
      });

      // remove hover timeout effect
      child.addEventListener('mouseout', function() {
        clearTimeout(timeout);
      });
    }
}

// Generate random background color
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// drawContainer(310, 200, 4);
 drawContainer(413, 42, 30);
// drawContainer(200, 300, 2);