import { useState } from 'react'
import Box from '@mui/material/Box';
import styles from "../../styles/Track.module.css"
import Image from 'next/image'
import Link from 'next/link'
import Typography from '@mui/material/Typography';
import AudioPlayer from "../../components/audioPlayer"
import TrackAlbum from '../../components/trackalbum';

import { IoIosArrowDropleftCircle } from "react-icons/io";

import { FaHeadset } from 'react-icons/fa';
import { Block } from '@mui/icons-material';

export default function handler() {
const [control, setControl ] = useState(false)

const handleControl = () => {
  setControl(!control)
}



  return (
   <div>
      <Link href="/">
      <IoIosArrowDropleftCircle style={{position: "absolute", fontSize: "2rem", color: "#fff", margin: "10px 30px"}} />
      </Link>
    <Box className={styles.main}>
     
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
          <Typography sx={{fontSize: {xs: "2rem"}, fontWeight: "bold"}} className={styles.paraColor}>New Song</Typography>
          <Typography className={styles.paraColor}>New music from Wizkid</Typography>
          <Typography className={styles.paraColor}>30 mins</Typography>
        </Box>
      </Box>
      <Box className={styles.track}>
        <TrackAlbum handleControl={handleControl} />
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
        <TrackAlbum handleControl={handleControl} />
         
      </Box>
      
    </Box>
    <AudioPlayer  control={control} />
   </div>
  )
}
