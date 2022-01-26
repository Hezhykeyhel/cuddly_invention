import React from 'react'
import styled from 'styled-components';
import SmallHeading from './SmallHeading';
import blockchain from '../img/bchain.png'
import CtaButton from './CtaButton';

const MainContent = () => {
    return (
        <MainContentStyled>
            <div className='content'>
                <div className='left'>
                    <SmallHeading title={'All Digital Currency In One Place'} identifier={'Before'}/>
                    <h1>
                All NFTs You Need In One Marketplace
                The Best Place to Collect, Buy and Sell &nbsp;
                <span className='GradientText'>Awesome NFTs</span>
                     </h1>
                <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vero id unde officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem. 
                Cumque obcaecati sint officiis quis laboriosam vitae, error molestiae temporibus 
                voluptatum consectetur.
                </small>
            <div className='btns-con'>
                <CtaButton name={'discover more'}/>
                <CtaButton name={'get more'}/>
            </div>
                </div>
                <div className='right'>
                    <img src={blockchain} alt=''/>
                </div>
            </div>
        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 80%;
    height: 100%;
    transform: translateX(-50%);
    .content{
        padding-top: 6em;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
        width: 100%;
        @media(max-width: 540px){
            grid-template-columns: repeat(1, 1fr);
            img{
                transform: translateX(-70%) translateY(20px);
                bottom: 40px;
            }
            h1{
                font-size: 20px;
            }
            .btns-con{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                text-align: center;
                justify-content: center;
                align-items: center;
            }
            .right{
                img{
                    transform: translateX(0);
                    position: relative;
                    width: 80%;
                }    
            }
        }
        }
        .btns-con{
            margin-top: 1.5rem;
            display: flex;
        }
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            @media(max-width: 540px){
                transform: translateY(-20px);
            }
        }
        h1{
            padding: 1rem;
            font-size: 30px;
        }
        .right{
            img{
                position: absolute;
                right: -11%;
                bottom: 5%;
                width: 50%;
            }
        }

    }
`;

export default MainContent;
