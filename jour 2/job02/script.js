const button = document.querySelector('#button');
button.addEventListener('click', showhide);

function showhide() {
    const button = document.querySelector('#button');
    const article = document.querySelector('article');
  
    if (article) {
      article.remove();
      button.textContent = 'Click me';
    } else {
      const newArticle = document.createElement('article');
      newArticle.textContent = 'L\'important n\'est pas la chute, mais l\'atterrissage.';
      document.body.appendChild(newArticle);
      button.textContent = 'Click me';
    }
  }