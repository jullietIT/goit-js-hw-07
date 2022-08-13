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


// gallery.addEventListener("click",onGalleryLightBoxClick);

//  const imgSource = event.target.dataset.source;

//   const instance = basicLightbox.create(`
//     <img
//     src="${imgSource}"
//     >
// `);












//  function onPictureClick(event) {
//   event.preventDefault();
//   if (!event.target.classList.contains('gallery__image')) {
//     return;
//   }
//   // console.log(event.target);
//   window.addEventListener('keydown', onEscBtnPress);
//   modalRef.classList.add('is-open');
//   imageRef.src = event.target.dataset.source;
// }

// function onCloseBtnClick() {
//   modalRef.classList.remove('is-open');
//   window.removeEventListener('keydown', onEscBtnPress);
//   imageRef.src = '';
// }

// function onBackdropClick(event) {
//   if (backdropRef === event.target) {
//     onCloseBtnClick();
//   }
// }
// function onEscBtnPress(event) {
//   console.log(event);
//   if (event.code === 'Escape') {
//     onCloseBtnClick();
//   }
// }







// const gallery = document.querySelector('.gallery')
// const items = []

// galleryItems.forEach(element => {
// 	const galleryLink = document.createElement('a')
// 	galleryLink.className = 'gallery__link'
// 	galleryLink.href = element.original
// 	const galleryImage = document.createElement('img')
// 	galleryImage.className = 'gallery__image'
// 	galleryImage.src = element.preview
// 	galleryImage.setAttribute('title', element.description)
// 	galleryImage.alt = element.description

// 	galleryLink.append(galleryImage)
// 	items.push(galleryLink)
// })
// gallery.append(...items)

// new SimpleLightbox('.gallery a', {
// 	captionDelay:250
// })

