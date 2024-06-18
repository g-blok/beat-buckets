import React from 'react';

interface DataDisplayProps {
    data: string | null;
}

function DataDisplay({ data }: DataDisplayProps) {
    return (
        <div>
            <h2>Data from Backend</h2>
            <p>{data}</p>
        </div>
    );
}

export default DataDisplay;
