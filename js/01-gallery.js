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

listEl.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.currentTarget == event.target) {
        return;
    }
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.dataset.source}">
    </div>
`)
    instance.show()
});
console.log(galleryItems);
