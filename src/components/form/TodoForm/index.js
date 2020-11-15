import React, {useState} from 'react';
import styled from "styled-components";

function TodoForm(props) {

    const {
        buttonText,
        defaultValues ={},
        onSubmit = () => {},
    } = props;

    const [values, setValues] = useState(defaultValues);

    const onValue = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


  return (
      <Container>
          <EnterTodoContainer>
              <input type="text"
                     name={'title'}
                     value={values.title}
                     onChange={onValue}
              />
              <textarea name={'description'}
                        value={values.description}
                        onChange={onValue}/>
              <Button onClick={() => onSubmit(values)}>{buttonText}</Button>
          </EnterTodoContainer>
      </Container>
  )
}
const Container = styled.div`

`;

const EnterTodoContainer = styled.div`
    display:flex;
    padding: 20px;
`;

const Button = styled.div`
    background:#08c;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    color:#fff;
    margin-left: 20px;
    cursor:pointer;
`;


export default TodoForm;