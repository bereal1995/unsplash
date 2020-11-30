import React, {useEffect} from 'react';
import styled from "styled-components";
import {withRouter} from "react-router-dom";
import PhotoCard from "../../components/Photo/PhotoCard";
import {userActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";

function UserList(props) {

    const {
        match,
        location
    } = props;

    console.log('@@match',match);
    console.log('@@location',location);


    const accessKey = '0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA'
    const user = useSelector(state => state.user);
    const id = match.params.id;
    useEffect( () => {
        getUserPhoto()
    }, [])
    const getUserPhoto = () => userActions.fetchUserPhoto(id,{
        client_id: accessKey,
        per_page: 5,
    });


    return (
      <Container>
          <Row>
              {
                  user.list.map( (item, i) => (
                      <Col key={i}>
                          <PhotoCard imgUrl={item.urls.regular}
                                     name={item.user.name}
                                     username={item.user.username}
                                     profileImg={item.user.profile_image.small}
                          />
                      </Col>
                  ))
              }
          </Row>
      </Container>
    )
}
const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

const Row = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const Col = styled.div`
    width: 33.3%;
    padding: 12px;
`;


export default withRouter(UserList);