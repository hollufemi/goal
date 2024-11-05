import { Link } from "react-router-dom";
import styled from "styled-components";
import Image from "../assets/kuda-small.jpg";
import Nigeria from "../assets/nigeria.jpg";

const Header = () => {
    return ( 
        <Headers>

            <Link to="/"><img src={Image} alt="" />
            </Link>
            <Link to="/">
            <p>Home</p>
            </Link>
            
            <Link to="/Business">
                <p>Business</p>
            </Link>
            <Link to="/Personal">
                <p>Personal</p>
            </Link>
            <Link to="/Help">
                <p>Help</p>
            </Link>

            <Buttons>
                <SignBtn>Sign In</SignBtn>
                <JoinBtn>Join Kuda</JoinBtn>
                <ConBtn>
                    <img src={Nigeria} alt="nig" />
                </ConBtn>
            </Buttons>

             {/* <p>Sign In</p>
             <button>Join Kuda</button>

            <img src={Nigeria} alt="flag"/> */}
        </Headers>
     );
}
 
export default Header;

const Headers = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-around;
    color: #40196D;

    p{
        text-decoration: none;
    }

    button{
        background-color: #40196D;
        color: white;

    }

    img{
        width: 70px;
        border-radius: 60%;
    }

`
const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
`

const SignBtn = styled.div`
    
    
`
const JoinBtn = styled.div`
    
    
`
 const ConBtn = styled.div`
    
 `