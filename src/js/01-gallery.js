import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Add imports above this line

// Change code below this line

console.log(galleryItems);

const imageGallery = document.querySelector('.gallery');
const imagesMarkup = createImageCardsMarkup(galleryItems);

imageGallery.insertAdjacentHTML('beforeend', imagesMarkup);

function createImageCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
