import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Stairway to Heaven', duration: '4:05' },
        { title: 'Smoke on the Water', duration: '3:35' },
        { title: 'Enter Sandman', duration: '5:07' },
        { title: 'Rock You Like A Hurricane', duration: '3:08' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});