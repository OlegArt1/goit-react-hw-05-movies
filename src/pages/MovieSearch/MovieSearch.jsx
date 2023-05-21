import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
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
    
    const [searchParams, setSearchParams] = useSearchParams();
  
    const searchQuery = searchParams.get("query");

    const location = useLocation();

    useEffect(() =>
    {
        if (searchQuery === null)
        {
            return;
        }
        getMovie(searchQuery);

    }, [searchQuery]);

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

        const form = e.currentTarget;

        if (!form)
        {
            alert('Empty column! Fill in the search column!');
      
            return;
        }
        setSearchParams({ query: form.elements.query.value });
        
        setMovies([]);

        form.reset();
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