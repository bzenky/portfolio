import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image'
import axios from 'axios'
import Fade from 'react-reveal/Fade'
import { format } from 'date-fns'

import styles from './Projects.module.scss'

import linkIcon from '../../../public/linkIcon.svg'


const Hero = () => {
  const [repositories, setRepositories] = useState([])

  const isShortIndex = useMediaQuery({ query: `(max-width: 1150px)` })
  const dynamicIndex = isShortIndex ? 3 : 6


  useEffect(() => {
    axios.get('https://api.github.com/users/bzenky/repos?sort=updated&direction=des')
      .then(response => {
        const data = response.data

        setRepositories(data)
      })
  }, [])



  return (
    <div className={styles.projects}>
      <Fade>
        <h2 className={styles.projectsTitle}>Últimas Atualizações Github</h2>
        <div div className={styles.projectsCards}>
          {repositories.map((repository, index) => index < dynamicIndex && (

            <div className={styles.projectCard} key={repository.id}>
              <h3 className={styles.projectTitle}>
                {repository.name}
              </h3>
              <p className={styles.projectDescription}>
                {repository.description}
              </p>
              <div className={styles.linkRepo}>
                <Image
                  src={linkIcon}
                  alt="linkIcon"
                  className={styles.linkIcon}
                  width={15}
                  height={15}
                />

                <a
                  href={repository.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.projectLink}
                >
                  Acessar repositório
                </a>

              </div>
              <span className={styles.updatedAt}>
                Atualizado em
                {format(new Date(repository.updated_at), ' dd/MM/yyyy')}
              </span>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  )
}

export default Hero