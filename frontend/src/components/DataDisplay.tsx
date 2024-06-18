import React from 'react';

interface DataDisplayProps {
    data: string | null;
}

function DataDisplay({ data }: DataDisplayProps) {
    // Ensure data is a string or transform it to a string for rendering
    const displayData = typeof data === 'string' ? data : JSON.stringify(data);

    return (
        <div>
            <h2>Data from Backend</h2>
            <p>{displayData}</p>
        </div>
    );
}

export default DataDisplay;
