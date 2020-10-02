import React from 'react';
class SideBarEntry extends React.Component {
  constructor(props) {
    super(props)

  }

  handleClick() {
    var imageIndex = this.props.imageList.indexOf(this.props.image);
    this.props.changeMainImage(this.props.image._id, imageIndex)
  }

  render () {

    return (
      <div >
        <img
          className="SideBarEntry"
          src={this.props.image.url}
          onClick={this.handleClick.bind(this)}
          >

          </img>


      </div>
    )

  }
}

export default SideBarEntry;


