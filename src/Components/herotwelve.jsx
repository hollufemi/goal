import styled from 'styled-components';
import Propstwo from './Propstwo';
import { HiBriefcase } from "react-icons/hi";
import { FaLocationArrow } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
const Herotwelve = () => {
    return (  
        <Container>
            <Boxone>
            <h1>More for you</h1>
            </Boxone>
        
        <Propstwo Image={HiBriefcase} Tagname='Kuda Business' Comment='Grow your business with our all-in-one business manager. Get a POS, bulk transfers, payroll and more.' Link='Learn More'/>
        <Propstwo Image={FaLocationArrow} Tagname='Transfer & Spend' Comment='Send money for free to any Nigerian account with 25 free transfers every month.' Link='Learn More'/>
        <Propstwo Image={GrMoney} Tagname='Loans' Comment='Get up to ₦150,000 in your Kuda account easily and repay in convenient instalments.' Link='Learn More'/>
       
        
        </Container>
    );
};
 
export default Herotwelve;


const  Container = styled.div`
    
    display: flex;
    height: 300px;
    

   
`
const Boxone = styled.div`
     h1{
        color: #40196D;
    }   

`

