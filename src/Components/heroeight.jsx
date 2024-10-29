// import styled from 'styled-components';
import Sun from '../assets/download (1).svg';
const heroeight = () => {
    return (  
       <Container>
        <Leftside>
            <img src={Sun} alt='sun'/>
        </Leftside>


        <Rightside>
            <h2>Fees as clear as glass.</h2>
            <p>We're serious about free banking, and we will never, ever charge you for anything without your consent.</p>
            <a>See all our fees</a>
        </Rightside>

       </Container>
    );
};
 
export default heroeight;
