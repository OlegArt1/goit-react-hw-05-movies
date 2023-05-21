import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesReviews } from "services/Api";
import
{
    Review,
    ReviewList,
    ReviewItem,
    ReviewArticleBlock,
    ReviewPageBlock,
    ReviewLabel,
    ReviewTitle,
    ReviewTitleError,
    ReviewText,
}
from "./MovieReviews.styled";

const MovieReviews = () =>
{
    const [reviews, setReviews] = useState([]);
    
    const { movieId } = useParams();

    useEffect(() =>
    {
        fetchDownloadAllMovieReview();

    }, [movieId]);

    const fetchDownloadAllMovieReview = async () =>
    {
        try
        {
            const response = await fetchMoviesReviews(movieId);

            setReviews(response.results);
        }
        catch (error)
        {
            console.log("\nError - ", error.message + ";");

            alert("Error! Status code 404!");
        }
    }
    return (
        <Review>
            {reviews.length !== 0 ?
                <ReviewList>
                    {reviews.map(data =>
                    {
                        return (
                            <ReviewItem>
                                <ReviewArticleBlock id={data.id}>
                                    <ReviewPageBlock>
                                        <ReviewLabel>
                                            <ReviewTitle>Author:&nbsp;&nbsp;</ReviewTitle>
                                            <ReviewText style={{ color: 'red' }}>{data.author}.</ReviewText>
                                        </ReviewLabel>
                                    </ReviewPageBlock><ReviewPageBlock>
                                        <ReviewLabel>
                                            <ReviewTitle>Username:&nbsp;&nbsp;</ReviewTitle>
                                            <ReviewText style={{ color: 'magenta' }}>{data.author_details.username}.</ReviewText>
                                        </ReviewLabel>
                                    </ReviewPageBlock>
                                    <ReviewPageBlock>
                                        <ReviewLabel>
                                            <ReviewTitle>Created at:&nbsp;&nbsp;</ReviewTitle>
                                            <ReviewText style={{ color: 'green' }}>{data.created_at};</ReviewText>
                                        </ReviewLabel>
                                    </ReviewPageBlock>
                                    <ReviewPageBlock>
                                        <ReviewLabel>
                                            <ReviewTitle>Updated at:&nbsp;&nbsp;</ReviewTitle>
                                            <ReviewText style={{ color: 'blue' }}>{data.updated_at};</ReviewText>
                                        </ReviewLabel>
                                    </ReviewPageBlock>
                                    <ReviewPageBlock>
                                        <ReviewLabel>
                                            <ReviewTitle>Content:&nbsp;&nbsp;</ReviewTitle>
                                            <ReviewText style={{ lineHeight: 1.5, color: 'indigo' }}>{data.content}.</ReviewText>
                                        </ReviewLabel>
                                    </ReviewPageBlock>
                                </ReviewArticleBlock>
                            </ReviewItem>
                        );
                    })}
                </ReviewList>
                :
                <ReviewTitleError>Reviews is not found!</ReviewTitleError>
            }
        </Review>
    );
};
export default MovieReviews;