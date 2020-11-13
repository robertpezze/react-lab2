import React, {} from 'react';
import loading from '../src/img/loading.gif';
import styled from 'styled-components';

const LoadingDiv = styled.div`
        position:        fixed; /* Sit on top of the page content */
        width:           100%; /* Full width (cover the whole page) */
        height:          100%; /* Full height (cover the whole page) */
        top:             0;
        left:            0;
        right:           0;
        bottom:          0;
        background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
        z-index:          1051; /* Specify a stack order in case you're using a different order for other elements */
        cursor:          pointer; /* Add a pointer on hover */
`;

const LoadingImg = styled.img`
       top:        50%;
       left:       50%;
       position:   absolute;
       margin-left: -470px;
       margin-top:  -200px;
`;

export default function Loading({isLoading}) {

    let show = {display: isLoading ? 'block' : 'none'};

    return (
        <LoadingDiv id="loading" style={show}>
            <LoadingImg src={loading} alt="Loading..."/>
        </LoadingDiv>
    );

}