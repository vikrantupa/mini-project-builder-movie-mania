const APIURL = 'https://api.themoviedb.org/3/movie/popular?api_key=acbc0740cc065dbc97e25e73698ff2fe&language=en-US&page=1';

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const main = document.getElementById("main");

// initially get fav movies
getMovies(APIURL);

async function getMovies(url) {
    const resp = await axios(APIURL);
    const respData = await resp.data;

    console.log(respData);

    showMovies(respData.results);
}

function showMovies(movies) {
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                    vote_average
                )}">${vote_average}</span>
            </div>
        `;
        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

function openTabs() {
    var tabButton = document.querySelectorAll(".tab .tabs button");
    var tabPannels = document.querySelectorAll(".tab .tabPannel button");
}