'use client'
import { useState } from 'react'
import './navbar.css'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@mui/material'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  // lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        delay: 1.2
      }
    }
  }
  return (
    <header>
      <div className="log-container">
        <Button onClick={() => setOpen(!open)} size='large'>
          <MenuOpenIcon sx={{ fontSize: '2rem', color: 'rgb(178, 178, 178)' }}/>
        </Button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            variants={item}
            initial={{ height: 0, opacity: 0, width: 0 }}
            animate={{ height: '100vh', opacity: 1, width: '40vh' }}
            transition={{ duration: 0.5 }}
            exit="exit"
          >
            <ul>
              <li>
                <motion.a
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: 'easeInOut',
                      delay: 1
                    }
                  }}
                  href="#init"
                >
                  Inicio
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: 'easeInOut',
                      delay: 0.8
                    }
                  }}
                  href="#about"
                >
                  Sobre mi
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: 'easeInOut',
                      delay: 0.6
                    }
                  }}
                  href="#skills"
                >
                  Tecnologías
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: 'easeInOut',
                      delay: 0.4
                    }
                  }}
                  href="#projects"
                >
                  Proyectos
                </motion.a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
