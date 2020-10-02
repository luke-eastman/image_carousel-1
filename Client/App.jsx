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
        mainImageIndex: 0,
        mainImageClicked: false
      }
  }

  changeViewBack() {
    this.setState({
      mainImageClicked: false
    })
  }


  changeMainImage(imageID, index) {
    this.setState({
      mainImageId: imageID,
      mainImageIndex: index
    })
  }

  clickMainImageForPopOut() {
    this.setState({
      mainImageClicked: true
    })
  }

  nextImage() {
    this.setState({
      mainImageIndex: this.state.mainImageIndex + 1,
      mainImageId: this.state.imageList[this.state.mainImageIndex + 1]._id
    })
  }

  lastImage() {
    this.setState({
      mainImageIndex: this.state.mainImageIndex - 1,
      mainImageId: this.state.imageList[this.state.mainImageIndex -1]._id
    })
  }
  getImagesForEndpoint() {
    fetch('http://localhost:8080/api/products/standard-fit-hoodied-sweatshirt/baby-blue/carousel')
    .then(res => res.json())
    .then((images) => {

      this.setState({
        imageList: images,
      })

    })
    .catch(err => console.log(err))

  }

  componentDidMount() {
    this.getImagesForEndpoint()
  }

  renderView() {
    if (this.state.mainImageClicked === true) {
      return <PopOut
                changeViewBack={this.changeViewBack.bind(this)}
                mainImage={this.state.imageList.filter((image) => { return image._id === this.state.mainImageId})[0]}
                imageList={this.state.imageList}
                nextImage={this.nextImage.bind(this)}
                lastImage={this.lastImage.bind(this)}
                changeMainImage={this.changeMainImage.bind(this)}/>
    } else if (this.state.mainImageClicked === false) {
         //if the image list exists render the carousel
         return this.state.imageList.length > 0 ? <div className="smallCarousel">
        <div className="sideBar">
          <SideBar
            imageList={this.state.imageList.slice(0, 4)}
            extendImage={this.state.imageList.slice(4, 5)[0]}
            changeMainImage={this.changeMainImage.bind(this)}
            clickMainImageForPopOut={this.clickMainImageForPopOut.bind(this)}/>
        </div>
        <div>
          <MainImage image={this.state.imageList.filter((image) =>

            { return image._id === this.state.mainImageId})[0]} clickMainImageForPopOut={this.clickMainImageForPopOut.bind(this)}/>
        </div>
      </div> : null
    }
  }

  render () {

    return (
      <div>
      {this.renderView()}
      </div>
    )
  }
}

export default App;


