import React from 'react'
import styled from 'styled-components'
import data from '../data';

const SellerCards = () => {
    return (
        <SellerCardsStyled>
            {
                data.map((item) => {
                    return <div className='SellerCard' key={item.id}>
                        <div className='number'>
                            <p>0 {item.id}</p>
                        </div>
                        <div className='profile'>
                            <img src={item.image} alt=''/>
                            <div className="text">
                                <h4>{item.name}</h4>
                                <p>{item.currency}</p>
                            </div>

                        </div>
                    </div>
            })
        }
        </SellerCardsStyled>
    )
}

const SellerCardsStyled = styled.div`

    border-radius: 20px;
    width: 100%;
    background: rgba(255, 255, 255, 0.03);
    transition: all ease-in-out .4s;
    &:hover{
            transform: translateY(-10px);
        }
    .SellerCard{
        display: flex;
        padding: 1.5rem 1rem;
        width: 100%;
        }
        .number{
            padding-right: 1rem;
            font-size: 1.6rem;
            opacity: 0.5;
        }
        p{
            font-weight: 700;
        }
    }
    .profile{
        display: flex;
        img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin-right: 1rem;
            object-fit:cover;
            border: 2px solid #395FF6;
        }
    }

`;

export default SellerCards
