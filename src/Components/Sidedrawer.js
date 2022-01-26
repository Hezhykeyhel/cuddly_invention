import styled from 'styled-components';

const Sidedrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"];

    if(show){
        sideDrawerClass.push("show");
    }
    return (
        <SideDrawerStyled>
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer_links" onClick={click}>
            <span><i className='fas fa-home'></i><li><a href='#'>Home</a></li></span>
            <span><i className='fas fa-paper-plane'></i><li><a href='#'>About</a></li></span>
            <span><i className='fas fa-envelope'></i><li><a href='#'>FAQS</a></li></span>
            <span><i className='fas fa-clipboard'></i><li><a href='#'>Activity</a></li></span>
            <span><i className='fas fa-phone-alt'></i><li><a href='#'>Contact</a></li></span>
            <span><i className='fas fa-globe'></i><li><a href='#'>Connect</a></li></span>
            
            </ul>
        </div>
        </SideDrawerStyled>
    )
}
const SideDrawerStyled = styled.div`
.sidedrawer{
    width: 70%;
    height: 100vh;
    background: #03091F;
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    z-index: 200;
    transform: translateX(-100%);
    transition: all .4s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        text-align: left;   
        margin-left: -40px;
        padding:.5rem;
        margin-bottom: 15px;
        font-weight: 500;
        &:hover{
            background: #fff;
            color: #03091F;
            transition: all ease-in-out .4s;
            cursor: pointer;
            border-radius: 5px;
        }
    }
    i{
        transform: translateX(78%);
        color:linear-gradient(90deg, #7F41DB 0%, #022894 100%);
        font-size: 25px;
    }
}

.sidedrawer.show{
    transform: translateX(0);
}
.sidedrawer_links{
    display: flex;
    flex-direction: column;
    list-style: none;
    line-height: 35px;
}
.sidedrawer_links > li{
    display: flex;
    align-items: center;
}
.sidedrawer_links > li > a{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    text-decoration: none;
    color: #000;
    font-weight: 600;
    font-size: 1.2rem;
}
.sidedrawer_links > li > a:hover{
    background: rgb(48, 46, 46);
    color: #fff;
    transition: all ease-in .4s;
}
.sidedrawer_links > li > a > span{
    display: flex;
    align-items: center;
    margin-left: 8px;
}
@media (min-width: 900px){
    .sidedrawer{
        display: none;
    }
}


`;

export default Sidedrawer;
