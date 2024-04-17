import styled, { createGlobalStyle, css } from 'styled-components';

const defaultStyle = css`
    margin: 0;
    background: linear-gradient(-45deg, #dab4a9, #d193ab, #7fc0d8, #7adac3);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;

    div {
        display: flex;
        flex-direction: row;
    }

    font-family: 'Inter', sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-variation-settings: 'slnt' 0;
    color: #2b2c34;
`;

export const GlobalStyle = createGlobalStyle`

    body {
        ${defaultStyle}
    }

    @keyframes gradient {
        0%  {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
        background-position: 0% 50%;
    }
}`;
