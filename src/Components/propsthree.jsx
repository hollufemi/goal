
import "./propsthree.css";
const propsthree = ({Image,Comment}) => {
    return ( 
        <div className="firstcard">
        <img src={Image} alt="" />
        <h6>{Comment}</h6>
        
    </div>
     );
};

export default propsthree;