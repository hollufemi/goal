import styled from 'styled-components';
import Valvar from '../assets/download10.svg';
import Entree from '../assets/entreeCapital.svg';
import Sbi from '../assets/sbiHoldings.svg';
import Target from '../assets/target-global.svg';
import Visa from '../assets/download12.svg';
const Heroten = () => {
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
 
export default Heroten;


const Container = styled.div`
    

`

const Updiv = styled.div`
    

h1{
    margin-top: 120px;
    color: #40196D;
    text-align: center;
    
}
`

const Downdiv = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
`
