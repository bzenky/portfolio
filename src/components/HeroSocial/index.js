import Image from 'next/image'

import github from '/public/images/githubIcon.svg'
import linkedin from '/public/images/linkedinIcon.svg'
import instagram from '/public/images/instagramIcon.svg'
import youtube from '/public/images/youtubeIcon.svg'

import styles from './HeroSocial.module.scss'

export function HeroSocial() {
    return (
        <div className={styles.heroSocial}>
            <ul>
                <li>
                    <a
                        href="https://www.github.com/bzenky"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src={github}
                            width={55}
                            height={55}
                        />
                    </a>
                </li>

                <li>
                    <a
                        href="https://www.linkedin.com/in/bzenky"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src={linkedin}
                            width={55}
                            height={55}
                        />
                    </a>
                </li>

                <li>
                    <a
                        href="https://www.youtube.com/channel/UCCe8rx30_1ZJ6M4oPzSJHiA"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src={youtube}
                            width={55}
                            height={55}
                        />
                    </a>
                </li>

                <li>
                    <a
                        href="https://www.instagram.com/bzenky"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src={instagram}
                            width={55}
                            height={55}
                        />
                    </a>
                </li>


            </ul>
        </div>
    )
}