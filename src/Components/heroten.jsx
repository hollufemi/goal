// import styled from 'styled-components';
import Valvar from '../assets/download (10).svg';
import Entree from '../assets/entreeCapital.svg';
import Sbi from '../assets/sbiHoldings.svg';
import Target from '../assets/target-global.svg';
import Visa from '../assets/download (12).svg';
const heroten = () => {
    return (  
        <Container>
            <Updiv>
                <h1>Our Partners</h1>
            </Updiv>

            <Downdiv>
                <img src={Valvar} alt='valv'/>
                <img src={Entree} alt='entree'/>
                <img src={Sbi} alt='sbiholdings'/>
                <img src={Target} alt='targetglobal'/>
                <img src={Visa} alt='visa'/>
            </Downdiv>
        </Container>
    );
}
 
export default heroten;
