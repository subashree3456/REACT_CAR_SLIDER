import React ,{Component} from 'react';
import './App.css';
import Slider from "./components/Slider";
import Dots from "./components/Dots";
import data from "./components/Imagedata";

export default class App extends Component{

constructor(props){
  super(props)
  this.state ={
    slideIndex : 0,    /// 0 NA FIRST IMG MATTUM THAN DISPLAY AAAGUM  // 1 NA 2ND IMG DISPLAY AAGUM
    // for auto play
    arrow : "right"
  }
}

prevSlide(){
  this.setState(
    {
    slideIndex : this.state.slideIndex===0 ? data.length-1 :this.state.slideIndex -1 , arrow:"left"

  })}

nextSlide(){
  this.setState(
    {
    //currently slideindex value equal to 0 so it compares 0===7 ? no so it displays next image
    //then after each iteration 7===7 ? conditin true so it sets slideindex value to zero once again
    slideIndex : this.state.slideIndex===data.length-1 ? 0 : this.state.slideIndex +1 ,  arrow:"right"

    } )}

componentDidMount(){
  this.timer = setInterval(()=>this.autoPlay(),5000)
}

autoPlay(){
if(this.state.arrow==="left"){
  this.setState({
    slideIndex : this.state.slideIndex===0 ? data.length-1 :this.state.slideIndex -1 
  })
}
else{
  this.setState({
    slideIndex : this.state.slideIndex===data.length-1 ? 0 : this.state.slideIndex +1 
  })
}

}
render(){
  return(
    <div className="App">
  <h1> Image Slider</h1>
  <div className="container">
<div className="slideshow-container">
<Slider slideIndex={this.state.slideIndex}/>
<span className="prev" onClick={()=> this.prevSlide()}>&#10094;</span>
<span className="next" onClick={()=> this.nextSlide()}>&#10095;</span>
</div>
<br/>
<Dots slideIndex={this.state.slideIndex}/>
  </div>
  </div>
  )
}
}