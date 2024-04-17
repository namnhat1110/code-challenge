import React from 'react';
import { Maybe } from '../../common/types';

export const ExchangeRate = ({
    inputCurrency,
    outputCurrency,
    rate
}: {
    inputCurrency: Maybe<string>;
    outputCurrency: Maybe<string>;
    rate: Maybe<number>;
}) => {
    return (
        <span>
            1 {inputCurrency} = <span>{rate}</span> {outputCurrency}
        </span>
    );
};
