import React, { useState } from 'react';
import styled from 'styled-components';

const FormS = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
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
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input
                onClick={callSearchFunction} 
                type="submit"
                value="SEARCH"
            />
        </FormS>
    )
}

export default Search;