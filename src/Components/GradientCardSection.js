import React from 'react'
import styled from 'styled-components';
import { SectionStyled } from '../Layouts';
import GradientCards from './GradientCards';
import MainTitle from './MainTitle';
import person from '../img/person.jpg';
import person2 from '../img/bitcoin3.jpg';
import bitcoin2 from '../img/bitcoin2.jpg';
import bitcoin from '../img/bitcoin.jpg';
import person3 from '../img/person3.jpg';
import computer from '../img/computer.jpg';
import avatar from '../img/person.jpg';
import CtaButton from '../Components/CtaButton';

const GradientCardSection = () => {
    return (
        <GradientCardSectionStyled>
            <SectionStyled>
                <div className='title-container'>
                    <MainTitle title={'New Upcoming Items'} subtitle={'Discover Upcoming Items'} para={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id unde officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem. Cumque obcaecati sint officiis quis laboriosam vitae, error molestiae temporibus voluptatum consectetur.'}/>
                </div>

                <div className='gradient-cards-container'>
                    <GradientCards image={person} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}/>
                    <GradientCards image={person2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}/>
                    <GradientCards image={person3} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}/>
                    <GradientCards image={computer} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}/>
                    <GradientCards image={bitcoin2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}/>
                    <GradientCards image={bitcoin} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}/>
                    <GradientCards image={person} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}/>
                    <GradientCards image={bitcoin2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}/>
                </div>
            </SectionStyled>
            <div className='cta-btn'>
                        <CtaButton name={'View More'}/>
                    </div>
        </GradientCardSectionStyled>
    )
}

const GradientCardSectionStyled = styled.div`
.cta-btn{
    text-align: center;
    padding: 2rem;
}
.title-container{
    width: 100%;
    text-align-center;
    justify-content: center;
    
}


`;

export default GradientCardSection
