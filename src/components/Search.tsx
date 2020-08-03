import React, { useState } from 'react';
import styled from 'styled-components';

const FormS = styled.form`
    display: flex;
    justify-content: center;
    margin: 20px 0;

    & .texty {
        width: 40vw;
        height: 2.5em;
        border-radius: 5px;
        border: 1px solid lightgray;
        background-color: #141414;
        padding: 0 15px;
        color: lightgray;
        font-family: 'Roboto';
        font-size: 1em;
        &::placeholder {
            color: lightgray;
        }

        &:hover {
            background-color: #242424;
        }
        &:focus {
            outline: none;
            border: 2px solid lightgray;
            background-color: #242424;
        }
    }
    & .submy {
        background-color: #141414;
        color: lightgray;
        border: 1px solid lightgray;
        padding: 0 15px;
        margin-left: 10px;
        border-radius: 5px;
        font-family: 'Roboto';
        font-size: 1em;
        cursor: pointer;

        &:active {
            background-color: #242424;
            transform: scale(1.1);
            border: 1px solid lightgray;
        }
        &:focus {
            outline: none;
            border: 1px solid lightgray;
        }
    }
`;

const Search = (props: any) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchInputChanges = (e: any) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue('')
    }

    const callSearchFunction = (e: any) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <FormS>
            <input
                className="texty"
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
                placeholder="Find your movie..."
            />
            <input
                className="submy"
                onClick={callSearchFunction} 
                type="submit"
                value="Search"
            />
        </FormS>
    )
}

export default Search;