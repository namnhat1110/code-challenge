import { z } from 'zod';
import { FLOAT_NUMBER_STRING_REGEX } from './utils';

export type Maybe<T> = T | null | undefined;

export type CurrencyData = {
    currency: string;
    date: string;
    price: number;
};

export const schema = z.object({
    inputAmount: z
        .string()
        .min(1, { message: 'Input Amount is required' })
        .regex(FLOAT_NUMBER_STRING_REGEX),
    outputAmount: z
        .string()
        .min(1, { message: 'Output Amount is required' })
        .regex(FLOAT_NUMBER_STRING_REGEX)
});
