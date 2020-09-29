import React from 'react';
import MainImage from './mainImage.jsx'
import SideBar from './sideBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        imageList: [],
        clickedImageId: {}
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
        clickedImageId: images[0]
      })

    })
    .catch(err => console.log(err))

  }


  componentDidMount() {
    this.getImagesForEndpoint()
  }

  render () {

    return (
      <div className="smallCarousel">
        <div className="sideBar">
          <SideBar imageList={this.state.imageList}/>
        </div>
        {/* <div {...this.state.imageList.filter((image) => {
              image._id = this.state.clickedImageId
            }).map(filteredImage => <MainImage filteredImage={filteredImage}/>)} */}
        <div>
          <MainImage image={this.state.clickedImageId}/>
        </div>
      </div>
    )

  }
}

export default App;