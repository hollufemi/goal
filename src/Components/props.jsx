import "./props.css";
const props = ({Comment,Image,Name}) => {
    return ( 
        <div className="">
        <p>{Comment}</p> 
        <img src={Image} alt="" />
        <h6>{Name}</h6>
        
        <p>{Location}</p> 
        </div>
     );
};

export default props;