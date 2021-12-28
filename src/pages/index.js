import Head from 'next/head'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const Container = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Bruno Zenky</title>
        <meta name="description" content="Portfólio de Bruno Zenky." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default Container
