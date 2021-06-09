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
    // <div className={`grid-card ${className}`} onClick={onClick}>
    //   <img
    //     className={`img-thumbnail img-fluid grid-img`}
    //     src={imgSource}
    //     alt={imgDesc}
    //   />
    // </div>
    <ul data-card-tabl>
        {
            mascotCardsCollection.map(()=>{
                <li>test</li>
            })
        }
    </ul>
  );
};

export default MascotCard;