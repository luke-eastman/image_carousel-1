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
      />
    )}
    <GreyedOutImage
      extendImage={props.extendImage}
      clickMainImageForPopOut={props.clickMainImageForPopOut}/>
</div>

)

export default SideBar;