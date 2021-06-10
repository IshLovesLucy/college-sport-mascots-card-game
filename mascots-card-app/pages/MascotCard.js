import React from "react";

const MascotCardsList = props => {
  const {
    styles
  } = props;
  return (
    <li>
      <div 
        data-cardupid="1" 
        id="1" 
        className={`
          ${styles.card} 
          ${showFaces?.includes(1) ? styles.cardshow : ""} 
          ${matchedCards?.includes(1) ? styles.cardmatched : ""}
        `} 
        onClick={()=>handleClick(event, 1)}
      >
        <Image src="/img-ny-bmcc.png" width={45} height={45} />
      </div>
    </li>
  );
};

export default MascotCardsList;