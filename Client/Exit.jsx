import React from 'react';

class Exit extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.changeViewBack()
  }

  render() {
    return (
      <div>
        <button className="exitBTN" onClick={this.handleClick.bind(this)}>X</button>
      </div>
    )
  }
}

export default Exit;
