import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryMap = galleryItems
	.map(img => {
	return `<a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`;
})
	.join('');
galleryList.innerHTML = galleryMap;

// galleryList.addEventListener('click', OpenModal);

function OpenModal(event) {
	event.preventDefault();
	if (!event.target.classList.contains('gallery__image')) {
		return;
	}
}

function CloseModal(event) {
	if (event.code === 'Escape') {
		instance.close();
	}
}

const lightbox = new SimpleLightbox('.gallery a', {
	captionDelay: 250,
	captionData: 'alt',
});