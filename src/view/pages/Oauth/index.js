import React, {useEffect} from 'react';
import styled from "styled-components";
import {withRouter} from "react-router-dom";
import qs from 'qs'
import axios from "axios";
import {BASE_URL, UNSPLASH_API_KEY, UNSPLASH_SECRET_KEY} from "../../../constants/Consts";
import {setAccessToken, setRefreshToken} from "../../../lib/Common";
import {navigate} from "../../../lib/History";
import {appActions} from "../../../redux/ActionCreators";

function Oauth({location}) {

    const {code} = qs.parse(location.search,{ignoreQueryPrefix: true});

    useEffect(() => {
        getToken();
    })

    const getToken = async () => {
        const result = await axios({
            url: 'https://unsplash.com/oauth/token',
            method: 'post',
            data: {
                client_id: UNSPLASH_API_KEY,
                client_secret: UNSPLASH_SECRET_KEY,
                redirect_uri: BASE_URL+'/oauth',
                code,
                grant_type: 'authorization_code',
            }
        })

        if (result.data) {
            const access_token = result.data.access_token
            const refresh_token = result.data.refresh_token
            setAccessToken(access_token);
            setRefreshToken(refresh_token);
            appActions.updateState({
                login: true,
            });
        } else {
            setAccessToken();
            setRefreshToken();
        }

        navigate('/');
    }



  return (
      <Container/>
  )
}
const Container = styled.div`

`;


export default withRouter(Oauth);