import React, { useState, useEffect } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import movieService from '../../../services/movie-db.service';
import MovieList from './MovieList';
import Loader from '../../../components/Loader';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5)
  }
}));

const TopRatedMovies = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await movieService.getTopRatedMovies();
      setMovies(data.results);
    };

    fetchData();
  }, []);

  if (movies === undefined) {
    return <Loader />;
  }

  return (
    <div className={classes.root}>
      <Typography variant="h6">Top Rated Movies</Typography>
      <MovieList movies={movies} />
    </div>
  );
};

export default TopRatedMovies;
