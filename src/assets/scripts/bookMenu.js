const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
openMenu.addEventListener('click', () => {
    document.querySelector('#sidebar').style.display = 'block';
});
closeMenu.addEventListener('click', () => {
    document.querySelector('#sidebar').style.display = 'none';
});