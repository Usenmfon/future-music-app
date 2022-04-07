import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import styles from "../../styles/Track.module.css"
import Image from 'next/image'
import Link from 'next/link'
import Typography from '@mui/material/Typography';
import AudioPlayer from "../../components/audioPlayer"
import TrackAlbum from '../../components/trackalbum';
import Controls from '../../components/controls';
import Details from '../../components/details';
import Player from '../../components/player';

import { IoIosArrowDropleftCircle } from "react-icons/io";

import { FaHeadset } from 'react-icons/fa';
import { Block } from '@mui/icons-material';

export default function Handler() {
const [control, setControl ] = useState(false)

const handleControl = () => {
  setControl(!control)
}


const [songs] = useState([
  {
    title: "No Stress",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: "../music/stress.mp3",
  },
  {
    title: "Essence",
    artist: "Wizkid",
    img_src: "./images/music.pngg",
    src: "../music/essence.mp3",
  },
  {
    title: "Love",
    artist: "Wizkid",
    img_src: "./images/music.pngg",
    src: "../music/love.mp3",
  },
 
  {
    title: "Mai",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: "../music/mai.mp3",
  },
  {
    title: "Ginger",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: "../music/ginger.mp3",
  },
  {
    title: "Roma",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: "../music/roma.mp3",
  },
  {
    title: "Reckless",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: "../music/reckless.mp3",
  },
  {
    title: "Wine",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: "../music/wine.mp3",
  },
  {
    title: "Sweet",
    artist: "Wizkid",
    img_src: "./images/music.png",
    src: "../music/sweet.mp3",
  },
  {
    title: "DJ Foreign music",
    artist: "Dj",
    img_src: "./images/music.png",
    src: "../music/dj.mp3"
  },
]);

console.log(songs)

const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [nextSongIndex, setNextSongIndex] = useState(0);


useEffect(() => {
  setNextSongIndex(() => {
    if (currentSongIndex + 1 > songs.length - 1) {
      return 0;
    } else {
      return currentSongIndex + 1;
    }
  });
}, [currentSongIndex]);



  return (
   <div>
      <Link href="/">
      <IoIosArrowDropleftCircle style={{position: "absolute", fontSize: "2rem", color: "#fff", margin: "10px 30px"}} />
      </Link>
    <Box className={styles.main} >
     
      <Box className={styles.backgroundColor} sx={{ display: {xs: "block", md: "block"}, padding: {xs:2, md:10}}}>
        <Box>
          <Image
          className={styles.zIndex}
            src="/images/logo/music.png"
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </Box>
        <Box sx={{mt: {xs: 0,md: 4}, mb: {xs: 0, md: 2}}}>
          <Typography sx={{fontSize: {xs: "2rem"}, fontWeight: "bold", mt: 4}} className={styles.paraColor}>New Song</Typography>
          <Typography className={styles.paraColor}>New music from Wizkid</Typography>
          <Typography className={styles.paraColor}>30 mins</Typography>
        </Box>
      </Box>
      <Box className={styles.track}>
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
        {/* <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl}/>
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} />
        <TrackAlbum handleControl={handleControl} /> */}
         
      </Box>
      
    </Box>
    <AudioPlayer  control={control} />
   </div>
  )
}
