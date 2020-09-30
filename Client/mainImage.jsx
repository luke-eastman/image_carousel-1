import React from 'react';



class MainImage extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {

    return (

      <div>
      <div>
        <img
          className="mainImage"
          src={this.props.image.url}
         alt={this.props.image.alt}
         ></img>
      </div>

      </div>
    )

  }
}

export default MainImage;