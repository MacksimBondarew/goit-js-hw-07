import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const divParentGallery = document.querySelector('.gallery');
const imageMarkup = createImageGalery(galleryItems);
divParentGallery.innerHTML = imageMarkup;
divParentGallery.addEventListener('click', onclickPhotoInGallery);
function createImageGalery(galleryItems) {
    return galleryItems.map((gallery) => {
        return `
            <a class="gallery__item" href="${gallery.original}">
                <img class="gallery__image" src="${gallery.preview}" alt="${gallery.description}" />
            </a>`;
        })
        .join('');
};
function onclickPhotoInGallery(event) {
    // Не перекидає на іншу сторінку
    event.preventDefault();
    // slider photo
    // клікає лише на фотографію 
    divParentGallery.addEventListener('keydown', (event) => {
        if (event.code === "Escape") {
            instance.close()
        }
    });
};
new SimpleLightbox('.gallery a', {
    captionDelay: 250,
});
