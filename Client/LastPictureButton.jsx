import React from 'react';

class LastPicture extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.lastImage()
  }

  render() {
    return (
      <div>
        <button className="lastPictureButton" onClick={this.handleClick.bind(this)}> &lt; </button>
      </div>
    )
  }
}

export default LastPicture;
