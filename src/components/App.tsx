import React, {FC} from 'react';
import styled from 'styled-components';
import Header from './Header';

const StyledH1 = styled.h1`
    color: blueviolet;
    font-family: 'Open Sans';
`;

const App: FC = () => {
    return (
        <Header text="MovieSearch" />
    )
}

export default App;