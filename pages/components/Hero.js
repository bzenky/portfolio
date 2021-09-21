import Image from 'next/image'
import Fade from 'react-reveal/Fade'

import github from '../../public/githubIcon.png'
import linkedin from '../../public/linkedinIcon.png'
import instagram from '../../public/instagramIcon.png'
import youtube from '../../public/youtubeIcon.png'
import styles from './Hero.module.css'

const Hero = () => {

  return (
    <>
      <div className={styles.hero}>
        <Fade>
          <div className={styles.text}>
            <span>Olá, eu sou</span>
            <span className={styles.name}><strong>Bruno Zenky</strong></span>
            <span>Front-End Developer</span>

            <a
              href="/CV - Bruno Zenky G. Asano.pdf"
              target="_blank"
              className={styles.cv}
            >
              Curriculum Vitae
            </a>

            <div className={styles.social}>
              <a href="https://github.com/bzenky" target="_blank" rel="noreferrer">
                <Image
                  src={github}
                  width={140}
                  height={145}
                  className={styles.socialIcon}
                  alt="linkedin icon"
                />
              </a>
              <a href="https://www.linkedin.com/in/bzenky/" target="_blank" rel="noreferrer">
                <Image
                  src={linkedin}
                  width={150}
                  height={150}
                  className={styles.socialIcon}
                  alt="linkedin icon"
                />
              </a>
              <a href="https://www.instagram.com/bzenky/" target="_blank" rel="noreferrer">
                <Image
                  src={instagram}
                  width={150}
                  height={150}
                  className={styles.socialIcon}
                  alt="instagram icon"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCCe8rx30_1ZJ6M4oPzSJHiA" target="_blank" rel="noreferrer">
                <Image
                  src={youtube}
                  width={150}
                  height={150}
                  className={styles.socialIcon}
                  alt="youtube icon"
                />
              </a>
            </div>
          </div>
          <div className={styles.photo} />
        </Fade>
      </div>
      <div className={styles.photoMobile} />
    </>
  )
}

export default Hero