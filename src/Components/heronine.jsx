import styled from 'styled-components';
import Props from './Props';
import Adebambo from '../assets/adebambo.svg';
import Babajide from '../assets/babajide.svg';
import Muhammad from '../assets/muhammad.svg';
import Realsok from '../assets/realsok.svg';
import Tc from '../assets/download11.svg';
import World from '../assets/download9.svg';
import Fintech from '../assets/fintech.svg';
import Bbc from '../assets/download8.svg';
import Cnbc from '../assets/cnbc.svg';
import Eurom from '../assets/euromoney.svg';


const Heronine = () => {
    return (  
        <Container>
            
            <h1>Don't just take our word for it</h1>
           

            <Middlediv>

            <Props Comment='I like the fact that kuda Microfinance Bank doesnt only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!'  Image={Adebambo} Name='Adebambo Oyekan'/>
            <Props Comment='Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek' Image={Babajide} Name='Babajide Duroshola'/>
            <Props Comment='Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah' Image={Muhammad} Name='Muazu Muhammad Kudu'/>
            <Props Comment='This is the best banking app! Im enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. Ive made kuda my main bank account and Im gonna refer all my friends! ' Image={Realsok} Name='realsok'/>
            
             </Middlediv>

             <Downdiv>
                <img src={Tc} alt='tc'/>
                <img src={World} alt='world'/>
                <img src={Fintech} alt='fintech'/>
                <img src={Bbc} alt='bbc'/>
                <img src={Cnbc} alt='cnbc'/>
                <img src={Eurom} alt='euromoney'/>


             </Downdiv>

        </Container>
    );
}
 
export default Heronine;


const Container = styled.div`
    

    h1{
        color: #40196D;
        text-align: center;
        
    }

`
// const Props = styled.div`
    
// `

const Middlediv = styled.div`
    display: flex;
    margin: auto;
   
  
    img{
        width: 60px;
        border-radius: 50%;
        transform: translate(-50%-50%) 
    }
    
`

const Downdiv = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 40px;

    img{
        
        width: 80px;
    }
`