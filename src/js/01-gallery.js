import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkUp = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
    return items.map(({preview, original, description})=> {
        return `
        <li>
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"/>
        </a>
        </li>`;
    }).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250',
  });
}