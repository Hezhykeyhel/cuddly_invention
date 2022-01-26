import React from 'react'
import styled from 'styled-components';
import {SectionStyled} from '../Layouts';
import map from '../img/map.png';

const ContactSection = () => {
    return (
        <ContactSectionStyled>
            <SectionStyled>
                <div className='contact-info'>
                    <h3 className='contact-title'>
                        Contact Us
                    </h3>
                    <p>11, Josiah Aina Street, Alakuko, Lagos.</p>
                    <p>damilolaegbetayo12@gmail.com</p>
                    <p>+2349077966681</p>
                </div>
                <div className='bg-image'>
                    <img src={map} alt=''/>
                </div>
            </SectionStyled>
        </ContactSectionStyled>
    )
}

const ContactSectionStyled = styled.div`
    background: #020C31;
    display: flex;
    justify-content: center;
    align-align: center;
    position: relative;
    padding: 4rem 0;
    text-align: center;
    z-index: 1;
    p{
        opacity: 0.5;
    }
    .bg-image{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        img{
            width: 100%;
            opacity: 0.07;
            object-fit: cover;
        }
    }
    .contact-title{
        position: relative;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        font-weight: 500;
        font-size: 1.5rem;
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            transform: translateX(-50%);
            width: 4rem;
            height: 2px;
            left: 50%;
            background-color: #eb3fa9;

        }
    }


`;

export default ContactSection
