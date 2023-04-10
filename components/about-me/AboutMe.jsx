'use client'
import './about.css'
import aboutImg from '../../public/header-img.svg'
import { motion } from 'framer-motion'
import Image from 'next/image'
const AboutMe = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i }
    })
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  }
  return (
    <article className="about-container" id="about">
      <h2>Sobre mi</h2>
      <motion.div className="about-info" variants={container} initial="hidden" animate="visible">
        <motion.p variants={child}>
          Me llamo Perez Carlos Ignacio, tengo 22 años y me encanta el mundo de la programación. Empecé estudiando
          Psicología a mis 18 años en la Facultad de Filosofía y Letras - UNT, a los 21 años mediante curiosidad e
          influencias tuve la víva interacción con este mundo completamente distinto y a su vez fascinante, a partir de
          este punto el trayecto fue muy duro en lo que respecta a realizar cursos, revisar documentaciones, mirar
          videos, practicar constantemente,momentos de frustraciones, realizar proyectos, participar en simulaciones de
          trabajo y un enorme etcétera. Al día de la fecha puedo decir que,me considero listo y capaz de poder estudiar,
          comprender y adaptarme, a su debido tiempo, a cualquier tecnología que resulte necesaria para la ocasion y el
          lugar que corresponda.
        </motion.p>
        <div className="img-cont">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -30 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            <Image width={200} height={200} alt="about-img" src={aboutImg} />
          </motion.div>
        </div>
      </motion.div>
    </article>
  )
}

export default AboutMe
