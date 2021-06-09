import React from "react";

const MascotCards = props => {
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
  const { imgSource, imgDesc, className, onClick } = props;
  return (
    <ul className={styles.grid} data-card-table>
          {/* {
            mascotCardsCollection.forEach(card => {
              console.log(card)
              return <li>{card}</li>;
            })
          } */}
           <li><div className={styles.card} onClick={console.log('this is hell')}><Image src="/img-ny-bmcc.png" width={45} height={45} /></div></li>
           <li><div className={styles.card} onClick={console.log('this is hell2')}><Image src="/img-ny-binghamton-bearcats.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-bronx-community.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-c1.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-canisius.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-clarkson.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-colgate.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-cortland.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-rit.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-rutgers.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-st-johns.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-syracuse.png" width={45} height={45} /></div></li>

           <li><div className={styles.card}><Image src="/img-ny-bmcc.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-binghamton-bearcats.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-bronx-community.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-c1.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-canisius.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-clarkson.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-colgate.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-cortland.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-rit.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-rutgers.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-st-johns.png" width={45} height={45} /></div></li>
           <li><div className={styles.card}><Image src="/img-ny-syracuse.png" width={45} height={45} /></div></li>
        </ul>
  );
};

export default MascotCards;