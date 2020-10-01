import React from 'react';
import MainImage from './mainImage.jsx'
import SideBar from './sideBar.jsx';



class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        imageList: [],
        mainImageId: "5f743973c775129696d110f5"
      }
  }


  changeMainImage(imageID) {
    this.setState({
      mainImageId: imageID
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

  render () {
    //if the image list exists render the carousel
    return ( this.state.imageList.length > 0 ? <div className="smallCarousel">
        <div className="sideBar">
          <SideBar imageList={this.state.imageList.slice(0, 5)} changeMainImage={this.changeMainImage.bind(this)}/>
        </div>
        <div>
          <MainImage image={this.state.imageList.filter((image) =>

            { return image._id === this.state.mainImageId})[0]}/>
        </div>
      </div> : null
    )
  }
}

export default App;


<div>

</div>