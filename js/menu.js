document.querySelector('.menu__burger').onclick = menyShow;
document.querySelector('.menu__exit').onclick = menyHide;

function menyShow () {
    document.querySelector('.meny').style.display = 'block';
}
function menyHide () {
    document.querySelector('.meny').style.display = 'none';
}