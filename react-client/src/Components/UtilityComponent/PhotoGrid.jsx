import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import React, { Component } from 'react';

const IMAGES =
[
{
        src: "images/grid_2.jpg",
        thumbnail: "images/grid_2.jpg",
        //thumbnailWidth: 320,
        //thumbnailHeight: 212,
        //tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],       
},

{
        src: "images/grid_3.jpg",
        thumbnail: "images/grid_3.jpg",
        //thumbnailWidth: 320,
        //thumbnailHeight: 212
},
{
        src: "images/grid_9.jpg",
        thumbnail: "images/grid_9.jpg",
        //thumbnailWidth: 320,
        //thumbnailHeight: 174
},
{
        src: "images/grid_5.jpg",
        thumbnail: "images/grid_5.jpg",
        //thumbnailWidth: 320,
        //thumbnailHeight: 212,
        //tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        
},
{
        src: "images/grid_8.jpg",
        thumbnail: "images/grid_8.jpg",
        //thumbnailWidth: 320,
        //thumbnailHeight: 212,
        //tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        
},

{
        src: "images/grid_11.jpg",
        thumbnail: "images/grid_11.jpg",
        //thumbnailWidth: 320,
        //thumbnailHeight: 174
},
{
        src: "images/grid_12.jpg",
        thumbnail: "images/grid_12.jpg",
        //thumbnailWidth: 320,
        //thumbnailHeight: 174
},
{
        src: "images/grid_13.jpg",
        thumbnail: "images/grid_13.jpg",
        //thumbnailWidth: 320,
        //thumbnailHeight: 174
},
{
        src: "images/grid_14.jpg",
        thumbnail: "images/grid_14.jpg",
        //thumbnailWidth: 320,
        //thumbnailHeight: 174
},
{
        src: "images/grid_15.jpg",
        thumbnail: "images/grid_15.jpg",
        //thumbnailWidth: 320,
        //thumbnailHeight: 174
},
{
        src: "images/grid_16.jpg",
        thumbnail: "images/grid_16.jpg",
        //thumbnailWidth: 320,
        //thumbnailHeight: 174
},
{
        src: "images/grid_17.jpg",
        thumbnail: "images/grid_17.jpg",
        //thumbnailWidth: 320,
        //thumbnailHeight: 174
}]
class PhotoGrid extends Component {

  render(){
    return(
      <Gallery images={IMAGES}/>         
    );
  }
}
export default PhotoGrid;