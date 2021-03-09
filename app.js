/*  function getReq() {
     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=acbc0740cc065dbc97e25e73698ff2fe&language=en-US&page=1')
         .then(res => {
             var title = res.data.original_title;
             var arr = res.data.results;
             console.log(title);
             showOutput(res);
         })
         .catch(err => console.log(err));
 }
 getReq();
 // Show output in browser
 function showOutput(res) {
     document.getElementById('res').innerHTML = `
       <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
       </div>
     </div>
   `;
 }

 function getData() {
     axios.all([
             asios.get('https://api.themoviedb.org/3/movie/popular?api_key=acbc0740cc065dbc97e25e73698ff2fe&language=en-US&page=1')
         ])
         .then(res => {
             console.log(res[0]);
             showOutput(res[0]);
         });
 }
 */
/* axios.get('https://api.themoviedb.org/3/movie/popular?api_key=acbc0740cc065dbc97e25e73698ff2fe&language=en-US&page=1')
    .then(resp => {
        var title = resp.data.original_title;
        var arr = resp.data.results;
        out(arr);
        showOutput(resp);
        hideloader();
        document.getElementById('r').innerHTML = `{arr}`;
    }).catch(err => console.log(err));

function createCard(ele, im) {
    var box = document.createElement("div");
    box.img = im;

}

function showOutput(res) {
    document.getElementById('res').innerHTML = `
           <div class="card-body">
             <pre>${res.data}</pre>
           </div>
         </div>
      `;
}

function basicInfo(movieArray) {
    for (const key in movieArray) {
        if (Object.hasOwnProperty.call(movieArray, key)) {
            const element = movieArray[key];
            console.log(element);
        }
    }
    console.log(typeof(movieArray));
    var Mname = movieArray.title;
    document.getElementById("title").innerHTML = Mname;
    console.log(movieArray.vote_average);
    console.log(movieArray.release_date);
    console.log(movieArray.original_title);
    var path = movieArray.poster_path;
    var img = `https://image.tmdb.org/t/p/w500${path}`;
    console.log(movieArray.overview);
    var edimg = document.getElementById("imm").src = String(img);
    createCard(movieArray, img);
}

function out(arr) {
    arr.forEach(element => {
        basicInfo(element);
    });

}

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML
// for HTML table

function show(data) {
    let tab =
        `<tr>
          <th>Name</th>
          <th>Office</th>
          <th>Position</th>
          <th>Salary</th>
         </tr>`;

    // Loop to access all rows
    for (let r of data.list) {
        tab += `<tr>
    <td>${r.name} </td>
    <td>${r.office}</td>
    <td>${r.position}</td>
    <td>${r.salary}</td>
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
} */
/* respData.results.forEach(movie => {
    const img = document.createElement('img');
    img.src = IMAGEPATH + movie.poster_path;

    document.body.appendChild(img);
}); */

const APIURL = 'https://api.themoviedb.org/3/movie/popular?api_key=acbc0740cc065dbc97e25e73698ff2fe&language=en-US&page=1';
const IMAGEPATH = 'https://image.tmdb.org/t/p/w1280';
async function getMovies() {
    const resp = await axios(APIURL);
    const respData = await resp.data;
    console.log(respData);
    respData.results.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `        

        <img src="https://image.tmdb.org/t/p/w185/vYvppZMvXYheYTWVd8Rnn9nsmNp.jpg" alt="">
        <div class="movie-info">
            <h3>Movie Title</h3>
            <span>8.4</span>
        </div>`
    });

    return resp;
}
getMovies();