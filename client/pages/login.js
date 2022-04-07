import React from "react"
import Box from '@mui/material/Box';
import styles from '../styles/Login.module.css'

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=8b945ef10ea24755b83ac50cede405a0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <Box
      className={styles.login}
      style={{ minHeight: "100vh" }}
    >
      <a className={styles.btn} href={AUTH_URL}>
        Login With Spotify
      </a>
    </Box>
  )
}