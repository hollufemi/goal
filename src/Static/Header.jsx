import { Link } from "react-router-dom";
import styled from "styled-components";
import Image from "../assets/kuda-small.jpg";
import Nigeria from "../assets/nigeria.jpg";

const Header = () => {
    return ( 
        <Headers>

            <Link to="/"><img src={Image} className="kudalogo" alt="" />
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
    align-items: center;
    color: #40196D;
    

    p{
        text-decoration: none; 
        font-weight: 90px;
    }

    button{
        background-color: #40196D;
        color: white;

    }
    .kudalogo{
        width: 150px;
    }
   
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
`

const SignBtn = styled.div`
   align-items: center;
   width: 100px;
   margin: auto;
    
`
const JoinBtn = styled.div`
   background-color:#40196D ;
   color:white ;
   height: 4vh;
   border-radius: 6px;
   padding: 10px;
   width: 110px;
   text-align: center;
`
 const ConBtn = styled.div`
     img{
        width: 40px;
        /* margin: auto; */
        margin-top: 10px;
        margin-left: 20px;
       /* border-radius: 60%;  */
    }
 `