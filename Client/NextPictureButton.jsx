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
        <button onClick={this.handleClick.bind(this)}> N </button>
      </div>
    )
  }
}

export default NextPicture;