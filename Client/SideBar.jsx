import React from 'react';
import SideBarEntry from './sideBarEntry.jsx';

const SideBar = (props) => (
<div id="sideBar">
   {props.imageList.map(image =>
      <SideBarEntry
        image={image}
      />
    )}
</div>

)

export default SideBar;