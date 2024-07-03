import { useState, useEffect } from 'react';

function App() {
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
        <div>
            {data ? <div>Data: {JSON.stringify(data)}</div> : <div>Loading...</div>}
        </div>
    );
}

export default App;

