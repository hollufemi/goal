import Kd from '../assets/kuda-small.jpg';
import styled from 'styled-components';
const Footer = () => {
    return (  
        <Container>
            <Cover>
                 <Firstdiv>
                     <img src={Kd} alt='kuda-small-icon'/>
                 </Firstdiv>

                 <Seconddiv>
                    <div>
                       <a><h6>Personal</h6><br/>Discover Personal<br/>Transfer & Spend<br/>Save<br/>Investments<br/>Kuda card</a>
                    </div>

                    <div>
                        <a><h6>Business</h6><br/>Discover Business<br/>Business Registration<br/>softPOS<br/>Invoicing<br/>POS Machine<br/>Business Loan<br/>Business API<br/>Join Kuda Business</a>

                    </div>

                    <div>
                        <a><h6>Company</h6><br/>Blog<br/>Press<br/>Join Our Team<br/>About Us</a>
                    </div>

                    <div>
                        <a><h6>Help</h6><br/>Get Help<br/>Scam Awareness<br/>FAQs<br/>Security<br/>Contact Us<br/>Self Help</a>

                    </div>

                    <div>
                        <a><h6>Transparency</h6><br/>Terms & Conditions<br/>Privacy Policy<br/>Information Security Policy<br/>Cookie Policy<br/>Whistleblowing Policy</a>

                    </div>

                    <div>
                        <button><small>Download on the</small><br/>App Store</button>
                        <button><small>GET IT ON</small><br/>Google Play</button>
                        <button>Sign in to Kuda<br/>On The Web</button>
                    </div>


                </Seconddiv>
            </Cover>    
            
            <Thirddiv>
                <div>
                    <p>Products may vary by country or market.</p>
                </div>

                <div><h6>Contact</h6><br/><h6>help@kuda.com</h6>
                </div>

                <div>
                <h6>Lagos</h6>
                <p>1-11 Commercial Avenue,<br/> Yaba, Lagos,<br/>Nigeria</p>
                </div>

                <div>
                    <h6>London</h6>
                    <p>5 New Street Square,<br/>London, EC4A 3TW,<br/>United Kingdom</p>
                </div>

                <div>
                <h6>Cape Town</h6>
                <p>146 Campground Road,<br/>Snakepit Building, Level 4,<br/> Newlands, Cape Town</p>
                </div>

                <div>
                <h6>Canada</h6>
                <p>3080 Yonge Street,<br/>Suite 6060, Toronto,<br/>Ontario M4N 3N1</p>
                </div>

                <div>
                    <p>© 2024 Kuda Technologies Ltd (Company No.11472232). All rights reserved.</p>
                    <p>If you would like to find out more about which Kuda entity you receive services from, please reach out to us via the in-app chat in the Kuda app. Nigerian banking services offered by<br/> Kuda Microfinance Bank (RC796975) with registered address at 1-11 Commercial Avenue, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the Central Bank of Nigeria. Deposits are<br/>insured by the Nigerian Deposit Insurance Corporation (NDIC).</p>
                    <p>UK services are offered by Kuda EMI Ltd (Company No. 13724208) with registered address at 5 New Street Square, London, EC4A 3TW, United Kingdom.</p>
                    <p>Canada services will be provided by Kuda Canada Technologies Limited, an Ontario corporation registered under number 1000286176, with its registered address located at 3080 Yonge Street,<br/> Suite 6060, Toronto, Ontario M4N 3N1. Kuda Canada Technologies Limited is duly registered with The Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a money<br/> service business, bearing registration number M23163015.</p>
                </div>


            </Thirddiv>



        </Container>
    );
};
 
export default Footer;

const Container = styled.div`
    /* display: flex; */
    
`
const Cover = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Firstdiv = styled.div`
    
`
const Seconddiv = styled.div`
    /* display: flex; */
`
const Thirddiv = styled.div`
    display: flex;
`
