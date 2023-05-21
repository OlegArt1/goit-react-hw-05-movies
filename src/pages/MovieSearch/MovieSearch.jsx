import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMoviesSearch } from "services/Api";
import
{
    Searchbar,
    SearchbarTitle,
    SearchbarForm,
    SearchbarButton,
    SearchbarText,
    SearchbarInput,
}
from "./MovieSearch.styled";
import
{
    List,
    ListItem,
    ListBlock,
    ListLink,
}
from "../MovieHome/MovieHome.styled";
import
{
    Movie,
    MovieLink,
}
from "../MovieDetails/MovieDelails.styled";

const Movies = () =>
{
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
  
    const location = useLocation();

    useEffect(() =>
    {
        getMovie(search);

    }, [search]);

    const getMovie = async (text) =>
    {
        try
        {
            const { results } = await fetchMoviesSearch(text);

            setMovies(results);
        }
        catch (error)
        {
            setMovies([]);

            console.log("\n Error - ", error.message + ";");

            alert("Error! Status code 404!");
        }
    }
    const handleSubmit = e =>
    {
        e.preventDefault();

        const searchText = e.target.elements.query.value;

        if (!searchText)
        {
            alert('Empty column! Fill in the search column!');
      
            return;
        }
        setSearch(searchText);

        setMovies([]);

        e.target.reset();
    }
    return (
        <main>
            <Movie>
                <Searchbar>
                    <MovieLink to={location.state?.from ?? '/'} style={{ margin: '20px 60px' }}>Go back</MovieLink>
                    <SearchbarTitle>Search movies</SearchbarTitle>
                    <SearchbarForm onSubmit={handleSubmit}>
                        <SearchbarButton type="submit">
                            <SearchbarText>Search</SearchbarText>
                        </SearchbarButton>
                        <SearchbarInput name="query" type="text" placeholder="Search movies"/>
                    </SearchbarForm>
                </Searchbar>
                <List>
                    {movies.map(movie =>
                    (
                        <ListItem key={movie.id}>
                            <ListBlock>
                                <ListLink to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</ListLink>
                            </ListBlock>
                        </ListItem>
                    ))}
                </List>
            </Movie>
        </main>
    );
};
export default Movies;