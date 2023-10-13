let movies = [
    {
        id: '1',
        name: 'Patriot',
        src: 'https://m.media-amazon.com/images/I/518IZVOjisL._AC_UF894,1000_QL80_.jpg'
    },
    {
        id: '2',
        name: 'Barbie',
        src: 'https://m.media-amazon.com/images/I/71BgdzmFDAL.jpg'
    },
    {
        id: '3',
        name: 'Troy',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQF-3wteC9fSNiCZEekpEByLW4axm4boSGX4JD-mZlgA&s'
    },
    {
        id: '4',
        name: 'Harry Potter',
        src: 'https://cdn.europosters.eu/image/hp/80594.jpg'
    },
    {
        id: '5',
        name: 'Tom & Jerry',
        src: 'https://cdn.europosters.eu/image/750/posters/looney-tunes-tom-and-jerry-i12290.jpg'
    },
    {
        id: '6',
        name: 'little mermaid',
        src: 'https://www.themoviedb.org/t/p/original/cJbKUdbWcIFDuHhs6uvOfacemc4.jpg'
    },
    {
        id: '7',
        name: 'Oppenheimer',
        src: 'https://movies.universalpictures.com/media/06-opp-dm-mobile-banner-1080x745-now-pl-f01-071223-64bab982784c7-1.jpg'
    }
];

const getMovieById = (id) => {
    return movies.find((movie) => movie.id === id);
};

const updateMovieById = (arr, Id, name, src) => {
    arr.forEach((obj) => {
        if (obj.id === Id) {
            obj.name = name;
            obj.src = src;
        }
    });
};

const moviesController = {
    getMovies: (req, res) => {
        res.json(movies);
    },
    getMovieById: (req, res) => {
        const { id } = req.params;
        const movieIsExist = getMovieById(id);
        if (movieIsExist) {
            res.json(movieIsExist);
        } else {
            res.send('movie not found');
        }
    },
    addNewMovie: (req, res) => {
        const { name, src } = req.body;
        const id = String(movies.length + 1);
        const newMovie = { id, name, src };
        movies.push(newMovie);
        res.json(movies);
    },
    updateMovieById: (req, res) => {
        const { id } = req.params;
        const { name, src } = req.body;
        const movieIsExist = getMovieById(id);
        if (movieIsExist) {
            updateMovieById(movies, id, name, src);
            res.json(movies);
        } else {
            res.send('movie not found');
        }
    },
    deleteMovie: (req, res) => {
        const { id } = req.params;
        const movieIsExist = getMovieById(id);
        if (movieIsExist) {
            movies = movies.filter((movie) => movie.id !== id);
            res.json(movies);
        } else {
            res.send('movie is not exist');
        }
    }
};

export default moviesController;
