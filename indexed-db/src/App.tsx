import { useState, useEffect } from 'react';
import { openDB } from 'idb';

const DATABASE_NAME = 'my-database';
const STORE_NAME = 'my-store';

const initDB = async () => {
    return openDB(DATABASE_NAME, 1, {
        upgrade(db) {
            db.createObjectStore(STORE_NAME);
        }
    });
};

const setDataInDB = async (key: any, val: any) => {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.store.put(val, key);
    await tx.done;
};

const getDataFromDB = async (key: any) => {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const val = await tx.store.get(key);
    await tx.done;
    return val;
};

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let cachedData = await getDataFromDB('data');
            if (!cachedData) {
                const response = await fetch('https://api.example.com/data');
                cachedData = await response.json();
                await setDataInDB('data', cachedData);
            }
            setData(cachedData);
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
