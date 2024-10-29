// import styled from 'styled-components';
import Bros from '../assets/download.svg';
const heroseven = () => {
    return (  
        <Container>
            <Leftside>
                <h2>We're always happy to help you.</h2>
                <p>You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there'll always be a friendly person there to make your life easy.</p>
                <a>Get Help</a>
            </Leftside>

            <Rightside>
                <img src={Bros} alt='bros'/>
            </Rightside>

        </Container>
    );
}
 
export default heroseven;
