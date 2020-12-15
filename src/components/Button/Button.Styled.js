import styled from 'styled-components'
import {pxToRem} from "../../lib/Styled";

export const Button = styled.div`
    background-color: hsla(0,0%,100%,.9);
    border-radius: 4px;
    border: 1px solid transparent;
    box-shadow: 0 1px 2px rgba(0,0,0,.06);
    height: ${pxToRem(32)};
    padding: 0 ${pxToRem(11)};
    margin-left: ${pxToRem(8)};
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(30)};
    opacity: .7;
    svg{
      width: ${pxToRem(16)};
      color: #767676;
    }
    opacity: .7;
    &:hover{
      opacity: 1;
    }
        
`;