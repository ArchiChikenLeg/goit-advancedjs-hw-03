import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

/**
 * Создает HTML разметку для карточки изображения
 * @param {Object} image - объект с данными изображения
 * @returns {string} - HTML разметка карточки
 */
const createImageCard = (image) => {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;

  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
          loading="lazy"
        />
      </a>
      <div class="image-info">
        <div class="info-item">
          <span class="info-label">Likes</span>
          <span class="info-value">${likes}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Views</span>
          <span class="info-value">${views}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Comments</span>
          <span class="info-value">${comments}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Downloads</span>
          <span class="info-value">${downloads}</span>
        </div>
      </div>
    </li>
  `;
};

/**
 * Отображает галерею изображений
 * @param {Array} images - массив объектов изображений
 * @param {HTMLElement} galleryElement - элемент галереи в DOM
 */
export const renderGallery = (images, galleryElement) => {
  const markup = images.map((image) => createImageCard(image)).join('');
  galleryElement.innerHTML = markup;

  // Инициализируем или обновляем SimpleLightbox
  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery-link', {
      captions: true,
      captionsData: 'alt',
      docClose: true,
      scrollZoom: true,
    });
  }
};

/**
 * Очищает содержимое галереи
 * @param {HTMLElement} galleryElement - элемент галереи в DOM
 */
export const clearGallery = (galleryElement) => {
  galleryElement.innerHTML = '';
};

/**
 * Показывает индикатор загрузки
 * @param {HTMLElement} loaderElement - элемент индикатора загрузки
 */
export const showLoader = (loaderElement) => {
  loaderElement.style.display = 'block';
};

/**
 * Скрывает индикатор загрузки
 * @param {HTMLElement} loaderElement - элемент индикатора загрузки
 */
export const hideLoader = (loaderElement) => {
  loaderElement.style.display = 'none';
};
