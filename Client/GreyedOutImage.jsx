import React from 'react';
class GreyedOutImage extends React.Component {
  constructor(props) {
    super(props)

  }

  imageClick() {
    this.props.clickMainImageForPopOut(this.props.mainImageId)
  }

  render () {
    return (
      <div className="image-container">
        <img
          className="SideBarEntry greyedImage"
          src={this.props.extendImage.url}
          onClick={this.imageClick.bind(this)}>
          </img>
      </div>
    )

  }
}

export default GreyedOutImage;
