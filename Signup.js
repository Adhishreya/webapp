import React,{Component} from 'react'

 
// const Signup=({signed})=>{
  const s={
      display:"flex",justifyContent:"  justify-content: flex-end "
  };

class Signup extends Component{
constructor(props){
super(props)

this.state={
  psdw:'',
  email:''
};
}

submit=()=>{
 fetch('http://localhost:3002/signin',{
method:'post',
headers:{'Content-Type': 'application/json'},
body:JSON.stringify({
  password:this.state.psdw,
  email:this.state.email
})
 }).then(response=>response.json()).then(data=>{
  if(data==="successfully logged in ")
  {
    this.props.signed('home');
  }

 });
// ()=>props.signed('register');
// console.log(this.state);

}

change_email=(event)=>{
  this.setState({email:event.target.value});
}

change_pswd=(event)=>{
  this.setState({psdw:event.target.value});
}

  render(){
    const {signed}=this.props;
 return(

<article class="mw6 center br3 pa7 pa4-ns mv3 ba b--black-10" style={{

  background:" linear-gradient(90deg, pink, blue)"}}>
  <div class="tc" style={{s}}>
  <article class="pa4 black-80">
  <div action="sign-up_submit" method="get" accept-charset="utf-8">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
      <div class="mt3">
        <label class="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
        <input class="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"
onChange={this.change_email}
        />
      </div>
      <div class="mt3">
        <label class="db fw4 lh-copy f6" htmlFor="password">Password</label>
        <input class="b pa2 input-reset ba bg-transparent" type="password"  name="password"  id="password"
        onChange={this.change_pswd}
/>
      </div>
    </fieldset>
    <div
    class="mt3"><input  onClick={this.submit} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign in"/></div>
     <h2 onClick={()=>signed('register')} class="f5 fw4 gray mt0"> <div class="mt3"><input class="b ph3 pv2 input-reset ba b--transparent bg-transparent grow pointer f6" type="submit" value="Register"/></div></h2>
  </div>
</article>

   
   
  </div>
</article>

 );
}
}

export default Signup;