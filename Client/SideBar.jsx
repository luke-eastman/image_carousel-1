import React from 'react';
import SideBarEntry from './sideBarEntry.jsx';
import GreyedOutImage from './GreyedOutImage.jsx'

const SideBar = (props) => (
<div className="sideBarContainer">
   {props.imageList.map((image) =>
      <SideBarEntry
        image={image}
        changeMainImage={props.changeMainImage}
        key={image._id}
        imageList={props.imageList}
      />
    )}
    <GreyedOutImage
      extendImage={props.extendImage}
      clickMainImageForPopOut={props.clickMainImageForPopOut}
      mainImageId={props.mainImageId}
      imageList={props.imageList}
      imageListLength={props.imageListLength}/>
</div>
)
export default SideBar;
