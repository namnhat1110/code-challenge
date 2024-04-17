import React, { useMemo, useState } from 'react';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import { TbArrowsExchange } from 'react-icons/tb';
import { useGetCurrencyApi } from '../../hooks/useGetCurrencyApi';
import {
    FormInputRow,
    ExchangeWrapper,
    InfoRow,
    StyledButton,
    CustomSpinner
} from './CurrencyExchange.style';
import { calculateExchangeRate, getCurrentPrice } from '../../common/utils';
import { ExchangeRate } from '../ExchangeRate/ExchangeRate';

const BASE_URL = 'https://interview.switcheo.com/prices.json';

export const CurrencyExchange = () => {
    const {
        data,
        currencyOptions,
        inputOption,
        outputOption,
        loading,
        setInputOption,
        setOutputOption
    } = useGetCurrencyApi(BASE_URL, {
        timeout: 5000
    });

    const [isFirstInput, setIsFirstInput] = useState<boolean>(true);
    const [currencyAmount, setCurrencyAmount] = useState<number>(1);

    const { currentInputPrice, currentOutputPrice } = useMemo(() => {
        return getCurrentPrice({
            data,
            inputOption,
            outputOption
        });
    }, [data, inputOption, outputOption]);

    const { exchangeRate, finalInput, finalOutput } =
        useMemo(() => {
            return calculateExchangeRate(
                currencyAmount,
                currentInputPrice,
                currentOutputPrice,
                isFirstInput
            );
        }, [
            currencyAmount,
            currentInputPrice,
            currentOutputPrice,
            isFirstInput
        ]) || {};

    const handleChangeInputAmount = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCurrencyAmount(parseFloat(event.target.value) || 0);
        setIsFirstInput(true);
    };

    const handleChangeOutputAmount = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCurrencyAmount(parseFloat(event.target.value) || 0);
        setIsFirstInput(false);
    };

    const handleSwitchCurrency = () => {
        setIsFirstInput(true);
        setInputOption(outputOption);
        setOutputOption(inputOption);
    };

    const handleResetConverter = () => {
        setIsFirstInput(true);
        setCurrencyAmount(1);
    };

    if (loading) {
        return <CustomSpinner />;
    }

    return (
        <ExchangeWrapper>
            <FormInputRow>
                <CurrencyInput
                    inputName="inputAmount"
                    selectName="inputOptions"
                    label="Input Amount"
                    value={finalInput}
                    selectedOption={inputOption}
                    options={currencyOptions}
                    handleChangeAmount={handleChangeInputAmount}
                    handleSelectCurrency={(event) =>
                        setInputOption(event.target.value)
                    }
                />
                <div>
                    <button onClick={handleSwitchCurrency}>
                        <TbArrowsExchange />
                    </button>
                </div>
                <CurrencyInput
                    inputName="outputAmount"
                    selectName="outputOptions"
                    label="Output Amount"
                    value={finalOutput}
                    selectedOption={outputOption}
                    options={currencyOptions}
                    handleChangeAmount={handleChangeOutputAmount}
                    handleSelectCurrency={(event) =>
                        setOutputOption(event.target.value)
                    }
                />
            </FormInputRow>

            <InfoRow>
                <ExchangeRate
                    inputCurrency={inputOption}
                    outputCurrency={outputOption}
                    rate={exchangeRate}
                />

                <StyledButton onClick={handleResetConverter}>
                    Start over
                </StyledButton>
            </InfoRow>
        </ExchangeWrapper>
    );
};
