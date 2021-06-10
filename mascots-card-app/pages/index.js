import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

import { cardData } from './../src/data/cardsCollection';

import styles from '../styles/Home.module.scss';

export const Home = () => {
  const [showFaces, setShowFaces] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  
  /** 
   * Updates states for setMatchedCards or setShowFaces based on Card ids
   * 
   * @param {integer} clickedCard1
   * @param {integer} clickedCard2
   */
  const checkMatch = (clickedCard1, clickedCard2, event) => {
    const card1 = document.getElementById(clickedCard1).dataset.cardupid;
    const card2 = document.getElementById(clickedCard2).dataset.cardupid;
    
    card1 === card2 ? setMatchedCards([...matchedCards, clickedCard1, clickedCard2]) : setShowFaces([]);
  };
  
  /** 
   * Click handler and hook updates
   * 
   * @param {integer} index
   * 
   * Note:  Probably can refactor event object
   */
  const handleClick = (event, index) => {
    if (!matchedCards.includes(index)) {
      switch (showFaces.length) {
        case 0:
          setShowFaces([index]);
          break;
        case 1:
          if (showFaces[0] !== index) { /** User clicks on the same card */
            setShowFaces(showFaces.concat(index));
            setTimeout(() => { checkMatch(showFaces[0], index, event); }, 1200);
          }
          break;
        default:
          setShowFaces([index]);
      }
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Sidearm Sports Senior FE Assessment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} role="main">
        <Image src="/hero-fans.jpg" alt="" layout="fill" id="" className={styles.hero} />
        <header role="banner">
          <h1 className={styles.title}>
            Welcome to NY College Sports <br />Mascots Memory Game
          </h1>
        </header>

        <ul className={styles.grid}>
          {
            cardData.map(card =>{
              return (
                <li key={card.id}>
                  <div 
                    data-cardupid={card.cardupid}
                    id={card.id} 
                    className={`
                      ${styles.card} 
                      ${showFaces?.includes(card.id) ? styles.cardshow : ""} 
                      ${matchedCards?.includes(card.id) ? styles.cardmatched : ""}
                    `} 
                    onClick={()=>handleClick(event, card.id)}
                  >
                    <Image src={card.src} width={50} height={50} />
                  </div>
                </li>
              ); 
            })
          }
        </ul>

        <details open>
          <summary>STATS: </summary>
          <p>Matches = {matchedCards?.length > 0 ? (matchedCards.length / 2) : 0 }</p>
          <p>Moves, Time, Reset Button <img src="https://i2.wp.com/www.bapl.org/wp-content/uploads/2019/02/old-under-construction-gif.gif?ssl=1" height="30" /> </p>
        </details>
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

export default Home;