import * as React from 'react';
import styled from 'styled-components';

const DEFAULT_IMG = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const StyledMovieAnchor = styled.a`
    margin: 15px;
    text-decoration: none;
    color: #eee;

    &:hover {
        transform: scale(1.1);
    }
`;

interface MovieCardProps {
    backImgUrl: string;
} 
const StyledMovieCard = styled.div<MovieCardProps>`
    width: 22vw;
    height: 33vw;
    border-radius: 10px;

    position: relative;
    & div {
        position: absolute;
        bottom: 0;
    }

    & h3 {
        padding: 10px;
        text-align: right;
        font-family: 'Roboto';
        font-weight: 600;

        text-shadow: 5px 5px 15px black;
    }

    & h2, p {
        font-family: 'Roboto';
        width: 100%;
        padding: 0 10px;
        text-shadow: 5px 5px 15px black;
    }


    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
    ${
        (props: any) => (props.backImgUrl === 'N/A' ? `url(${DEFAULT_IMG})` : `url(${props.backImgUrl})`)
    };
    background-repeat: no-repeat;
    background-size: cover;


    &:hover {
        filter: brightness(140%);
    }
`;

const Movie = (props: any) => {
    return (
        <StyledMovieAnchor target="_blank" href={`https://www.imdb.com/title/${props.movie.imdbID}/`}>
            <StyledMovieCard backImgUrl={props.movie.Poster}>
                <h3>{props.movie.Type}</h3>
                <div>
                    <h2>{props.movie.Title}</h2>
                    <p>{props.movie.Year}</p>
                </div>
            </StyledMovieCard>
        </StyledMovieAnchor>
    )
}

export default Movie;