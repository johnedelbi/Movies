import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import dotenv from 'dotenv';

import moviesRoutes from './routes/movies.js';

dotenv.config();
const PORT = process.env.PORT || 3007;

const __fileName = fileURLToPath(import.meta.url);
const PATH = dirname(__fileName);

//init express
const app = express();

// set template engine
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

//parse the body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//server static folder
app.use(express.static(path.join(PATH, 'public')));
app.use('/api/movies', moviesRoutes);

//handle 404
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'page not found'
    });
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
