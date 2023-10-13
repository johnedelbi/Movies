import express from 'express';

const moviesRoutes = express.Router();

import moviesController from '../controllers/movies.js';

moviesRoutes.get('/', moviesController.getMovies);
moviesRoutes.get('/:id', moviesController.getMovieById);
moviesRoutes.post('/', moviesController.addNewMovie);
moviesRoutes.put('/:id', moviesController.updateMovieById);
moviesRoutes.delete('/:id', moviesController.deleteMovie);

export default moviesRoutes;
