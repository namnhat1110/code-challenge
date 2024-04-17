import styled, { css } from 'styled-components';

const InputGenericStyle = css`
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    outline: none;
    border: none;
`;

export const CurrencyForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
        ${InputGenericStyle}
        font-weight: 600;
        width: 100%;
        height: 3rem;
        padding: 0 1rem;
    }
    select {
        ${InputGenericStyle}
        text-align: center;

        option {
            font-size: 1rem;
        }
    }
`;

export const InputWrapper = styled.div`
    gap: 0.5rem;
    border: 1px solid #333;
    border-radius: 0.5em;
    padding: 0.25rem;
    background-color: white;
`;
