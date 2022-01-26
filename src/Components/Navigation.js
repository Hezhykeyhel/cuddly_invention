import React from 'react';
import logo from '../img/logo2.png';
import styled from 'styled-components';

const Navigation = ({click}) => {
    return (
        <NavigationStyled>
        <div className='logo'>
            <img src={logo}/>
        </div>

        <ul className='nav-items'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>FAQS</a></li>
            <li><a href='#'>Activity</a></li>
            <li><a href='#'>Contact</a></li>
            <div className="primary-btn">
                Connect
            </div>
        </ul>
        <div className="hamburger_menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
        </div>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    position: absolute;
    top: 30;
    margin-left: -20px;
    z-index: 100;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .nav-items{
        display: flex;
        align-items: center;
    li{
        margin: 0 1rem;
    }
    .primary-btn{
        margin-left: 1rem;
        background: rgba(57, 95, 246, 0.6);
        padding: .6rem .8rem;
        border-radius: 70px;
        cursor: pointer;
        transition: all .4s ease-in-out;
        &:hover{
            background: rgba(57, 95, 246, 1);
        }
    }
}
    .cart_link:hover{
        background: #dd219e;
        transition: all ease-in .4s;
        color: rgb(219, 218, 218);
    }
    
    .hamburger_menu{
        width: 35px;
        height: 20px;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transform: translateX(-30%);
    }
    
    .hamburger_menu > div{
        width: 100%;
        height: 3px;
        background: #fff;
    }
    .hamburger_menu:hover > div{
        background:#dd219e;
        transition: .4s all ease-in;
    }
    @media (max-width: 900px){
        .nav-items{
            display: none;
        }
        .hamburger_menu{
            display: flex;
            position: fixed;
            right: 20px;
        }
    }
        .logo{
            img{
                width: 200px;
                margin-top: 15px;
                transform: translateX(80%);
                @media (min-width: 365px){
                    width: 50px;
                }
            }
        }
`;

export default Navigation;
