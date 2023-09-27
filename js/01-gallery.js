import { galleryItems } from './gallery-items.js';
// Change code below this line
const listEl = document.querySelector('.gallery');
const renderList = (arr,container) => {
    const markup =  arr.map(
        (item) =>
            `<li class="gallery__item">
            <a class="gallery__link href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
            data-source="${item.original}" />
            </a>
            </li>`
    ).join("");
    container.insertAdjacentHTML('beforeend', markup);
}
renderList(galleryItems, listEl);

listEl.onclick = (event) => {
 if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`, {
        onShow: () => {
            document.addEventListener('keydown', closeModal);
        },
        onClose: () => {
            document.removeEventListener('keydown', closeModal);
        },
    });
    instance.show();
    
        function closeModal(event) {
       if (event.code !== 'Escape') {
           return;
       } 
            instance.close();
    }
}