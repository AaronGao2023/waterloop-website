import React from "react";
import styled from "styled-components";
import Psim from "./sponsorphotos/Psim.png";
import Ansys from "./sponsorphotos/Ansys.png";
import Threedx from "./sponsorphotos/Threedx.png"

const RosterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
`;

const Heading = styled.h2`
  font-style: italic;
  font-size: 28px;
  margin: 18px 0;
`;

const Description = styled.div`
  font-size: 16px;
`;

const ImageThumbnail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  height: ;
`;

const Img = styled.img`
  padding: 5px;
  width: 90vw;
  margin: 20px 0;
`;

const Arrow = styled.button`
  all: unset;
  cursor: pointer;
  margin: 4px;
`;

const imgUrls = [
  Psim, Ansys, Threedx
];

class GooseRoster extends React.Component {
  state = {
    currentImageIndex: 0
  };

  previousSlide = () => {
    const { currentImageIndex } = this.state;
    const lastIndex = currentImageIndex == 0 ? imgUrls.length - 1 : currentImageIndex - 1;
    this.setState({
      currentImageIndex: lastIndex
    });
  }

  nextSlide = () => {
    const { currentImageIndex } = this.state;
    const nextIndex = currentImageIndex == imgUrls.length - 1 ? 0 : currentImageIndex + 1;
    this.setState({
      currentImageIndex: nextIndex
    });
  }

  render() {
    return (
      <RosterWrapper>
        <Heading>Goose V</Heading>
        <Description>Some attractive description about how the goose is a magnificent animal.</Description>
        
        <ImageThumbnail>
          <Arrow onClick={ this.previousSlide }>
            &#9664;
          </Arrow>
          <Img src={imgUrls[this.state.currentImageIndex]}></Img>
          <Arrow onClick={ this.nextSlide }>
            &#9654;
          </Arrow>
        </ImageThumbnail>
      </RosterWrapper>
    );
  }
}

export default GooseRoster;