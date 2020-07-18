import React, {FC} from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    color: blueviolet;
    font-family: 'Open Sans';
`;

const App: FC = () => {
    return (
        <StyledH1>Hello World</StyledH1>
    )
}

export default App;