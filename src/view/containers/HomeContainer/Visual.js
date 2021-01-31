import React from 'react';
import styled from "styled-components";
import SearchBox from "../../components/SearchBox";
import {PageContainer} from "../../components/Layout/Styled";

function Visual({visualPhoto}) {

    if(!visualPhoto) return false;

  return (
      <Container>
          <VisualContainer>
              <VisualImg>
                  <img className="_29Gk3" role="presentation"
                       src={visualPhoto.urls.full} alt={'비주얼 이미지'}/>
                  <div className="dimed"/>
              </VisualImg>
              <VisualCont>
                  <VisualText>
                      <h2>Unsplash</h2>
                      <p>
                          The internet’s source of <a href={'https://unsplash.com/license'}>freely-usable images.</a><br/>
                          Powered by creators everywhere.
                      </p>
                  </VisualText>
                  <SearchBox shape={'square'}/>
              </VisualCont>
              <VisualBottomText>
                  <p>
                      <span>Photo of the Day</span> by <span>Michiel Annaert</span>
                  </p>
                  <p>
                      Read more about the <span>Unsplash License</span>
                  </p>
                  <p>
                      <span>
                          <img className="_11pPi _2OP8p"
                               src="https://images.unsplash.com/file-1606177908946-d1eed1cbe4f5image" alt={'이미'}/>
                          Create your website today.
                      </span>
                  </p>
              </VisualBottomText>
          </VisualContainer>
      </Container>
  )
}
const Container = styled(PageContainer)`
  margin-bottom: 36px;
`;

const VisualContainer = styled.div`
  position: relative;
`;

const VisualImg = styled.div`
    height: 600px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .dimed {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.3);
  }
`;

const VisualCont = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 864px;
  padding: 144px 0;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  
  a {
    color: #fff;
    opacity: .8;
    text-decoration: underline;
    transition: all .5s;
    &:hover {
      opacity: 1;
    }
  }
`;
const VisualText = styled.div`
  margin-bottom: 16px;
  h2 {
    font-size: 46px;
    line-height: 1.2;
  }
  p {
    margin-top: 16px;
    line-height: 1.6;
  }
`;

const VisualBottomText = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    font-size: 13px;
    color: rgba(255,255,255,.5);
    span{
      color: rgba(255,255,255,.5);
      text-decoration: none;
      transition: all .1s;
      opacity: .5;
      &:hover{
        color:#fff;
        opacity: 1;
      }
    }
`;


export default Visual;