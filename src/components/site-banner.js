import React, { Component } from 'react';

class SiteBanner extends Component {
  render() {
   return (
      <header>
       <h1>{this.props.bannerText}</h1>
      </header>
    );
  }
}

export { SiteBanner }