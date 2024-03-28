document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    const expressionParagraph = document.getElementById('expression');
  
  
    button.addEventListener('click', async function() {
      const response = await fetch('expression.txt');
      const expressionText = await response.text();
      expressionParagraph.textContent = expressionText;
    });
  });