import * as React from 'react';
import styled from 'styled-components';

const HeaderS = styled.header`
    background-color: #0066cc;
    background-color: #141414;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    font-weight: 500;
    font-family: 'Recursive';
    color: lightblue;
    padding: 15px;
`;


const Header = (props: any) => {
    return (
        <HeaderS>
            <h2>{props.text}</h2>
        </HeaderS>
    );
};

export default Header;