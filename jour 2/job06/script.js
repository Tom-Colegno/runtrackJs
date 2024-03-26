
let hiddenContent = document.getElementsByTagName("body")[0]
let pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let current = 0;


document.addEventListener('keydown', (event) =>
{
      	
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}
    
	current++;

	if (pattern.length === current) {
		current = 0;
            hiddenContent.setAttribute("id","laplateforme_")
	}
});