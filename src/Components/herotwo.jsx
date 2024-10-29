// import styled from 'styled-components';
import Propsthree from '../Components/propsthree';
import { IoCard } from "react-icons/io5";
import { RiPieChart2Fill } from "react-icons/ri";
import { FaBalanceScale } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";

const herotwo = () => {
    return (  
        <div className="">
        <Propsthree Image={IoCard} Comment='Order a Kuda card on the app with pickup and delivery options.'/>
        <Propsthree Image={RiPieChart2Fill} Comment='Enjoy cashless payment options online and offline.'/>
        <Propsthree Image={FaBalanceScale} Comment='Pay your essential bills and buy gift cards easily'/>
        <Propsthree Image={FaLocationArrow} Comment='Get 25 free transfers to Nigerian banks every month.'/>
        <Propsthree Image={FaPiggyBank} Comment='Save money automatically any time you spend.'/>


     

     
        
        
    </div>
    );
}
 
export default herotwo;