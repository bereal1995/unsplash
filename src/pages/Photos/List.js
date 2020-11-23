import React, {useEffect, useState} from "react";
import styled from "styled-components";
import PhotoItem from "./PhotoItems";
import {useSelector} from "react-redux";
import {photoActions} from "../../redux/ActionCreators";
import Search from "../../components/InputSearch";


function List(props) {
    
    const {
    } = props;

    const accessKey = "0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA";
    const photo = useSelector(state => state.photo);
    useEffect( () => {
        fetchPhotos();
    }, []);

    const fetchPhotos = () => photoActions.fetchPhotos({
        client_id: accessKey,
        per_page:30,
    })
    
    return (
        <Container>
            <Search/>
            <Row>
                {
                    photo.list.map( (item, i) => (
                        <Col key={i}>
                            <PhotoItem photoUrl={item.urls.regular}
                                        title={item.id}
                                        username={item.user.name}
                                        likes={item.likes}/>
                        </Col>
                    ) )
                }
            </Row>
        </Container>

    )
}

const Container = styled.div`

`;


const Row = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const Col = styled.div`
    width: 25%;
    padding: 15px;
`;

export default List;
