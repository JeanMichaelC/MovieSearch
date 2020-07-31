import * as React from 'react';
import styled from 'styled-components';

const DEFAULT_IMG = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const StyledMovieAnchor = styled.a`
    text-decoration: none;
    color: lightgray;
`;

interface MovieCardProps {
    backImgUrl: string;
} 
const StyledMovieCard = styled.div<MovieCardProps>`
    margin: 15px;
    width: 22vw;
    background-image: ${
        (props: any) => (props.backImgUrl === 'N/A' ? `url(${DEFAULT_IMG})` : `url(${props.backImgUrl})`)
    };
`;

const Movie = (props: any) => {
    return (
        <StyledMovieAnchor target="_blank" href={`https://www.imdb.com/title/${props.movie.imdbID}/`}>
            <StyledMovieCard backImgUrl={props.movie.Poster}>
                <h2>{props.movie.Title}</h2>
                {/* <div>
                    <img width="200" src={poster} alt={`The movie title is: ${props.movie.Title}`} />
                </div> */}
                <p>{props.movie.Type}</p>
                <p>{props.movie.Year}</p>
            </StyledMovieCard>
        </StyledMovieAnchor>
    )
}

export default Movie;