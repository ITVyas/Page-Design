window.addEventListener('load', () => {
    addCloseImageViewLogic();        
    addViewLogicForImages();
});

function addCloseImageViewLogic() {
    document.querySelector('#image-view-container .image-view-container__close').addEventListener('click', () => {
        document.getElementById('image-view-container').style.display = 'none';
    });
}

function addViewLogicForImages() {
    const imageViewContainer = document.getElementById('image-view-container');
    const imgEl = imageViewContainer.querySelector('img');
    Array.from(document.querySelectorAll('.watchable')).forEach(el => {
        el.addEventListener('click', () => {
            imageViewContainer.style.display = 'flex';
            imgEl.src = el.querySelector('img').src;
        });
    });
}