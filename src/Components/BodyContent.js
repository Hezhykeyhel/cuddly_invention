import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../Layouts'
import MainTitle from './MainTitle';
import SellerCards from './SellerCards';
import BlogSection from './BlogSection';
import GradientCardSection from './GradientCardSection';
import DemonstrationSection from './DemonstrationSection';
import ContactSection from './ContactSection';

const BodyContent = () => (
    <BodyContentStyled>
        <InnerLayout>
            <MainTitle 
            subtitle={'All Entrepreneurs'}
            title={'Top Sellers This Month'} 
            />
            <div className='sellercards'>
                <SellerCards/>
                <SellerCards/>
                <SellerCards/>
            </div>
            <BlogSection/>
            <GradientCardSection/>
            <DemonstrationSection/>
        </InnerLayout>
            <ContactSection/>
            <footer>
                <p>Copyright Hezhykeyhel. All Right Reserved</p>
            </footer>
    </BodyContentStyled>
)

const BodyContentStyled = styled.main`

.sellercards{
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    grid-gap: 2rem;
    margin: 2rem 0;
    @media(max-width: 540px) and (min-width: 365px){
        display: flex;
        flex-direction: column;
        .number{
            font-size: .9rem;
            width: 50px;
        }
        img{
            width: 40px;
            height: 40px;
            object-fit: cover;
        }
        h4, p{
            font-size: .85rem;
            font-weight: 400;
        }
    }
}
footer{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    background: #020A27;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    @media (min-width: 365px){
            transform: translateX(0);
            font-size: 14px;
    }
    p{
        opacity: 0.7;
        align-items: center;
    }
}

`

export default BodyContent
