import React from 'react';



class MainImage extends React.Component {
  constructor(props) {
    super(props)

  }






  render () {

    return (

      <div id="mainImage">
      <div>
        <img src="https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-24+at+5.20.35+PM.png" ></img>
      </div>
      <div>
        <h3>Main Image here</h3>
      </div>
      </div>
    )

  }
}

export default MainImage;