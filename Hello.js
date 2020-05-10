import React ,{Component}from 'react';
import Tilt from 'react-tilt'
import Form from './Form';
import Logo from './Logo';
import Navigation from './Navigation'
import Particles from 'react-particles-js';
import brain from './brain.png';	
import Recog from './Recog' 
// import React,{Component} from 'react';
import tachyons from 'tachyons';
import Signup from './Signup'
import Register from './Register'
// function Hello() 
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'f1af77e80788469f8131bab709b4f7a6'
});
class Hello extends Component
{
  constructor(){
super()
this.state={
sign:'signin',
url:'',
input:''
};
  }
  // componentDidMount(){
  //     fetch('http://localhost:3002').then(response=>response.json().then(console.log)

  //   );
  // }



  click=()=>{
    this.setState({url:this.state.input})
    console.log(23);
    console.log(this.state.input);
// console.log("clicked");
app.models.predict("a403429f2ddf4b49b307e318f00e528b",this.state.input).then(
        function(response) {
            console.log((response));
        },
        function(error) {
            // console.log("ERROR:");
                // console.log(error);
        }
    );
  }
  signed=(sta)=>{
    this.setState({sign:sta});
  }
  change=(event)=>{
    console.log(event.target.value);
    this.setState({input:event.target.value});
  }
render()
{
  return (
    <div className="App">
     

{this.state.sign==='signin'?
<Signup signed={this.signed}/>:
(this.state.sign==='home'?
<div>
 <Navigation signed={this.signed} />
 <Particles style={{"number": {
  "value": 100, 
  "density": {
    "enable": true,
    "value_area": 3000

  }
},position:"fixed",top:0,right:0,zIndex:-1
}}/>
<Logo/>

      <Form click={this.click} inp={this.change} />
<Recog image={this.state.url}/>
</div>:
<Register  signed={this.signed}/>

)

}
     
    </div>
  );
}
}
export default Hello;
