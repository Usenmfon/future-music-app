import { Typography, Box } from '@mui/material';
import Image from 'next/image'
import styles from "../styles/Trackalbum.module.css"

function TrackAlbum({handleControl}) {
 
    return (
        <>
        <Box className={styles.trackTitle} onClick={handleControl}>
           <Box sx={{display: "flex", justifyContent: 'space-between'}}>
              <Image
              className={styles.zIndex}
                src="/images/logo/music.png"
                alt="Picture of the author"
                width={30}
                height={30}
              />
                <Box sx={{ml: 2}}>
                    <Typography className={styles.trackmusic}>No Stress</Typography>
                    <Typography  className={styles.trackmusic}>Wizkid me me me wjike poay</Typography>
                </Box>

                
           </Box>
           <Typography className={styles.trackmusic}> 3:50 </Typography>
            
          </Box>
        </>
    )
}

export default TrackAlbum