import React from 'react';
import BigImage from './PopOutBigImage.jsx';
import Exit from './Exit.jsx'
import BottomBar from './BottomBar.jsx'
import NextPicture from './NextPictureButton.jsx'
import LastPicture from './LastPictureButton.jsx'

const PopOut = (props) => (

        <div>
          <div>
            <Exit changeViewBack={props.changeViewBack}/>
          </div>
          <div>
            <div className="mainCarousel">
              <LastPicture />
              <BigImage mainImage={props.mainImage}/>
              <NextPicture />
            </div>
            <div>
              <BottomBar imageList={props.imageList}
                         changeMainImage={props.changeMainImage}/>
            </div>
          </div>
        </div>
)



  export default PopOut;