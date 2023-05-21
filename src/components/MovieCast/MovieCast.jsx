import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCasts } from "services/Api";
import
{
    Cast,
    CastList,
    CastItem,
    CastArticleBlock,
    CastMainBlock,
    CastPageBlock,
    CastIconBlock,
    CastImage,
    CastLabel,
    CastTitle,
    CastTitleError,
    CastText,
    CastIcon,
}
from "./MovieCast.styled";

const imageUrl = "https://image.tmdb.org/t/p/original/";

const MovieCast = () =>
{
    const [cast, setCast] = useState([]);
    
    const { movieId } = useParams();

    useEffect(() =>
    {
        const fetchDownloadAllMovieCast = async () =>
        {
            try
            {
                const response = await fetchMoviesCasts(movieId);

                setCast(response.cast);
            }
            catch (error)
            {
                console.log("\n Error - ", error.message + ";");

                alert("Error! Status code 404!");
            }
        }        
        fetchDownloadAllMovieCast();

    }, [movieId]);

    return (
        <Cast>
            {cast.length !== 0 ?
                <CastList>
                    {cast.map(data =>
                    {
                        return (                      
                            <CastItem id={data.credit_id}>
                                {data.profile_path !== null &&
                                    (<CastArticleBlock id={data.id}>
                                        <CastImage id={data.cast_id} src={imageUrl + data.profile_path} title={data.name} alt={data.name}/>
                                        <CastMainBlock>
                                            <CastPageBlock>
                                                <CastLabel>
                                                    <CastTitle>Name:&nbsp;&nbsp;</CastTitle>
                                                    <CastText style={{ color: 'red' }}>{data.name};</CastText>
                                                </CastLabel>
                                            </CastPageBlock>
                                            <CastPageBlock>
                                                <CastLabel>
                                                    <CastTitle>Character:&nbsp;&nbsp;</CastTitle>
                                                    <CastText style={{ color: 'blue' }}>{data.character};</CastText>
                                                </CastLabel>
                                            </CastPageBlock>
                                            <CastPageBlock>
                                                <CastLabel style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "row" }}>
                                                    <CastTitle>Popularity:&nbsp;&nbsp;</CastTitle>
                                                    <CastText style={{ color: 'green' }}>{data.popularity};</CastText>
                                                    <CastIconBlock>
                                                        <CastIcon>
                                                            <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z" fill="orange"/>
                                                        </CastIcon>
                                                        <CastIcon>
                                                            <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z" fill="orange"/>
                                                        </CastIcon>
                                                        <CastIcon>
                                                            <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z" fill="orange"/>
                                                        </CastIcon>
                                                    </CastIconBlock>
                                                </CastLabel>
                                            </CastPageBlock>
                                        </CastMainBlock>
                                    </CastArticleBlock>
                                )}
                            </CastItem>
                        );
                    })}
                </CastList>
                :
                <CastTitleError>Casts is not found!</CastTitleError>
            }
        </Cast>
    );
};
export default MovieCast;