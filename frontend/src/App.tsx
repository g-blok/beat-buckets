import React, { useEffect, useState } from 'react';
import DataDisplay from './components/DataDisplay';
import Header from './components/Header';
import apiService from './services/apiService';

interface Playlist {
    title: string;
    sharing: string;
    uri: string;
    artwork_url: string | null;
}

interface CollectionItem {
    playlist: Playlist;
}

interface ParsedData {
    collection: CollectionItem[];
}

function App() {
    const [data, setData] = useState<ParsedData | null>(null);

    useEffect(() => {
        apiService.fetchData().then(response => {
            const parsedData: ParsedData = JSON.parse(response.data.data);
            setData(parsedData);
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
