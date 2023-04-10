'use client'
import { allImages } from '@/utilities/allImages'
import './skills.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { containerDrag, itemDrag } from '@/utilities/motion.utils'
export const Skills = () => {
  const constraintsRef = useRef(null)

  return (
    <section className="container-skills" id="skills">
      <p>Tecnologías <span>¿Que pasa con los iconos 🤔? Intenta agarrarlos 😁</span></p>
      <motion.div className="container-images" variants={containerDrag} initial="hidden" animate="visible" ref={constraintsRef}>
        {allImages.map((el) => {
          return <motion.div key={el.id} className='ball' variants={itemDrag} drag dragConstraints={constraintsRef} >
              <Image width={70} height={70} alt={el.name} src={el.img} />
            </motion.div>
        })}
      </motion.div>
    </section>
  )
}
export default Skills
