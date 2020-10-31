import React from "react";
import styled,{keyframes} from "styled-components";
import Skeleton from 'react-loading-skeleton';


const rotate = keyframes`
0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
} 50% {
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
} 100% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
}
}
`;

function Spinner(props) {

    const {

    } = props;



    return (
        <Container>
            <div>
                <Skeleton/>
                <Box/>

                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
            </div>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1500;
  background: #fff;
  display:flex;
  justify-content: center;
  align-items:center;  
  
  .react-loading-skeleton {
    width: 170px;
    height: 20px;
    display: block!important;
    margin-top: 4px;
  }

`;

const Box = styled.div`
        width: 40px;
        height: 40px;
        background-color: #333;
    
        margin: 100px auto;
        animation: ${rotate} 1.2s infinite ease-in-out;
`;

  

export default Spinner;
