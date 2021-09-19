import React, {useEffect, useRef, useState} from 'react';
import '../assets/css/login.css'
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col
} from "react-bootstrap";

const Login = ({history}) => {
    const[warning,setWarning] =useState('hidden')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [opacity,setOpacity]=useState(0)
    const[margin,setMargin]=useState('0px')
        let particle=useRef(null);

    useEffect(()=>{
        (()=>{

            !function(a){var b="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;"function"==typeof define&&define.amd?define(["exports"],function(c){b.ParticleNetwork=a(b,c)}):"object"==typeof module&&module.exports?module.exports=a(b,{}):b.ParticleNetwork=a(b,{})}(function(a,b){var c=function(a){this.canvas=a.canvas,this.g=a.g,this.particleColor=a.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*a.options.velocity,y:(Math.random()-.5)*a.options.velocity}};return c.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},c.prototype.h=function(){this.g.beginPath(),this.g.fillStyle=this.particleColor,this.g.globalAlpha=.7,this.g.arc(this.x,this.y,1.5,0,2*Math.PI),this.g.fill()},b=function(a,b){this.i=a,this.i.size={width:this.i.offsetWidth,height:this.i.offsetHeight},b=void 0!==b?b:{},this.options={particleColor:void 0!==b.particleColor?b.particleColor:"#fff",background:void 0!==b.background?b.background:"#1a252f",interactive:void 0!==b.interactive?b.interactive:!0,velocity:this.setVelocity(b.speed),density:this.j(b.density)},this.init()},b.prototype.init=function(){if(this.k=document.createElement("div"),this.i.appendChild(this.k),this.l(this.k,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background))this.l(this.k,{background:this.options.background});else{if(!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background))return console.error("Please specify a valid background image or hexadecimal color"),!1;this.l(this.k,{background:'url("'+this.options.background+'") no-repeat center',"background-size":"cover"})}if(!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.i.appendChild(this.canvas),this.g=this.canvas.getContext("2d"),this.canvas.width=this.i.size.width,this.canvas.height=this.i.size.height,this.l(this.i,{position:"relative"}),this.l(this.canvas,{"z-index":"20",position:"relative"}),window.addEventListener("resize",function(){return this.i.offsetWidth===this.i.size.width&&this.i.offsetHeight===this.i.size.height?!1:(this.canvas.width=this.i.size.width=this.i.offsetWidth,this.canvas.height=this.i.size.height=this.i.offsetHeight,clearTimeout(this.m),void(this.m=setTimeout(function(){this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&this.o.push(this.p),requestAnimationFrame(this.update.bind(this))}.bind(this),500)))}.bind(this)),this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&(this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p),this.canvas.addEventListener("mousemove",function(a){this.p.x=a.clientX-this.canvas.offsetLeft,this.p.y=a.clientY-this.canvas.offsetTop}.bind(this)),this.canvas.addEventListener("mouseup",function(a){this.p.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p)}.bind(this))),requestAnimationFrame(this.update.bind(this))},b.prototype.update=function(){this.g.clearRect(0,0,this.canvas.width,this.canvas.height),this.g.globalAlpha=1;for(var a=0;a<this.o.length;a++){this.o[a].update(),this.o[a].h();for(var b=this.o.length-1;b>a;b--){var c=Math.sqrt(Math.pow(this.o[a].x-this.o[b].x,2)+Math.pow(this.o[a].y-this.o[b].y,2));c>120||(this.g.beginPath(),this.g.strokeStyle=this.options.particleColor,this.g.globalAlpha=(120-c)/120,this.g.lineWidth=.7,this.g.moveTo(this.o[a].x,this.o[a].y),this.g.lineTo(this.o[b].x,this.o[b].y),this.g.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},b.prototype.setVelocity=function(a){return"fast"===a?1:"slow"===a?.33:"none"===a?0:.66},b.prototype.j=function(a){return"high"===a?5e3:"low"===a?2e4:isNaN(parseInt(a,10))?1e4:a},b.prototype.l=function(a,b){for(var c in b)a.style[c]=b[c]},b});

// Initialisation
            if(particle.current && particle)
            {
                console.log(particle.current)
                var canvasDiv = particle.current
                var options = {
                    particleColor: '#e3b04b',
                    background:'../assets/img/login-bg.jpg',
                    interactive: true,
                    speed: 'medium',
                    density: 'high'
                };
                var particleCanvas = new ParticleNetwork(canvasDiv, options);
            }

        })();
    },[])


    const auth=(e)=>{
        e.preventDefault();
        console.log("hi")
        if(username!=='sherry' || password!=='12345')
        {
            setWarning('visible')
            setOpacity(1)
            setMargin('5px')
        }
        else{
            history.push('/admin/data/addmember')
        }
    }
    return (
        <div id='particle-canvas' ref={particle} className="login-body">
        <Container className="login-container">
            <Row className="login_wrapper">
                <Col xs={12} md={6} className="login_wrapper--left"></Col>
                <Col xs={12} md={6} className="login_wrapper--right flex-column">
                   <Container className="px-5 pb-5">
                       <Row className="justify-content-center align-items-center pt-4">
                           <h3 className="login-h3">Sign In</h3>
                       </Row>
                       <Row  className="pb-3 justify-content-center">
                           <h6 style={{visibility:`${warning}`, opacity:`${opacity}` , marginTop:`${margin}`}} className="login-warning">Invalid username or password</h6>
                       </Row>
                       <Form onSubmit={auth}>
                           <Form.Group controlId="formBasicEmail">
                               <Form.Label className="login-label">USERNAME</Form.Label>
                               <Form.Control value={username} onChange={(e)=>{setUsername(e.target.value)}} className="login-input" type="text" placeholder="Enter username" />
                           </Form.Group>

                           <Form.Group controlId="formBasicPassword">
                               <Form.Label className="login-label">PASSWORD</Form.Label>
                               <Form.Control value={password} onChange={(e)=>{setPassword(e.target.value)}} className="login-input" type="password" placeholder="Password" />
                           </Form.Group>
                           <Row className="justify-content-center">
                               <Button type="submit" className="login-submit">Sign in</Button>
                           </Row>
                       </Form>

                   </Container>


                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Login;
