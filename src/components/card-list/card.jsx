import { Component } from "react";

class Card extends Component{



render(){
const{filteredMonster}=this.props

return(
<div className="card-list">
    {filteredMonster.map((monster, index)=>{ 
    return <div key={index}>
    <img src={`https://robohash.org/${monster.id}?set=set2`} height={250} alt="" />
    <h1> {monster.name}</h1> 
     </div>  })}
    </div>
)


}




}
export default Card