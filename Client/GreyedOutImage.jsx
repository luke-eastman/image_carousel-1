import React from 'react';
class GreyedOutImage extends React.Component {
  constructor(props) {
    super(props)

  }

  imageClick() {
    this.props.clickMainImageForPopOut()
  }

  render () {

    return (
      <div >
        <img
          className="SideBarEntry"
          src={this.props.extendImage.url}
          onClick={this.imageClick.bind(this)}>

          </img>


      </div>
    )

  }
}

export default GreyedOutImage;