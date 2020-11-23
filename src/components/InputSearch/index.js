import React, {useState} from 'react';
import styled from "styled-components";
import {ImSearch} from 'react-icons/im'
import {navigate} from "../../lib/History";

function InputSearch(props) {

    const {
        onEnter = () => {},
    } = props;

    const [query, setQuery] = useState('');
    const page = 1;
    const onKeyup = (e) => {
        if (e.key === 'Enter') {
            navigate(`/photos/search/${query}?page=${page}`)
        }
    }

    const onChange = (e) => setQuery(e.target.value);

  return (
      <Container>
          <input type="text"
                 onChange={onChange}
                 onKeyUp={onKeyup}/>
          <div className="icon-search">
              <ImSearch/>
          </div>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  margin: 20px;
  input{
    width: 400px;
    height: 40px;
    border: 1px solid #ddd;
    padding: 0 8px;
  }
  .icon-search {
    font-size: 24px;
    height: 40px;
    width: 40px;
    display:flex;
    justify-content: center;
    align-items: center;
  }
`;


export default InputSearch;