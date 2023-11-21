/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, createContext, useContext } from 'react';
import music from '../images/music.png'
import '../Css/song.scss';

interface Track {
  name: string;
  listeners: number;
  image: {
    "#text": string;
  }[];

  retentionAmount: number;
  retentionRate: number;
  viewCount: number; 
}
const SongsContext = createContext<Track[]>([]);
export const useSongsContext = () => useContext(SongsContext);
function PopularSegment() {
  const [songs, setSongs] = useState<Track[]>([]);
  useEffect(() => {
    fetchSongs();
  }, []);
  async function fetchSongs() {
    try {
      const response = await fetch(
        'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a0acb8cde550ffd6ee2930acf20a72d0&format=json&limit=8'
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (!data.tracks || !data.tracks.track) {
        throw new Error('Data structure from API is unexpected');
      }
      const songData = data.tracks.track.map((track: { name: any; listeners: string; image: { [x: string]: any }[] }) => ({
        name: track.name,
        listeners: parseInt(track.listeners, 10),
        image: track.image[2]['#text'] || '',
      
        retentionAmount: Math.floor(Math.random() * 100), 
        retentionRate: Math.random().toFixed(2), 
        viewCount: Math.floor(Math.random() * 1000), 
      }));
      setSongs(songData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <SongsContext.Provider value={songs}>
     
        <div className="container">
         
            <h3 className="first-element">Popular Segments</h3>
          
          <ul className="song-list">
            {songs.map((song, index) => (
              <li key={index} className="song-item">
                <img className="song-picture" src={music} alt={song.name} />
               
                  <p className="song-name">{song.name}</p>
                
                  <p className="song-retention"> <span style={{color: 'grey'}}>5min retention: </span> {song.retentionAmount} %</p>
                  <p className="retention-amount"> <span style={{color: 'grey'}}>Retention rate:</span> {song.retentionRate} %</p>
                  <p className="view-count"> <span style={{color: 'grey'}}>View count: </span> {song.viewCount} K</p>
               
              </li>
            ))}
          </ul>
        </div>
     
    </SongsContext.Provider>
  );
}
export default PopularSegment;
