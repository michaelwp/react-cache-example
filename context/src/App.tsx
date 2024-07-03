import { useData, DataProvider } from './DataProvider';

function App() {
    const data = useData();

    return (
        <div>
            {data ? <div>Data: {JSON.stringify(data)}</div> : <div>Loading...</div>}
        </div>
    );
}

export default () => (
    <DataProvider>
        <App />
    </DataProvider>
);