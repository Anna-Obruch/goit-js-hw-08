// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItem(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryItem(items) {
    return items
    .map(({ preview, original, description }) =>{
      return `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
      <img 
      class="gallery__image" 
      src="${preview}"
      alt="${description}"
      />
      </a>
   </li>`
})
.join('');
}

console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });