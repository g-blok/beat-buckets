import React from 'react';

interface Playlist {
    title: string;
    sharing: string;
    uri: string;
    permalink_url: string;
    artwork_url: string | null;
    track_count: number;
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
                        <th></th>
                        <th>Title</th>
                        <th>Sharing</th>
                        <th>Track Count</th>
                    </tr>
                </thead>
                <tbody>
                    {data.collection.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <img
                                    src={item.playlist.artwork_url || 'src/assets/default_artwork.png'}
                                    alt={item.playlist.title}
                                    width="50"
                                    height="50"
                                />
                            </td>
                            <td>
                                <a href={item.playlist.permalink_url} target="_blank" rel="noopener noreferrer">
                                    {item.playlist.title}
                                </a>
                            </td>
                            <td>{item.playlist.sharing}</td>
                            <td>
                                {item.playlist.track_count}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataDisplay;
