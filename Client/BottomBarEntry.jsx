import React from 'react'


class BottomBarEntry extends React.Component {
  constructor(props) {
    super(props)

  }

  imageClick() {
    this.props.changeMainImage(this.props.image._id)
  }

  render () {

    return (
      <div >
        <img
          className="BottomBarEntry"
          src={this.props.image.url}
          alt={this.props.image.alt}
          onClick={this.imageClick.bind(this)}
          >

          </img>


      </div>
    )

  }
}

export default BottomBarEntry;