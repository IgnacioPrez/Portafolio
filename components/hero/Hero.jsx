'use client'
import Image from 'next/image'
import myPhoto from '../../public/1646184726007.png'
import './hero.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import { child, container } from '@/utilities/motion.utils'

const btnGit = {
  color: '#fff',
  width: '80%',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#000',
    transition: '.5s ease'
  },
  fontSize: '2rem'
}

const btnLinkedin = {
  color: '#0077B5',
  width: '70%',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#0077B5',
    color: '#fff',
    transition: '.5s ease'
  },
  fontSize: '2rem'
}

const btnMail = {
  color: '#FF3D3D',
  width: '70%',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#FF3D3D',
    color: '#fff',
    transition: '.5s ease'
  },
  fontSize: '2rem'
}

const Hero = () => {
  return (
    <div className="hero-container" id="init">
      <motion.div variants={container} initial="hidden" animate="visible" className="hero-info">
        <motion.h1 variants={child}>Ignacio Perez - Web Developer</motion.h1>
        <motion.p variants={child}>Front end React Developer</motion.p>
      </motion.div>
      <motion.div className="hero-image" variants={container} initial="hidden" animate="visible">
        <Image width={250} height={250} src={myPhoto} alt="I'm" />
        <motion.div className="links" variants={child}>
          <Link href="https://www.linkedin.com/in/perez-ignacio/" target="_blank">
            <LinkedInIcon sx={btnLinkedin} />
          </Link>
          <Link href="mailto:ignacio.perez.jobs@gmail.com">
            <EmailIcon sx={btnMail} />
          </Link>
          <Link href="https://github.com/IgnacioPrez" target="_blank">
            <GitHubIcon sx={btnGit} />
          </Link>
        </motion.div>
        <Button
          variant="contained"
          color="success"
          size="small"
          endIcon={<DownloadIcon />}
          href="../../CV-Perez-Ignacio-ESP.pdf"
          target="_blank"
        >
          CV
        </Button>
      </motion.div>
    </div>
  )
}

export default Hero
