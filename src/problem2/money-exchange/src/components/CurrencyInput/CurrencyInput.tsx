import React from 'react';
import { CurrencyForm, InputWrapper } from './CurrencyInput.style';

const CurrencyInput = ({
    inputName,
    selectName,
    label,
    value,
    options,
    selectedOption,
    handleChangeAmount,
    handleSelectCurrency
}: {
    inputName: 'inputAmount' | 'outputAmount';
    selectName: 'inputOptions' | 'outputOptions';
    label: string;
    value?: string | undefined;
    options: string[] | undefined;
    selectedOption: string | undefined;
    handleChangeAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSelectCurrency: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
    return (
        <CurrencyForm>
            <label htmlFor={inputName}>{label}</label>
            <InputWrapper>
                <input
                    type="text"
                    name={inputName}
                    id={inputName}
                    value={value}
                    onChange={handleChangeAmount}
                />
                <select
                    name={selectName}
                    value={selectedOption}
                    onChange={handleSelectCurrency}
                >
                    {options &&
                        options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                </select>
            </InputWrapper>
        </CurrencyForm>
    );
};

export default CurrencyInput;
