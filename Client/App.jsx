import React from 'react';
import MainImage from './mainImage.jsx'
import SideBar from './sideBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        imageList: [],
        clickedImage: 1
      }
  }


  // changeClickedImage


  getImagesForEndpoint() {
    fetch('http://localhost:8080/api/products/standard-fit-hoodied-sweatshirt/baby-blue/carousel')
    .then(res => res.json())
    .then((images) => {
      console.log(images);
      this.setState({
        imageList: images
      })
    })
    .catch(err => console.log(err))

  }


  componentDidMount() {
    this.getImagesForEndpoint()
  }

  render () {

    return (
      <div>
        <div>
          <SideBar imageList={this.state.imageList}/>
        </div>
        <div>
          <MainImage image={this.state.imageList.filter((image) => {image._id === 1 })}/>
        </div>
      </div>
    )

  }
}

export default App;