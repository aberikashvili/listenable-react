import React, { useEffect, useState } from "react";
import music from '../img/music.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../Css/songs.scss'

interface Track {
 name: string;
 listeners: number;
 image: {
  "#text": string;
 }[];
}
function PopularTopics() {
 const [songs, setSongs] = useState<Track[]>([]);
 useEffect(() => {
  fetchSongs();
 }, []);
 async function fetchSongs() {
  try {
   const apiKey = "a0acb8cde550ffd6ee2930acf20a72d0";
   const response = await fetch(
    "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a0acb8cde550ffd6ee2930acf20a72d0&format=json&limit=3"
   );
   if (!response.ok) {
    throw new Error("Network response was not ok");
   }
   const data = await response.json();
   if (!data.tracks || !data.tracks.track) {
    throw new Error("Data structure from API is unexpected");
   }
   const songData = data.tracks.track.map((track: { name: any; listeners: string; image: { [x: string]: any; }[]; }) => ({
    name: track.name,
    listeners: parseInt(track.listeners, 10),
    image: track.image[2]["#text"] || "",
   }));
   setSongs(songData);
  } catch (error) {
   console.error("Error fetching data:", error);
  }
 }
 return (
  <div>
    <div className="container">
    <div className="row-container">
   <p className= "first-element">Popular Episodes</p>
   <p className= "second-element">See all</p>
   <p className="third-element">Daily<ArrowDropDownIcon style={{cursor: 'pointer'}} /> </p>
   </div>
   <ul className="song-list">
 {songs.map((song, index) => (
  <li key={index} className="song-item">
   <img className="song-picture" src={music} alt={song.name} />
   <div className="song-details">
    <p className="song-name">{song.name}</p>
    <p className="song-listeners">Listeners: {song.listeners}</p>
   </div>
  </li>
 ))}
</ul>
  </div>
  </div>
 );
}
export default PopularTopics;