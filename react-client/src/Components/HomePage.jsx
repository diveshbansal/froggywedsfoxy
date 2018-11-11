import React, { Component } from 'react';
import LandingPage from './Pages/LandingPage.jsx';
import InvitePage from './Pages/InvitePage.jsx';
import CarouselPage from './Pages/CarouselPage.jsx';
import PhotoGridPage from './Pages/PhotoGridPage.jsx';

class HomePage extends Component {
  render() {
    return (
      <div class="home">
        <LandingPage />
        {/* <CarouselPage /> */}
        <InvitePage />
        <PhotoGridPage />
      </div>
    )
  }
}
export default HomePage;