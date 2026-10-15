const searchForm = document.getElementById("form-search");
const searchInput = document.getElementById("search-city");
const iconSearch = document.querySelector(".form-search__button-search");
const iconClear = document.querySelector(".form-search__button-clear");

function toggleSearchButtons() {
  const hasInput = searchInput.value;

  iconSearch.classList.toggle("disable", hasInput);
  iconClear.classList.toggle("disable", !hasInput);
}

searchInput.addEventListener("input", () => {
  toggleSearchButtons();
  console.log(searchInput.value);
});

iconClear.addEventListener('click', () => {
  searchInput.value = "";
  toggleSearchButtons();
})

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = searchInput.value.trim();

  if(!city) {
    console.log('Введите название города');
    return;
  }
    
  console.log(city); 
});
