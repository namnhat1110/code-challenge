import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { CurrencyData, Maybe } from '../common/types';
import { getCurrencyOptions, getDefaultCurrency } from '../common/utils';

export const useGetCurrencyApi = (url: string, params?: AxiosRequestConfig) => {
    const [data, setData] = useState<Maybe<CurrencyData[]>>(null);
    const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
    const [inputOption, setInputOption] = useState<string>();
    const [outputOption, setOutputOption] = useState<string>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response: AxiosResponse<CurrencyData[]> = await axios.get(
                    url,
                    params
                );

                setData(response.data);
                const defaultCurrency = getDefaultCurrency(response.data);
                const allCurrencies = getCurrencyOptions(response.data) || [];
                setCurrencyOptions(allCurrencies);
                setInputOption(allCurrencies[0]);
                setOutputOption(defaultCurrency);
            } catch (error) {
                setError('Error getting the data');
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            }
        };

        fetchData();
    }, []);

    return {
        data,
        currencyOptions,
        inputOption,
        outputOption,
        loading,
        error,
        setInputOption,
        setOutputOption
    };
};
