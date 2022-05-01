const baseURL = 'https://api.tvmaze.com/'

const endpoints = {
    shows: 'shows'
};

const xhr = new XMLHttpRequest();

xhr.onload = (response) => {
    const data = JSON.parse(response.target.response)
    const move = document.querySelector('.shows')
    data.forEach(e => {
        move.innerHTML +=
            `<div class = "show_block">
            <div class="image">
                <img src = "${e.image.medium}" alt=""/>
            </div>
            <h3>${e.name}</h3>
            <p>Рейтинг: ${e.rating.average}</p>
            <p>Язык: ${e.language}</p>
            <p>Жанр: ${e.genres}</p>
            <p>Длительность: ${e.runtime}</p>
            <button>
            <a href="${e.url}" 
            target="_blank"
            rel="noreferrer">
            More
            </a>
            </button>
            </div>`;
    })
}

xhr.open('GET',`${baseURL}/show`);
xhr.send()