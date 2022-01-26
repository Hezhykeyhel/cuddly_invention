import React from 'react';
import styled from 'styled-components';
import SmallHeading from './SmallHeading';

const MainTitle = ({title, subtitle, para}) => {
    return (
        <MainTitleStyled>
            <SmallHeading title={subtitle}/>
            <h3>{title}</h3>
            <small>{para}</small>
        </MainTitleStyled>
    )
}

const MainTitleStyled = styled.div`
    h2{
        padding-top: 1rem;
        font-weight: 500;
    }
    p{
        padding: 1.2rem 0;
        opacity: 0.5;
    }

`;

export default MainTitle
