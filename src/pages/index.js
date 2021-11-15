import Head from 'next/head'
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
        <Projects />
      </main>
    </>
  )
}

export default Container
