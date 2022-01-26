import React from 'react'
import styled from 'styled-components'

function CtaButton({name}) {
    return (
        <CtaButtonStyled>
            {name}
        </CtaButtonStyled>
    )
}

const CtaButtonStyled = styled.a`
    text-transform: uppercase;
    display: inline-block;
    padding: 0.9rem 1.5rem;
    border-radius: 8px;
    font-size: .9rem;
    font-weight: 500;
    cursor: pointer;
    background: linear-gradient(120deg, #EB3FA9, #395FF6);
    transition: all .8s ease-in-out;
    &:last-child{
        margin-left: 1.5rem;
    }
    &:hover{
        transition: all ease-in-out .8s;
        background: linear-gradient(120deg, #395FF6, #EB3FA9 );
    }
    @media(max-width: 768px){
        font-size: .7rem;
    }
`;

export default CtaButton
