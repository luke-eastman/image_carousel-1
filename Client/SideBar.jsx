import React from 'react';
import SideBarEntry from './sideBarEntry.jsx';
import GreyedOutImage from './GreyedOutImage.jsx'

const SideBar = (props) => (
<div >
   {props.imageList.map((image) =>
      <SideBarEntry
        image={image}
        changeMainImage={props.changeMainImage}
        key={image.id}
        imageList={props.imageList}
      />
    )}
    <GreyedOutImage
      extendImage={props.extendImage}
      clickMainImageForPopOut={props.clickMainImageForPopOut}
      mainImageId={props.mainImageId}/>
</div>
)
export default SideBar;
