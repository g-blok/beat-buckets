import React from 'react';

interface Playlist {
    title: string;
    sharing: string;
    uri: string;
    artwork_url: string | null;
}

interface CollectionItem {
    playlist: Playlist;
    caption?: string;
    created_at?: string;
    type?: string;
    user?: any;
    uuid?: string;
}

interface DataDisplayProps {
    data: { collection: CollectionItem[] } | null;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
    if (!data || !data.collection) {
        return <div>No data available</div>;
    }

    return (
        <div>
            <h2>Playlists</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Sharing</th>
                        <th>URI</th>
                        <th>Artwork</th>
                    </tr>
                </thead>
                <tbody>
                    {data.collection.map((item, index) => (
                        <tr key={index}>
                            <td>{item.playlist.title}</td>
                            <td>{item.playlist.sharing}</td>
                            <td>
                                <a href={item.playlist.uri} target="_blank" rel="noopener noreferrer">
                                    {item.playlist.uri}
                                </a>
                            </td>
                            <td>
                                <img
                                    src={item.playlist.artwork_url || './assets/image.png'}
                                    alt={item.playlist.title}
                                    width="50"
                                    height="50"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataDisplay;
