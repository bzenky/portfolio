import Image from 'next/image'
import Fade from 'react-reveal/Fade'

import styles from './About.module.scss'
import gifAbout from '/public/aboutGif.gif'

export function About() {
    return (
        <div className={styles.about}>
            <Fade>
                <h1 className={styles.aboutTitle}>Sobre</h1>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <p className={styles.aboutMeTitle}>Olá 👋</p>

                        <p className={styles.aboutMe}>
                            Meu nome é Bruno Zenky, desde sempre apaixonado por finanças, exatas e tecnologia. Em um ano tão atípico quanto 2021, acabei vencendo todos os medos/incertezas e realizei a transição de carreira.
                            <a
                                href="https://www.linkedin.com/posts/bzenky_uma-breve-retrospectiva-deste-ano-acredito-activity-6879875175073030144-4zUE"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.aboutLink}
                            >
                                História (Post Linkedin)
                            </a>
                        </p>

                        <p className={styles.aboutMe}>Nos meus estudos passei tanto pelo Back quanto o Front-End<a href="https://go.hotmart.com/K64662872G" target="_blank" rel="noreferrer" className={styles.aboutLink}>(Curso FullStack)</a>, mas no decorrer percebi maior afinidade pelo Front-End, onde está o meu maior foco nos estudos. No momento estou me aprofundando mais em React e Next<a href="https://www.rocketseat.com.br/ignite" target="_blank" rel="noreferrer" className={styles.aboutLink}>(Ignite)</a>.</p>

                        <p className={styles.aboutMe}>Um pouco mais de minha trajetória e contatos pode ser encontrado no CV abaixo. </p>
                    </div>
                    <div className={styles.aboutImg}>
                        <Image
                            src={gifAbout}
                            width={250}
                            height={250}
                            alt="Rocket Gif"
                            className={styles.aboutGif}
                        />
                    </div>
                </div>
                <a
                    href="/CV - Bruno Zenky G. Asano.pdf"
                    target="_blank"
                    className={styles.cv}
                >
                    Curriculum Vitae
                </a>
            </Fade>
        </div>
    )
}