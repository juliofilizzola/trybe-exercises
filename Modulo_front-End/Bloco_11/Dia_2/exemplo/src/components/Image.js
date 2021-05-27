import React from 'react';


class Image extends React.Component {
  render() {
    const {im, alt} = this.props
    return <img src={im} alt={alt} />;
  }
}

export default Image;