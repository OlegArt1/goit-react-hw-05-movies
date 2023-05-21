import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const MovieHome = lazy(() => import('../pages/MovieHome/MovieHome'));
const MovieSearch = lazy(() => import('../pages/MovieSearch/MovieSearch'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

export const App = () =>
{
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout/>}>
                    <Route index element={<MovieHome/>}/>
                    <Route path="movies" element={<MovieSearch/>}/>
                    <Route path="movies/:movieId" element={<MovieDetails/>}>
                        <Route path="cast" element={<MovieCast/>}/>
                        <Route path="reviews" element={<MovieReviews/>}/>
                    </Route>
                    <Route path="*" element={<Navigate to="/"></Navigate>}/>
                </Route>
            </Routes>
        </>
    );
};