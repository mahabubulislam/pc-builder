import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>PC Builder | Home</title>
        <meta
          name='description'
          content='This is a pc builder website made by next-js and tailwind css'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`h-screen p-5 `}>
        <h1></h1>
      </main>
    </>
  )
}
