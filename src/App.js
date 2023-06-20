import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import { setState } from 'react';
import Cardlist from './components/card-list/cardlist';
import Searchbox from './components/search-box/searchbox'

class App extends Component{
  constructor(){
    super()
  
this.state={
  monster:[],
  searchField:''
}

}  

componentDidMount (){
  console.log('componentdidmount')
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((value1)=>{return value1.json()
  })
  .then((value2,index)=>{this.setState( {monster:value2, id:index})
  console.log(this.state.monster)
})


}

// anonymous function
onsearchChange=(e)=>{let searchField=e.target.value.toLocaleLowerCase()
this.setState(()=>{return {searchField}})}


  
  render (){
    console.log('render')
    const {monster, searchField}=this.state;
    const {onsearchChange}=this;
    
    // not an anonymous function
   
    let filteredMonster=monster.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)  
    })

    
    return(
      <div className="App">
      <Searchbox changeHandler={onsearchChange} name='search-box' />
      <Cardlist filteredMonster={filteredMonster} id={monster.id}  />
      </div>


 ) }

}
  

export default App;
