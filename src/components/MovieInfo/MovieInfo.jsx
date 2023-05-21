import PropTypes from "prop-types";
import
{
    Movie,
    MovieArticleBlock,
    MovieMainBlock,
    MoviePageBlock,
    MovieImage,
    MovieLabel,
    MovieTitle,
    MovieTitleIndicator,
    MovieTitleError,
    MovieNameText,
    MoviePercentageText,
    MovieOverviewText,
    MovieGenresText,
}
from "./MovieInfo.styled";

const url = "https://image.tmdb.org/t/p/original/";

const MovieInfo = ({ movieInfo }) =>
{
    const { title, genres, overview, poster_path, release_date, vote_average } = movieInfo;

    const releaseDate = new Date(release_date);

    if (!title) return <MovieTitleIndicator>Loading...</MovieTitleIndicator>;
    
    return (
        <Movie>
            <MovieArticleBlock>
                {poster_path !== null ?
                    <>
                        <MovieImage src={url + poster_path} title={title} alt={title}/>
                    </>
                    :
                    <MovieTitleError>Image is not found!</MovieTitleError>
                }
                <MovieMainBlock>
                    <MoviePageBlock>
                        <MovieLabel>
                            {releaseDate.getFullYear() !== 'NaN' ?
                            <MovieNameText>{title + " " + '(' + releaseDate.getFullYear() + ')'}.</MovieNameText>
                            :
                            <MovieNameText>{title + "(-)"}.</MovieNameText>}
                        </MovieLabel>
                    </MoviePageBlock>
                    <MoviePageBlock>
                        <MovieLabel style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                            <MovieTitle style={{ paddingBottom: 0 }}>User scere:&nbsp;&nbsp;</MovieTitle>
                            <MoviePercentageText>{(vote_average * 10).toFixed()}%;</MoviePercentageText>
                        </MovieLabel>
                    </MoviePageBlock>
                    <MoviePageBlock>
                        <MovieLabel>
                            <MovieTitle>Overview</MovieTitle>
                            <MovieOverviewText>{overview}</MovieOverviewText>
                        </MovieLabel>
                    </MoviePageBlock>
                    <MoviePageBlock>
                        <MovieLabel>
                            <MovieTitle>Genres</MovieTitle>
                            <MovieGenresText>
                                {genres.map(genre => genre.name).join(', ')};
                            </MovieGenresText>
                        </MovieLabel>
                    </MoviePageBlock>
                </MovieMainBlock>
            </MovieArticleBlock>
        </Movie>
    );
};
MovieInfo.propTypes =
{
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        genres: PropTypes.string.isRequired,
        overview: PropTypes.string,
        poster_path: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        vote_average: PropTypes.number,
    }).isRequired,
};
export default MovieInfo;