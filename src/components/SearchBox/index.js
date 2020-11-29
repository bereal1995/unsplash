import React, {useState} from 'react';
import styled from "styled-components";
import cn from 'classnames'
import {navigate} from "../../lib/History";

function SearchBox(props) {

    const {
        shape = 'round',
        placeholder = 'Search free high-resolution photos'
    } = props;

    const [keyword, setKeyword] = useState('');
    const onChange = (e) => setKeyword(e.target.value);
    const onKeyup = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search/${keyword}`)
        }
    }

  return (
      <Container className={cn("SearchBox", {}, shape)}>
          <Label>
            <IconSearch>
              <svg width="100%" className="_2-tlh _1azRR _1mPD6" version="1.1" viewBox="0 0 32 32"
                   aria-hidden="false">
                  <path
                      d="M21.9 20.1c1.3-1.7 2-3.8 2-6.1 0-5.5-4.5-10-10-10C8.5 4 4 8.5 4 14s4.5 10 10 10c2.3 0 4.4-.8 6.1-2l6.1 6.1 1.9-1.9-6.2-6.1zM14 21.3c-4.1 0-7.3-3.3-7.3-7.3S9.9 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
              </svg>
            </IconSearch>
            <Input placeholder={placeholder}
                   onChange={onChange}
                   onKeyUp={onKeyup}
            />
          </Label>
      </Container>
  )
}
const Container = styled.div`
  flex: 1;
`;

const Label = styled.label`
    display:flex;
    width: 100%;
    align-items: center;
    padding: 0 14px;
    background: #eee;
    .round & {
      height: 38px;
      border-radius: 25px;
      border: 1px solid #ddd;  
    }
    .square & {
      height: 54px;
      border-radius: 4px;
    }
`;

const Input = styled.input`
    display:block;
    width: 100%;
    height: 100%;
    outline: 0;
    border: 0;
    font-size: 14px;
    color: #333;
    background: none;
    
`;

const IconSearch = styled.button`
  border: 0;
  background: none;
  outline: 0;
  width: 20px;
  height: 20px;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export default SearchBox;