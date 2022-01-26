import React from 'react'
import styled from 'styled-components';
import { SectionStyled } from '../Layouts';
import GradientCards from './GradientCards';
import MainTitle from './MainTitle';
import CtaButton from './CtaButton';
import computer from '../img/computer.jpg'
import person3 from '../img/person3.jpg';
import bitcoin from '../img/bitcoin.jpg';
import person2 from '../img/person.jpg';
import avatar from '../img/avatar.png';


const DemonstrationSection = () => {

    const ctaButton = <CtaButton name={'Place Bid'} />;

    return (
        <DemonstrationSectionStyled>
            <SectionStyled>
                <div className='title-con'>
                <MainTitle subtitle={'Live Demonstration'} para={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id unde officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem. Cumque obcaecati sint officiis quis laboriosam vitae, error molestiae temporibus voluptatum consectetur.'}/>
                </div>

                <div className='gradient-cards-container'>
                    <GradientCards image={computer} avatar={avatar} name={'@Joel_clock'} price={'0.067 ETH'} ctaButton={ctaButton}/>
                    <GradientCards image={person3} avatar={avatar} name={'@Joel_clock'} price={'0.067 ETH'} ctaButton={ctaButton}/>
                    <GradientCards image={bitcoin} avatar={avatar} name={'@Joel_clock'} price={'0.067 ETH'} ctaButton={ctaButton}/>
                    <GradientCards image={person2} avatar={avatar} name={'@Joel_clock'} price={'0.067 ETH'} ctaButton={ctaButton}/>
                </div>
            </SectionStyled>
        </DemonstrationSectionStyled>
    )
}

const DemonstrationSectionStyled = styled.div`
    .title-con{
        text-align: center;
        justify-content: center;
        align-items: center;
    }
`;

export default DemonstrationSection;

