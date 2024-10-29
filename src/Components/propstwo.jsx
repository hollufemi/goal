
import "./proptwo.css";
const propstwo = ({Image,Tagname,Comment,Link}) => {
    return ( 
        <div className="">
        <img src={Image} alt="" />
        <h3>{Tagname}</h3> 
        <p>{Comment}</p>
        <a>{Link}</a> 
    </div>
     );
};

export default propstwo;