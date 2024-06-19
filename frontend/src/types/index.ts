export interface Playlist {
    title: string;
    sharing: string;
    uri: string;
    permalink_url: string;
    artwork_url: string | null;
    track_count: number;
}

export interface CollectionItem {
    playlist: Playlist;
    caption?: string;
    created_at?: string;
    type?: string;
    user?: any;
    uuid?: string;
}