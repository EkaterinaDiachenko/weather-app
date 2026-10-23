const searchForm = document.getElementById('form-search');
const searchInput = document.getElementById('search-city');
const iconSearch = document.querySelector('.form-search__button-search');
const iconClear = document.querySelector('.form-search__button-clear');
const weatherDetails = document.querySelector('.weather-details');

const iconsPath = './src/assets/icons/';

const templateElement = document.getElementById('weather-card-template');

function toggleSearchButtons() {
  const hasText = searchInput.value.trim() !== '';
  const isFocused = searchInput.matches(':focus');
  const showClearButton = hasText || isFocused;

  iconSearch.classList.toggle('is-hidden', showClearButton);
  iconClear.classList.toggle('is-hidden', !showClearButton);
}

searchInput.addEventListener('input', () => {
  toggleSearchButtons();
  console.log(searchInput.value);
});

searchInput.addEventListener('focus', toggleSearchButtons);
searchInput.addEventListener('blur', toggleSearchButtons);

iconClear.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
  toggleSearchButtons();
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = searchInput.value.trim();

  if (!city) {
    console.log('Введите название города');
    return;
  }

  console.log(city);
});

weatherData.forEach((data) => {
  const contentElement = templateElement.content.cloneNode(true);

  const card = contentElement.querySelector('.weather-details__card');
  const cardTitle = contentElement.querySelector('.weather-details__title');
  const cardImage = contentElement.querySelector('.weather-details__image');
  const cardValue = contentElement.querySelector('.weather-details__value');
  const cardImgBar = contentElement.querySelector(
    '.weather-details__image-bar',
  );
  const cardDescription = contentElement.querySelector(
    '.weather-details__description',
  );
  cardTitle.textContent = data.title;
  cardImage.src = `${iconsPath}${data.image}`;
  cardValue.textContent = data.value;

  if (data.imageBar) {
    cardImgBar.src = `${iconsPath}${data.imageBar}`;
  } else {
    cardImgBar.remove();
  }

  if (typeof data.description === 'object') {
    cardDescription.classList.add('weather-details__description--range');
    const min = document.createElement('span');
    min.textContent = `${data.description.min}%`;

    const max = document.createElement('span');
    max.textContent = `${data.description.max}%`;

    cardDescription.append(min, max);
  } else {
    cardDescription.textContent = data.description;
  }
  weatherDetails.appendChild(card);
});
