import { useState, useEffect } from "react";
import { fetchAllMovies } from "services/Api";
import
{
    ListContainer,
    List,
    ListItem,
    ListBlock,
    ListTitle,
    ListTitleIndicator,
    ListLink,
}
from "./MovieHome.styled";

const Home = () =>
{
    const [MOVIES, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>
    {
        fetchDownloadAllMovies();

    }, []);
    
    const fetchDownloadAllMovies = async () =>
    {
        try
        {
            const response = await fetchAllMovies();

            setMovies(response.results);
            
            setIsLoading(true);
        }
        catch (error)
        {
            console.log("\nError - ", error.message + ";");

            alert("Error! Network error!");
        }
        finally
        {
            setIsLoading(false);
        }
    }
    return (
        <div>
            {isLoading ?
                <ListTitleIndicator>Loading...</ListTitleIndicator>
                :
                (<ListContainer>
                    <ListTitle>Trending today</ListTitle>
                    <List>
                        {MOVIES.map(data =>
                        {
                            return (
                                <ListItem key={data.id}>
                                    <ListBlock>
                                        <ListLink to={`/movies/${data.id}`}>{data.title}</ListLink>
                                    </ListBlock>
                                </ListItem>
                            );
                        })}
                    </List>
                </ListContainer>)
            }
        </div>
    );
};
export default Home;