import React from 'react'
import Lightbox from 'react-image-lightbox';
import ikona1 from './ikona1.jpg';
import ikona2 from './ikona2.jpg';
import ikona3 from './ikona3.jpg';
import './galerija.css';


const images = [
    ikona1,
    ikona2,
    ikona3
]



export default class Galerija extends React.Component {

    constructor(props){
        super(props);

        this.state={
            photoIndex : 0,
            isOpen:false
        };
    }
    render() {
        const {photoIndex, isOpen} = this.state;
        return (
            <div>
                 <h1 className='text-middle mt-4'>Галерија</h1>
      <div className='row1'>
          <div className='col1'>
              <img className='slika' src={ikona1} onClick={() => this.setState({ isOpen: true, photoIndex:0 })} />
              <img className='slika' src={ikona2} onClick={() => this.setState({ isOpen: true, photoIndex:3 })} />
              <img className='slika' src={ikona3} onClick={() => this.setState({ isOpen: true, photoIndex:6 })} />
          </div>
          <div className='col1'>
              <img className='slika' src={ikona1} onClick={() => this.setState({ isOpen: true, photoIndex:1 })} />
              <img className='slika' src={ikona2} onClick={() => this.setState({ isOpen: true, photoIndex:4 })} />
              <img className='slika' src={ikona3} onClick={() => this.setState({ isOpen: true, photoIndex:7 })} />
          </div>
          <div className='col1'>
              <img className='slika' src={ikona1} onClick={() => this.setState({ isOpen: true, photoIndex:2 })} />
              <img className='slika' src={ikona2} onClick={() => this.setState({ isOpen: true, photoIndex:5 })} />
              <img className='slika' src={ikona3} onClick={() => this.setState({ isOpen: true, photoIndex:8 })} />
          </div>
      </div>
      
     {isOpen && (
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={() => this.setState({ isOpen: false })}
        onMovePrevRequest={() =>
          this.setState({
            photoIndex: (photoIndex + images.length - 1) % images.length,
          })
        }
        onMoveNextRequest={() =>
          this.setState({
            photoIndex: (photoIndex + 1) % images.length,
          })
        }
      />
    )}
                
            </div>
        )
    }
}

