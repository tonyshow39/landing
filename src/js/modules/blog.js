fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/301", {
  method: "GET",
  headers: {
    "X-API-KEY": "dd2f4bcb-6e93-4be0-b4ab-11da694b7e23",
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

function renderFilms(films) {
  const div = document.createElement("div");
  div.className = "card";
  div.style.backgroundImage = `url("${films.posterUrlPreview}")`;
  div.innerHTML = `
    <div class="card__info">
      <div>
        <i class="ic_calendar"></i> 
        <span>Год: ${films.year}</span>
      </div>
      <div>
        <i class="ic_comment"></i> 
        <span>Рейтинг: ${films.ratingKinopoisk}</span>
      </div>
    </div>
    <div class="card__title">${films.nameRu}</div>
    <a class="card__more" href="${films.webUrl}">Смотреть на кинопоиске</a>
  `;
}
