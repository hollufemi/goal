import "./Propstwo.css"
const Propstwo = ({Image,Tagname,Comment,Link}) => {
    return ( 
        <div className="">
        <img src={Image} alt="" />
        <h3>{Tagname}</h3> 
        <p>{Comment}</p>
        <a>{Link}</a> 
    </div>
     );
};

export default Propstwo;