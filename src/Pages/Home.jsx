import styled from "styled-components";
import Header from "../Static/Header";
import Hero from "../Components/Hero";
import Herotwo from "../Components/herotwo";
import Herothree from "../Components/herothree";
import Herofour from "../Components/herofour";
import Herofive from "../Components/herofive";
import Herosix from "../Components/herosix";
import Heroseven from "../Components/heroseven";
import Heroeight from "../Components/heroeight";
import Heronine from "../Components/heronine";
import Heroten from "../Components/heroten";
import Heroeleven from "../Components/heroeleven";
import Herotwelve from "../Components/herotwelve";
import Herothirteen from "../Components/herothirteen";
import Herofourteen from "../Components/herofourteen";

const Home = () => {
    return (  
        <Container>
           {/* <Header/> */}
           <Hero/>
           <Herotwo/>
           <Herothree/>
           <Herofour/>
           <Herofive/>
           <Herosix/>
           <Heroseven/>
           <Heroeight/>
           <Heronine/>
           <Heroten/>
           <Heroeleven/>
           <Herotwelve/>
           <Herothirteen/>
           <Herofourteen/>
        </Container>
    );
}
 
export default Home;

const Container = styled.div``
// const LogoNav =  styled.div``