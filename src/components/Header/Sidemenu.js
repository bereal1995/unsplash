import React from "react";
import styled from "styled-components";

function Sidemenu(props) {

    return (
        <Container>
            <div className="btn-notice" onClick={() => {
                props.setPopup(true);
            }}>공지사항</div>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 300px;
  background: #fff;
  border-right: 1px solid #eee;
  box-shadow: 1px 1px 10px rgba(0,0,0,.15);
  padding: 30px;
  
  .btn-notice {
    font-size: 18px;
    color: #333333;
    font-weight: bold;
  }

`;

export default Sidemenu;
