import { Component } from "react";
import './card-list.style.css'
import Card from "./card";

class Cardlist extends Component{





render(){
    
    const {filteredMonster}=this.props
     return (
    <div>
    <Card filteredMonster={filteredMonster}/>
    </div>)
}

}


export default Cardlist;