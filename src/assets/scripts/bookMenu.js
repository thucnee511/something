const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
openMenu.addEventListener('click', () => {
    document.querySelector('#sidebar').style.display = 'block';
});
closeMenu.addEventListener('click', () => {
    document.querySelector('#sidebar').style.display = 'none';
});

const openBookmark = document.getElementById('openBookmark');
const closeBookmark = document.getElementById('closeBookmark');
openBookmark.addEventListener('click', () => {
    document.querySelector('#mark').style.display = 'block';
});
closeBookmark.addEventListener('click', () => {
    document.querySelector('#mark').style.display = 'none';
});