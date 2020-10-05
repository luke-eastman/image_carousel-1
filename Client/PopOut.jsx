import React from 'react';
import BigImage from './PopOutBigImage.jsx';
import Exit from './Exit.jsx'
import BottomBar from './BottomBar.jsx'
import NextPicture from './NextPictureButton.jsx'
import LastPicture from './LastPictureButton.jsx'

const PopOut = (props) => (
          <div>
            <div className="bigCarousel">
              <LastPicture lastImage={props.lastImage}/>
              <BigImage mainImage={props.mainImage}/>
              <div>
              <Exit changeViewBack={props.changeViewBack}/>
              <NextPicture nextImage={props.nextImage}/>

              </div>
            </div>
            <div>
              <BottomBar imageList={props.imageList}
                         changeMainImage={props.changeMainImage}/>
            </div>
          </div>
)
  export default PopOut;
