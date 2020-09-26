import React from 'react';
class SideBarEntry extends React.Component {
  constructor(props) {
    super(props)

  }






  render () {

    return (
      <div className="SideBarEntry">
        <img src={this.props.image.url}></img>

      </div>
    )

  }
}

export default SideBarEntry;