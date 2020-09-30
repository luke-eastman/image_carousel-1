import React from 'react';
import MainImage from './mainImage.jsx'
import SideBar from './sideBar.jsx';



class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        imageList: [],
        mainImageId: 1
      }
  }


  // changeClickedImage


  getImagesForEndpoint() {
    // debugger;
    fetch('http://localhost:8080/api/products/standard-fit-hoodied-sweatshirt/baby-blue/carousel')
    .then(res => res.json())
    .then((images) => {
      console.log(images);
      // debugger;
      this.setState({
        imageList: images,
        sideBarImages: images.slice(0, 5)
      })

    })
    .catch(err => console.log(err))

  }

  imageClick() {

  }

  componentDidMount() {
    this.getImagesForEndpoint()
  }

  render () {
    return ( this.state.imageList.length > 0 ? <div className="smallCarousel">
        <div className="sideBar">
          <SideBar imageList={this.state.imageList.slice(0, 5)}/>
        </div>
        <div>
          <MainImage image={this.state.imageList.filter((image) =>

            {
              debugger;
              console.log(image);
              console.log(this.state.mainImageId)
              image._id === this.state.mainImageId})}/>
        </div>
      </div> : null
    )
  }
}

export default App;


<div>

</div>