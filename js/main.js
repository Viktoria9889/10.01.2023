let elDiv = document.querySelector('.test1');


elDiv.addEventListener('mouseenter', () => {
    elDiv.innerHTML = 'Clic me!';
});
elDiv.addEventListener('click', () => {
    elDiv.innerHTML = 'Have a nice day =)';
});