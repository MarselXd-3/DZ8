const movies = [
  {
    title: "The Dark Knight",
    rating: 9.0,
    year: 2008,
    director: "Christopher Nolan",
  },
  { title: "Twilight", rating: 7.8, year: 2010, director: "Anna Nolan" },
  { title: "Spider - Man", rating: 8.9, year: 2013, director: "Bob Collinz" },
  { title: "IT 2", rating: 3.4, year: 2022, director: "Andrey Minin" },
];

function formatMovieInfo(movie, index) {
  return `
    <tr data-index="${index}">
      <td>${movie.title}</td>
      <td>${movie.year}</td>
      <td>${movie.rating}</td>
      <td>${movie.director}</td>
      <td><button class="buy-btn">Купить</button></td>
    </tr>
  `;
}

const tableBody = document.querySelector('tbody');

movies.forEach((movie, index) => {
  tableBody.innerHTML += formatMovieInfo(movie, index);
});

const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const confirmBtn = document.getElementById('confirm-btn');

tableBody.addEventListener('click', (event) => {
  if (event.target.classList.contains('buy-btn')) {
    modal.style.display = 'block';
    const rowIndex = event.target.closest('tr').dataset.index;
    confirmBtn.dataset.rowIndex = rowIndex;
  }
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

confirmBtn.addEventListener('click', () => {
  const rowIndex = confirmBtn.dataset.rowIndex;
  const row = tableBody.querySelector(`tr[data-index="${rowIndex}"]`);
  row.style.backgroundColor = '#ccc';
  const buyBtn = row.querySelector('.buy-btn');
  buyBtn.style.display = 'none';
  modal.style.display = 'none';
});
