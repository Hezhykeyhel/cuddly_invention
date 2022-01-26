import styled from 'styled-components';

const Backdrop = ({show, click}) => {
    return show && 
        <BackdropStyled>
        <div className='backdrop' onClick={(click)}>
        </div>
        </BackdropStyled>
};

const BackdropStyled = styled.div`

.backdrop{
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
}


`;


export default Backdrop;
