const API_KEY = '53279240-6e40a1d36b66aedd6bbd928de';
const BASE_URL = 'https://pixabay.com/api/';

/**
 * Функция для поиска изображений по ключевому слову
 * @param {string} query - слово для поиска
 * @returns {Promise<Object>} - объект с массивом найденных изображений
 */
export const searchImages = async (query) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  try {
    const response = await fetch(`${BASE_URL}?${params}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
