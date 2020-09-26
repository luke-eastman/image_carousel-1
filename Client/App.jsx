import React from 'react';
import MainImage from './mainImage.jsx'
import SideBar from './sideBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        imageList: []
      }
  }




  getImagesForEndpoint() {
    fetch('http://localhost:8080/api/products/standard-fit-hoodied-sweatshirt/baby-blue/carousel')
    .then(res => res.json())
    .then((images) => {

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
        <MainImage />

      </div>
    )

  }
}

export default App;