import Fade from 'react-reveal/Fade'
import { HeroSocial } from './HeroSocial'

import styles from './Hero.module.scss'

export function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <Fade>
          <div className={styles.heroContainer}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Olá, eu sou <span className={styles.name}><strong>Bruno Zenky</strong></span> Front-End Developer
              </h1>
            </div>

            <HeroSocial />
          </div>
        </Fade>
      </div>
    </>
  )
}