import styled, {css} from 'styled-components'

export const Button = styled.div`
    background-color: hsla(0,0%,100%,.9);
    border-radius: 4px;
    border: 1px solid transparent;
    box-shadow: 0 1px 2px rgba(0,0,0,.06);
    height: 32px;
    padding: 0 11px;
    margin-left: 8px;
    font-size: 14px;
    line-height: 30px;
    opacity: .7;
    z-index: 1;
    user-select: none;
    svg{
      width: 16px;
      color: #767676;
    }
    opacity: .7;
    &:hover{
      opacity: 1;
    }
        
`;

export const FormButton = css`
    border-radius: 4px;
    font-size: 15px;
    line-height: 1.6;
    padding: 9px 18px;
    cursor: pointer;
    border: 1px solid transparent;
`;