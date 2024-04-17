import React from 'react';

import { CurrencyExchange } from './components/CurrencyExchange/CurrencyExchange';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

function App() {
    return (
        <AppWrapper className="App">
            <GlobalStyle />
            <CurrencyExchange />
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`;
