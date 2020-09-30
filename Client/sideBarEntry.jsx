import React from 'react';
class SideBarEntry extends React.Component {
  constructor(props) {
    super(props)

  }

  handleClick() {
    this.props.changeMainImage(this.props.image._id)
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