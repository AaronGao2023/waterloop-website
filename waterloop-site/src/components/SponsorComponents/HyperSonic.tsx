import SponsorImgTemplate from "./SponsorTemplate";
import styled from "styled-components";
import UW_Engineering from "./TestingImage/UW_Engineering.png"
import React from "react";

const size = {
    mobile: "420px",
    tabletM: "800px",
    tabletL: "1100px"
};

  
const HyperSonicImg = styled(SponsorImgTemplate)`

width: 60%;
height:250px;
@media screen and (max-width:${size.mobile}){
    width:80%;
    height:250px;
}
`

class HyperSonic extends React.Component{
    render(){
        return(
            <HyperSonicImg src ={UW_Engineering}/>
        )
    }
}

export default HyperSonic;