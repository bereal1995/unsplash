import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from 'axios';
import PhotoItems from "./PhotoItems";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/reducer";


function Photos() {

    const accessKey = "0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA";
    const [keyword, setKeyword] = useState("");
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    useEffect( () => {
        getPhotos();
    }, []);

    useEffect( () => {
        searchPhotos();
    }, [page]);


    const getPhotos = async () => {
        const result = await axios.get(`https://api.unsplash.com/photos/?client_id=${accessKey}`);
        dispatch(Action.Creators.setPhotos(result.data));
    }

    const searchPhotos = async () => {
        const result = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${keyword}&per_page=25&page=${page}`);
        dispatch(Action.Creators.setPhotos(result.data.results));
        
        console.log("@@ result", result);
    }

    const onNext = () => {
        setPage(page + 1)
    }

    return (
        <Container>
            <input type="text" onChange={(e) => setKeyword(e.target.value)}/>
            <Button onClick={searchPhotos}>검색</Button>
            <Next onClick={onNext}>다음 페이지</Next>
            <Row>
                {
                    state.photos.map( (item, i) => (
                        <Col key={i}>
                            <PhotoItems photoUrl={item.urls.regular}
                                        title={item.alt_description}
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

const Button = styled.div`
    
`;

const Next = styled.div`
    font-size: 20px;
    margin-top: 20px;
`;

const Row = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const Col = styled.div`
    width: 25%;
    padding: 15px;
`;

export default Photos;