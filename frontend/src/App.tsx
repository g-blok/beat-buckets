import React, { useEffect, useState } from 'react';
// import './styles/App.css';
import DataDisplay from './components/DataDisplay';
import Header from './components/Header';
import apiService from './services/apiService';

interface DataResponse {
    data: string;
}

function App() {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        apiService.fetchData().then(response => {
            setData(response.data);
        });
    }, []);

    return (
        <div className="App">
            <Header />
            <DataDisplay data={data} />
        </div>
    );
}

export default App;
