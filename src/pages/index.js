import Head from 'next/head'
import { Hero } from '../components/Hero'

const Container = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Bruno Zenky</title>
        <meta name="description" content="Olá, meu nome é Bruno Zenky, e este é um simples portfólio de um apaixonado em desenvolvimento web." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index" />
        <meta name="theme-color" content="#151515" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  )
}

export default Container
