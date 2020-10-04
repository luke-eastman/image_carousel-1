import React from 'react';

class NextPicture extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.nextImage()
  }

  render() {
    return (
      <div>
        <button className="nextPictureButton" onClick={this.handleClick.bind(this)}> > </button>
      </div>
    )
  }
}

export default NextPicture;
