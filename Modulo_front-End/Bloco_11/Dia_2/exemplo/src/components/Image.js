import React from 'react';


class Image extends React.Component {
  render() {
    return <img src={this.props.image.source} alt={this.props.image.alternativeText} />;
  }
}

export default Image;