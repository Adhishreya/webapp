import React from 'react'
const Register=({signed})=>{
  const s={
      display:"flex",justifyContent:"  justify-content: flex-end "
  };
 return(

<article className="mw6 center br3 pa7 pa4-ns mv3 ba b--black-10" style={{

  background:" linear-gradient(90deg, pink, blue)"}}>
  <div class="tc" style={{s}}>
  <article className="pa4 black-80">
  <div 
  action="sign-up_submit" method="get" accept-charset="utf-8">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend class="ph0 mh0 fw6 clip">Register</legend>
      <div class="mt3">
        <label class="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" nameName="email-address"  id="email-address"/>
          <label class="db fw4 lh-copy f6" htmlFor="email-address">Name</label>
        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" nameName="name"  id="name"/>
      </div>
      <div class="mt3">
        <label class="db fw4 lh-copy f6" htmlFor="password">Password</label>
        <input class="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div
    class="mt3"><input  onClick={()=>signed('home')} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Register"/></div>
     
  </div>
</article>

   
   
  </div>
</article>

 );
}

export default Register;