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
            <div class="gallery__item">
                <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${gallery.preview}"
                    data-source="${gallery.original}"
                    alt="${gallery.description}"
                />
                </a>
            </div>`;
        })
        .join('');
};
function onclickPhotoInGallery(event) {
    // Не перекидає на іншу сторінку
    event.preventDefault();
    
    // клікає лише на фотографію 

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
    `)
    instance.show();

    divParentGallery.addEventListener('keydown', (event) => {
        if (event.code === "Escape") {
            instance.close()
        }
    });
};
