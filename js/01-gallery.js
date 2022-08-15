import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryList = createGalleryCardsItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryList);


 function createGalleryCardsItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__img"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
.join("");
 }



gallery.addEventListener("click", onGalleryClick);
function onGalleryClick(e) {
  e.preventDefault();
  const imgSource = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img
    src="${imgSource}"
    >
`);

  instance.show();
}
