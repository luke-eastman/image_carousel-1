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
          className="greyedImage"
          src={this.props.extendImage.url}
          onClick={this.imageClick.bind(this)}>
          </img>
    <div className="centeredOverImage"
          onClick={this.imageClick.bind(this)}
          > + {this.props.imageListLength - 4} more</div>
      </div>
    )

  }
}

export default GreyedOutImage;
