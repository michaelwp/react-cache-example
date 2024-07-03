import { useState, useEffect } from 'react';

function App() {
    // @ts-ignore
    const [data, setData] = useState<string>(JSON.parse(localStorage.getItem('data')));

    useEffect(() => {
        if (!data) {
            const fetchData = async () => {
                const response = await fetch('https://api.example.com/data');
                const result = await response.json();
                localStorage.setItem('data', JSON.stringify(result));
                setData(result);
            };

            fetchData();
        }
    }, [data]);

    return (
        <div>
            {data ? <div>Data: {JSON.stringify(data)}</div> : <div>Loading...</div>}
        </div>
    );
}

export default App;
