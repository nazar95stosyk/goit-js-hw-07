
import { galleryItems } from './gallery-items.js';
// Change code below this line
const portfolio = document.querySelector('.gallery');

const portfolioList = galleryItems.map(({ preview, description, original }) => 
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');
portfolio.insertAdjacentHTML('afterbegin', portfolioList);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

