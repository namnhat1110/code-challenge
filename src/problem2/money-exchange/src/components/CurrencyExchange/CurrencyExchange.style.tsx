import styled from 'styled-components';

export const ExchangeWrapper = styled.section`
    display: flex;
    max-width: 90%;
    flex-direction: column;
    align-items: center;
    background-color: #f1f1f1;
    padding: 1rem;
    gap: 1rem;
    border-radius: 3rem;
    box-shadow: 0px 30px 15px -5px rgba(0, 0, 0, 0.1);
`;

export const FormInputRow = styled.div`
    align-items: center;
    gap: 1rem;

    height: 100%;
    padding: 1rem;

    button {
        border: none;
        background-color: #f1f1f1;

        :hover {
            background-color: #d2cccc;
            border-radius: 50%;
            transition-delay: 0.1s;
            cursor: pointer;
        }

        > svg {
            margin-top: 2.5rem;
            height: 2.5rem;
            width: 2.5rem;
        }
    }

    @media (max-width: 1200px) {
        flex-direction: column;
        gap: 0;
    }
`;

export const InfoRow = styled.div`
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    color: #232946;

    > span > span {
        color: #6246ea;
    }
`;

export const StyledButton = styled.button`
    min-width: 6rem;
    padding: 1rem 2rem;
    background-color: #6246ea;
    border: none;
    border-radius: 1em;
    color: #f1f1f1;

    font-family: 'Rubik', sans-serif;
    font-weight: 600;

    :hover {
        cursor: pointer;
    }
`;

export const CustomSpinner = styled.span`
    width: 4rem;
    height: 4rem;
    border: 10px solid #fffe;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 2s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
