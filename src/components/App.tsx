import React, {FC, useState, useEffect} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;    
        background-color: #fefefe;
        background-color: #141414;
    }
`;

const StyledMoviesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=fresh&apikey=4a3b711b';

const App: FC = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                setMovies(jsonResponse.Search);
                setLoading(false);
            });
    }, []);

    const search = (searchValue: any) => {
        setLoading(true);
        setErrorMessage(null);

        fetch(`https://www.omdbapi.com/?s=${searchValue}&page=1&apikey=4a3b711b`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                    setLoading(false);
                } 
                setErrorMessage(jsonResponse.Error);
                setLoading(false);
            })
    }

    return (
        <>
            <GlobalStyle />
            <Header text="MovieSearch" />
            <Search search={search} />
            <StyledMoviesList>
                {loading && !errorMessage ? (
                    <span>loading...</span>
                ) : errorMessage ? (
                    <div>{errorMessage}</div>
                ) : (
                    movies.map((movie: any, index: any) => (
                        <Movie key={`${index}-${movie.Title}`} movie={movie} />
                    ))
                )}
            </StyledMoviesList>
        </>
    )
}

export default App;