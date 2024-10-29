// import styled from 'styled-components';
import Blockcard from '../assets/download (3).svg';
const herosix = () => {
    return (  
        <Container>
            <Leftside>
                <img src={Blockcard} alt='block'/>
            </Leftside>


            <Rightside>
                <h2>Turn off access, turn on safety.</h2>
                <p>Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We'd like to see them try.</p>
                <a>Learn more about Cards</a>
            </Rightside>
        </Container>
    );
}
 
export default herosix;
