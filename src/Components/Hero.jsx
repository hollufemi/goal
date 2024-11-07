import styled from "styled-components";
import HeroImage from "../assets/download6.svg";
// import { FaGooglePlay } from "react-icons/fa";
import appstore from "../assets/appstores.png";
import googleplay from "../assets/googleplay.png";
import ndic from "../assets/ndic.png";
import cbn from "../assets/cbn.png";
const Hero = () => {
    return ( 
        <Container>
           <Wrapper>
                <TextBox>
                        <h1>The money app for Africans.</h1>
                        <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                    <Buttons>
                        <button><img src={appstore} alt="k"/> </button>
                        <button> <img src={googleplay} alt=""/></button>
                    </Buttons>
                    <br/>
                    <small>Fully Licensed by the CBN<img src={cbn} alt=""/> Deposits Insured By<img src={ndic} alt=""/> </small>
               </TextBox>

               <ImageBox>
                <img src={HeroImage} alt="d6" />
               </ImageBox>

           </Wrapper>
       
        </Container>
   );
};
 
export default Hero;


const Container = styled.div`
/* background-color: yellow; */
max-width: 1280px;
margin-left: auto;
margin-right: auto;
padding: 0px 10px;
min-height: calc(100vh - 70px);
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 85%;
/* background-color: pink; */
display: flex;
flex-wrap: wrap;
justify-content: space-between;
/* @media (max-width: 800px) {
    width: 90%;
} */
`
const TextBox = styled.div`
max-width: 400px;
/* background-color: aqua; */
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 800px) {
    max-width: 100%;
   align-items: center;
   text-align: center;
}
h1{
    color: #40196D;
    font-size: 36px;
    font-weight: 800;
    line-height: normal;
}

`
const ImageBox = styled.div`
img{
    width: 450px;

    @media (max-width: 800px) {
    width: 100%;
}
}
`
const Buttons = styled.div`

color: #40196D;


`
