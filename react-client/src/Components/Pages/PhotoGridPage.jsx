import React, { Component } from 'react';
import Gallery from "react-photo-gallery";
import Lightbox from 'react-images';

const photos = [
  {
    src: "images/grid_2.jpg",
    width: 1,
    height: 1
  },
  {
    src: "images/grid_3.jpg",
    width: 1,
    height: 1
  },
  {
    src: "images/grid_9.jpg",
    width: 5,
    height: 3
  },
  {
    src: "images/grid_5.jpg",
    width: 92,
    height: 100
  },
  {
    src: "images/grid_8.jpg",
    width: 2,
    height: 3
  },
  {
    src: "images/grid_11.jpg",
    width: 4,
    height: 3
  },
  {
    src: "images/grid_12.jpg",
    width: 4,
    height: 3
  },
  {
    src: "images/grid_13.jpg",
    width: 5,
    height: 3
  },
  {
    src: "images/grid_14.jpg",
    width: 3,
    height: 4
  },
  {
    src: "images/grid_15.jpg",
    width: 4,
    height: 3
  },
  {
    src: "images/grid_16.jpg",
    width: 2,
    height: 3
  },
  {
    src: "images/grid_17.jpg",
    width: 1,
    height: 1
  }
]
const columns = 6;

class PhotoGridPage extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    return (
      <div class="photo-grid">
        <Gallery photos={photos} columns={columns} onClick={this.openLightbox}/>
        <Lightbox images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
      </div>
    );
  }
}
export default PhotoGridPage;