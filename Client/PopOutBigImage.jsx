import React from 'react';



class BigImage extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    return (
      <div className={"bigImageContainer"}>
        <img className="bigImage" src={this.props.mainImage.url} alt="needs-to-be-filled-in"></img>
      </div>
    )
  }
}

export default BigImage