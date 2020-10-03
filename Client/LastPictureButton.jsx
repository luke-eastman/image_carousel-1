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
        <button onClick={this.handleClick.bind(this)}> L </button>
      </div>
    )
  }
}

export default LastPicture;
