'use client'
import { allProjects } from '@/utilities/allProjects'
import './projects.css'
import Image from 'next/image'
import LinkIcon from '@mui/icons-material/Link'
import { motion } from 'framer-motion'
const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <p>Proyectos</p>
      <div class="grid-container">
        {allProjects.map((project, index) => {
          return (
            <motion.div
              className="card"
              key={project.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: `${index * 0.5}`,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <Image width={200} height={200} alt={project.id} src={project.img} />
              <a href={project.deploy} target="_blank">
                <LinkIcon sx={{ fontSize: 'medium' }} />
                {project.title}
              </a>
              <p>{project.overwiev}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
