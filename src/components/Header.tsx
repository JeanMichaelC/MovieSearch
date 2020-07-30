import * as React from 'react';
import styled from 'styled-components';

const HeaderS = styled.header`
    background-color: #0066cc;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 20px;
    cursor: pointer;
`;


const Header = (props: any) => {
    return (
        <HeaderS>
            <h2>{props.text}</h2>
        </HeaderS>
    );
};

export default Header;