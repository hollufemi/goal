import styled from 'styled-components';
import Bros from '../assets/download.svg';
const Heroseven = () => {
    return (  
        <Container>
            <Leftside>
                <h2>We're always happy to help you.</h2>
                <p>You can chat with us on the app, slide into our DMs,tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there'll always be a friendly person there to make your life easy.</p>
                <a>Get Help</a>
            </Leftside>

            <Rightside>
                <img src={Bros} alt='bros'/>
            </Rightside>

        </Container>
    );
}
 
export default Heroseven;


const Container = styled.div`
    display: flex;
    justify-content:space-around;
    padding: 30px;
    margin: auto;
    max-width: 1280px;
    min-height: calc(100vh - 70px);
    align-items: center;


`

const Leftside = styled.div`
    

    h2{
        color: #40196D;
        width: 350px;
        font-size: 25px;
    }

    p{
        width: 350px;
    }

    a{
      color: #40196D;
    }
`

const Rightside = styled.div`
    
    img{
        width: 500px;
    }
`