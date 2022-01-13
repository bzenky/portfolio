import Image from 'next/image'
import Fade from 'react-reveal/Fade'

import github from '/public/images/githubIcon.png'
import linkedin from '/public/images/linkedinIcon.png'
import instagram from '/public/images/instagramIcon.png'
import youtube from '/public/images/youtubeIcon.png'

import styles from './Hero.module.scss'

export function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <Fade>
          <div className={styles.text}>
            <span>Olá, eu sou</span>
            <span className={styles.name}><strong>Bruno Zenky</strong></span>
            <span>Front-End Developer</span>

            <div className={styles.social}>
              <a href="https://github.com/bzenky" target="_blank" rel="noreferrer" className={styles.socialLink}>
                <Image
                  src={github}
                  width={140}
                  height={145}
                  className={styles.socialIcon}
                  alt="linkedin icon"
                />
              </a>
              <a href="https://www.linkedin.com/in/bzenky/" target="_blank" rel="noreferrer" className={styles.socialLink}>
                <Image
                  src={linkedin}
                  width={150}
                  height={150}
                  className={styles.socialIcon}
                  alt="linkedin icon"
                />
              </a>
              <a href="https://www.instagram.com/bzenky/" target="_blank" rel="noreferrer" className={styles.socialLink}>
                <Image
                  src={instagram}
                  width={150}
                  height={150}
                  className={styles.socialIcon}
                  alt="instagram icon"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCCe8rx30_1ZJ6M4oPzSJHiA" target="_blank" rel="noreferrer" className={styles.socialLink}>
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
    </>
  )
}