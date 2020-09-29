import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Nightdrive with You', artist: 'Anoraak', album: 'Nightdrive with You', duration: '5:28' },
    { title: 'A Real Hero', artist: 'College ft. Electic Youth', album: 'A Real Hero', duration: '4:28' },
    { title: 'Blue Light', artist: 'Bloc Party', album: 'Silent Alarm', duration: '2:46' },
    { title: 'We Own The Sky', artist: 'M83', album: 'Saturdays = Youth', duration: '5:05' },
    { title: 'Infinity Milk', artist: 'Dananananaykroyd', album: 'Hey Everyone!', duration: '4:25' }, { title: 'Welcome Wagon', artist: 'Fang Island', album: 'Fang Island', duration: '2:50' }
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  } else {
    return selectedSong;
  }
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})

