import { Component } from "react";
import './search-box.style.css'



class Searchbox extends Component{
   
 render(){
    const onsearchChange=this.props.changeHandler;
    const name=this.props.name
   
    return( <div>
    <input 
    type="search" 
    className={name }
    placeholder='enter text to search the monster'
    onChange={onsearchChange}  />
    </div>)
 }   
}

export default Searchbox