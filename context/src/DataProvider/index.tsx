import { createContext, useState, useEffect, useContext } from 'react';

const DataContext = createContext(null);

export const useData = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }: any) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.example.com/data');
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};
