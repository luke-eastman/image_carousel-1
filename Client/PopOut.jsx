import React from 'react';
import BigImage from './PopOutBigImage.jsx';
import Exit from './Exit.jsx'

class PopOut extends React.Component {
  constructor(props) {
    super(props)

    }



    render() {
      return (
        <div>
          <Exit changeViewBack={this.props.changeViewBack}/>
          <BigImage />
        </div>
      )
    }
  }


  export default PopOut;