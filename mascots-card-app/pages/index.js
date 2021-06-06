//import mascotCardsCollection from '../src/data/cardsCollection'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Move this higher folder for sharing, since its SPA property
const mascotCardsCollection = [
  { id: 'card01', url: '/img-ny-binghamton-bearcats.png' },
  { id: 'card02', url: '/img-ny-bmcc.png' },
  { id: 'card03', url: '/img-ny-bronx-community.png' },
  { id: 'card04', url: '/img-ny-c1.png' },
  { id: 'card05', url: '/img-ny-canisius.png' },
  { id: 'card06', url: '/img-ny-clarkson.png' },
  { id: 'card07', url: '/img-ny-colgate.png' },
  { id: 'card08', url: '/img-ny-cortland.png' },
  { id: 'card09', url: '/img-ny-rit.png' },
  { id: 'card10', url: '/img-ny-rutgers.png' },
  { id: 'card11', url: '/img-ny-st-johns.png' },
  { id: 'card12', url: '/img-ny-syracuse.png' },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sidearm Sports Senior FE Assessment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} role="main">
        <Image src="/hero-fans.jpg" alt="" layout="fill" className={styles.hero} />
        <header role="banner">
          <h1 className={styles.title}>
            Welcome to NY College Sports <br />Mascots Memory Game
          </h1>
        </header>

        <ul className={styles.grid} data-card-table>
          {/* {
            mascotCardsCollection.forEach(card => {
              console.log(card)
              return <li>{card}</li>;
            })
          } */}
           <li className={`${styles.card} ${styles.cardshow}`}><Image src="/img-ny-bmcc.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-binghamton-bearcats.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-bronx-community.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-c1.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-canisius.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-clarkson.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-colgate.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-cortland.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-rit.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-rutgers.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-st-johns.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-syracuse.png" width={45} height={45} /></li>

           <li className={styles.card}><Image src="/img-ny-bmcc.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-binghamton-bearcats.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-bronx-community.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-c1.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-canisius.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-clarkson.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-colgate.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-cortland.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-rit.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-rutgers.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-st-johns.png" width={45} height={45} /></li>
           <li className={styles.card}><Image src="/img-ny-syracuse.png" width={45} height={45} /></li>
        </ul>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
