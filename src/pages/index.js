import Head from 'next/head'

const Container = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portfolio - Bruno Zenky</title>
        <meta name="description" content="Portfólio de Bruno Zenky." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        { children }
      </div>
    </>
  )
}

export default Container
