import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Michael Downey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Image  */}
        <Header title="Hi, I'm Michael Downey" />
        <p className="description">
          Software Engineer 
          <Link href="https://onthestage.com">
            <a target="_blank"> @On The Stage</a>
          </Link>
          {/* <code>pages/index.js</code> */}
        </p>
      </main>

      <Footer />
    </div>
  )
}
