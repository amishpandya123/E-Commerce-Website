const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById("navbar");

// If anyone clicks on the bar icon then the active class will be added in the navbar list and as whatever we have written in active class will be happen
//This active is different then the active class of list tag.
if (bar) {
	bar.addEventListener('click',()=>{
      nav.classList.add('active')
	});
}

//if anyone clicks on close button then the active class will be removed from the navbar list.
if (close) {
	close.addEventListener('click',()=>{
       nav.classList.remove('active');
	});
}

