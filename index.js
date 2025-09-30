import express from 'express'
import axios from 'axios'
import bodyParser from "body-parser";
import mockData from "./data/static.json" assert { type: "json" };
import genreData from "./data/genre.json" assert { type: "json" };

const app = express();
const port = 3000;
const API_URL = "https://ai-movie-recommender.p.rapidapi.com/api"
const API_KEY = "4d93b2bca3msha1a10ff263c27a9p1c7dedjsn0aff4fb42b06"

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // mockData.release_date = dateConversion(mockData.release_date);
    const displayNames = new Intl.DisplayNames(['en'], { type: 'language' });
    mockData.movies.forEach((movie) => {
        movie.release_date = dateConversion(movie.release_date);
        movie.language_display = displayNames.of(movie.original_language) + ' (' + movie.original_language + ')';
    })
    res.render('index.ejs', { movieData: mockData, genreData: genreData});
})

app.get('/search', async (req, res) => {
    console.log(mockData)
    try {
        const searchTerm = req.query.search;
        const response = await axios.get(API_URL + "/search", {
            params: {
                q: searchTerm
            },
            headers: {
                "X-Rapidapi-Key": API_KEY,
                'X-RapidAPI-Host': 'ai-movie-recommender.p.rapidapi.com'
            }
        })
        const displayNames = new Intl.DisplayNames(['en'], { type: 'language' });
        response.data.movies.forEach((movie) => {
            movie.release_date = dateConversion(movie.release_date);
            movie.language_display = displayNames.of(movie.original_language) + ' (' + movie.original_language + ')';
        })
        console.log(response.data);
        res.render('index.ejs', { movieData: response.data, genreData: genreData});

    } catch (error) {
        console.error(error.message);
        res.render('index.ejs', { movieData: mockData});
    }
})

function dateConversion(date) {
    const dateObj = new Date(date);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return dateObj.toLocaleDateString("en-GB", options);
}

app.listen(port, () => {
    console.log(`Server is running on port https://localhost:${port}`);
})