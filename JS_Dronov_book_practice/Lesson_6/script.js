const output = document.querySelector('#output');
const buttons = document.querySelectorAll('nav div');
let current = buttons[0];
const preview = document.getElementById('preview');

function getImageURL(filename) {
    return 'images/' + filename + '.jpg';
}

function showImage() {
    current = this;
    output.src = getImageURL(this.id);
    buttons.forEach((el) => {
        if (el == this) {
            el.className = 'active';
        } else {
            el.className = '';
        }
    });
}

function showPreview(evt) {
    preview.style.left = evt.pageX + 'px';
    preview.style.top = evt.pageY + 'px';
    preview.style.backgroundImage = 'url(' + getImageURL(this.id) +')';
    preview.className = 'active';
}

function hidePreview() {
    preview.className = '';
}

buttons.forEach((el) => {
    el.addEventListener('click', showImage);
    el.addEventListener('mouseover', showPreview);
    el.addEventListener('mouseout', hidePreview);
});
