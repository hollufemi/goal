import "./Props.css";
const Props = ({Comment,Image,Name}) => {
    return ( 
        <div className="bell">
        <p>{Comment}</p> 
        <img src={Image} alt="" />
        <h6>{Name}</h6>
        
        <p>{Location}</p> 
        </div>
     );
};

export default Props;