import React from "react";
import tachyons from "tachyons";
const Form = ({click,inp}) => {

const bac="radial-gradient(circle farthest-side at 0% 50%,#fb1 23.5%,rgba(240,166,17,0) 0)21px 30px,radial-gradient(circle farthest-side at 0% 50%,#B71 24%,rgba(240,166,17,0) 0)19px 30px,linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0,linear-gradient(150deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,linear-gradient(90deg,#B71 2%,#fb1 0,#fb1 98%,#B71 0%)0 0 #fb1;background-size: 40px 60px";

  return (
    <div style={{ display: "flex", justifyContent: "center" ,marginTop:100,marginLeft:"20vw",height:"30vh"}} className="h2 inpu">
    <div style={{ display: "flex", justifyContent: "center", marginTop:50,width:"5vw"}} >
    
      <input type="tex" className="h2" style={{width:"100"}} onChange={inp} />
      <button onClick={click} className="h2 link black mw5 dt hide-child ba b--black-20 pa1 br2 pointer" >Upload</button>
    </div>

  </div>
  );
};
export default Form;
