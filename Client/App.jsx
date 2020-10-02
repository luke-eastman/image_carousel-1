import React from 'react';
import MainImage from './mainImage.jsx'
import SideBar from './sideBar.jsx';
import PopOut from './PopOut.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        imageList: [],
        mainImageId: "5f743973c775129696d110f5",
        mainImageClicked: false
      }
  }

  changeViewBack() {
    this.setState({
      mainImageClicked: false
    })
  }


  changeMainImage(imageID) {
    this.setState({
      mainImageId: imageID
    })
  }

  clickMainImageForPopOut() {
    this.setState({
      mainImageClicked: true
    })
  }

  getImagesForEndpoint() {
    fetch('http://localhost:8080/api/products/standard-fit-hoodied-sweatshirt/baby-blue/carousel')
    .then(res => res.json())
    .then((images) => {

      this.setState({
        imageList: images,
        sideBarImages: images.slice(0, 5)
      })

    })
    .catch(err => console.log(err))

  }

  componentDidMount() {
    this.getImagesForEndpoint()
  }

  renderView() {
    if (this.state.mainImageClicked === true) {
      return <PopOut changeViewBack={this.changeViewBack.bind(this)}/>
    } else if (this.state.mainImageClicked === false) {
         return this.state.imageList.length > 0 ? <div className="smallCarousel">
        <div className="sideBar">
          <SideBar imageList={this.state.imageList.slice(0, 5)} changeMainImage={this.changeMainImage.bind(this)}/>
        </div>
        <div>
          <MainImage image={this.state.imageList.filter((image) =>

            { return image._id === this.state.mainImageId})[0]} clickMainImageForPopOut={this.clickMainImageForPopOut.bind(this)}/>
        </div>
      </div> : null
    }
  }

  render () {
    //if the image list exists render the carousel
    return (
      <div>
      {this.renderView()}
      </div>
    )
  }
}

export default App;


