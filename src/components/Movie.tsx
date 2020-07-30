import * as React from 'react';
import styled from 'styled-components';

const MovieCardS = styled.div`
    padding: 5px 25px 10px 25px;
    max-width: 25%;
`;

const DEFAULT_IMG = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = (props: any) => {
    const poster = props.movie.Poster === "N/A" ? DEFAULT_IMG : props.movie.Poster;

    return (
        <MovieCardS>
            <h2>{props.movie.title}</h2>
            <div>
                <img width="200" src={poster} alt={`The movie title is: ${props.movie.title}`} />
            </div>
            <p>{props.movie.Year}</p>
        </MovieCardS>
    )
}

export default Movie;