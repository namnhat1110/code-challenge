import { CurrencyData, Maybe } from './types';

export const FLOAT_NUMBER_STRING_REGEX = /^-?\d*(\.\d{1,2})?$/;

export const getCurrencyOptions = (data: Maybe<CurrencyData[]>) => {
    return data?.map((item) => item.currency);
};

export const getDefaultCurrency = (data: Maybe<CurrencyData[]>) => {
    return data?.find((item) => item.price === 1)?.currency;
};

export const calculateExchangeRate = (
    amount: number,
    inputRate: Maybe<number>,
    outputRate: Maybe<number>,
    isInput: boolean
) => {
    if (!inputRate || !outputRate) return;
    let inputAmount: number, outputAmount: number;

    const exchangeRate = inputRate / outputRate;
    if (isInput) {
        inputAmount = amount;
        outputAmount = amount * exchangeRate;
    } else {
        outputAmount = amount;
        inputAmount = amount / exchangeRate;
    }

    const finalInput = inputAmount.toString();
    const finalOutput = outputAmount.toString();

    return { exchangeRate, finalInput, finalOutput };
};

export const getCurrentPrice = ({
    data,
    inputOption,
    outputOption
}: {
    data: Maybe<CurrencyData[]>;
    inputOption: Maybe<string>;
    outputOption: Maybe<string>;
}) => {
    const currentInputPrice = data?.find(
        (item) => item.currency === inputOption
    )?.price;
    const currentOutputPrice = data?.find(
        (item) => item.currency === outputOption
    )?.price;

    return { currentInputPrice, currentOutputPrice };
};

export const formatInputCurrency = (original: number) => {
    let amount = String(original);
    if (amount === '0') {
        return '0';
    }

    let value = amount.replace(/[-,]/g, '');

    if (value.includes('.')) {
        const splits = value.split('.');
        value = splits[0] + '.' + splits[1].replace(/[-,]/g, '');
    }

    return value;
};
