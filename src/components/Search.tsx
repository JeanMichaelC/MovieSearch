import React, { useState } from 'react';
import styled from 'styled-components';

const FormS = styled.form`
    display: flex;
    justify-content: center;
    margin: 40px 0 20px;

    & .texty {
        width: 40vw;
        height: 2em;
        border-radius: 5px;
        border: 1px solid gray;
        background-color: #eee;
    }
    & .submy {
        background-color: lightblue;
        color: #555;
        border: none;
        margin-left: 10px;
        border-radius: 5px;
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