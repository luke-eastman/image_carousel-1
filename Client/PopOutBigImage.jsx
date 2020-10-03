import React from 'react';



const BigImage = (props) => (

      <div className={"bigImageContainer"}>
        <img className="bigImage" src={props.mainImage.url} alt={props.mainImage.url}></img>
      </div>
    )
export default BigImage
