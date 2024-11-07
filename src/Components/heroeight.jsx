import styled from 'styled-components';
import Sun from '../assets/download1.svg';
const Heroeight = () => {
    return (  
       <Container>
        <Leftside>
            <img src={Sun} alt='sun'/>
        </Leftside>


        <Rightside>
            <h2>Fees as clear as glass.</h2>
            <p>We're serious about free banking, and we will never,<br/> ever charge you for anything without your consent.</p>
            <a>See all our fees</a>
        </Rightside>

       </Container>
    );
};
 
export default Heroeight;


const Container = styled.div`
    display: flex;
    justify-content:space-around;
    padding: 30px;
    margin: auto;
    max-width: 1280px;
    min-height: calc(100vh - 70px);
    align-items: center


`

const Leftside = styled.div`
    img{
        width: 450px;
        
    }
`

const Rightside = styled.div`
    

    h2{
        color: #40196D;
    }

    a{
        color: #40196D;
    }
`