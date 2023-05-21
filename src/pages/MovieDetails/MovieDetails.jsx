import { Suspense, useEffect, useState } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { fetchMoviesId } from "services/Api";
import MovieInfo from "components/MovieInfo/MovieInfo";
import
{
    Movie,
    MovieTitleInfo,
    MovieTitleIndicator,
    MovieLinkBlock,
    MovieLinkPage,
    MovieLink,
}
from "./MovieDelails.styled";

const MovieDelails = () =>
{
    const [movie, setMovie] = useState({});

    const location = useLocation();
    
    const { movieId } = useParams();

    useEffect(() =>
    {
        fetchSelectedMovie(movieId);

    }, [movieId]);

    const fetchSelectedMovie = async (movieId) =>
    {
        try
        {
            const movieData = await fetchMoviesId(movieId);
            
            setMovie(movieData);
        }
        catch (error)
        {
            console.log("\nError - ", error.message + ";");

            alert("Error! Network error!");
        }
    }
    return (
        <main>
            <Movie>
                <MovieLink to={location.state?.from ?? '/'}>Go back</MovieLink>
                <MovieInfo movieInfo={movie}/>
                <MovieTitleInfo>Additional information</MovieTitleInfo>
                <MovieLinkBlock>
                    <MovieLinkPage to="cast" state={{ from: location.state?.from }}>Cast</MovieLinkPage>
                    <MovieLinkPage to="reviews" state={{ from: location.state?.from }}>Reviews</MovieLinkPage>
                </MovieLinkBlock>
                <Suspense fallback={<MovieTitleIndicator>Loading...</MovieTitleIndicator>}>
                    <Outlet />
                </Suspense>
            </Movie>
        </main>
    );
};
export default MovieDelails;