// code 1--setting the set state and making the set state kind of synchronous for console.log to show the updated state
// class App extends Component{
//     constructor(){
//       super()
//       console.log(this)

import Cardlist from "./components/card-list/cardlist";
import Searchbox from "./components/search-box/searchbox";

    
//       this.state={
//         name:'shubham'
//     }
//   }  
  
  
    
//     render ()
//     { return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>{this.state.name}</p>
//           <p>{this.obj1.name}</p>
//           <button onClick={()=>{this.setState(()=> {return{name:  'gupta'}}, ()=>{console.log(this.state.name)})} }>change</button>
//         </header>
//       </div>
//     );
//   }
//   }
// ---------------------------------------------------------------------------------------------------------------------------
// code - 2

// class App extends Component{
//     constructor(){
//       super()
    
//   this.state={
//     monster:[
     
//     ]
//   }
  
//   }  
  
//   componentDidMount (){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((value1)=>{return value1.json()
//     })
//     .then((value2)=>{this.setState( {monster:value2})})
//  yaha hum setstate ke andr callback use kar skte the setState(()=>{return {monster:value2}},()=>{console.log(this.state.monster)})
  
//   }
  
  
    
//     render (){ return(
  
//       <div className="App">
  
//       {
//       this.state.monster.map((monsters, index)=>{
//         return <h1 key={index}>{monsters.name}</h1>
//       })
//       }
  
  
  
//       </div>
  
//    ) }
  
//   }
// ---------------------------------------------------------------------------------------------------------------

// code 3 earch bar and filtering
// class App extends Component{
//     constructor(){
//       super()
    
//   this.state={
//     monster:[],
//     searchField:''
//   }
  
//   }  
  
//   componentDidMount (){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((value1)=>{return value1.json()
//     })
//     .then((value2)=>{this.setState( {monster:value2})})
  
//   }
  
//   // anonymous function
//   onsearchChange=(e)=>{let searchField=e.target.value.toLocaleLowerCase()
//   this.setState(()=>{return {searchField}})}
  
  
    
//     render (){
//       const {monster, searchField}=this.state;
//       const {onsearchChange}=this;
//       // not an anonymous function
//       let filteredMonster=monster.filter((monster)=>{
//         return monster.name.toLocaleLowerCase().includes(searchField)  
//       })
  
  
      
//       return(
  
//       <div className="App">
//         <input type="search" className='search box' placeholder='enter text to search the monster'
//         onChange={onsearchChange}  />
  
//       {
//       filteredMonster.map((monsters, index)=>{
//         return <h1 key={index}>{monsters.name}</h1>
//       })
//       }
  
  
  
//       </div>
  
//    ) }
  
//   }

// code 4...creating the components

// app.js
// class App extends Component{
//     constructor(){
//       super()
    
//   this.state={
//     monster:[],
//     searchField:''
//   }
  
//   }  
  
//   componentDidMount (){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((value1)=>{return value1.json()
//     })
//     .then((value2)=>{this.setState( {monster:value2})})
  
//   }
  
//   // anonymous function
//   onsearchChange=(e)=>{let searchField=e.target.value.toLocaleLowerCase()
//   this.setState(()=>{return {searchField}})}
  
  
    
//     render (){
//       const {monster, searchField}=this.state;
//       const {onsearchChange}=this;
//       // not an anonymous function
     
//       let filteredMonster=monster.filter((monster)=>{
//         return monster.name.toLocaleLowerCase().includes(searchField)  
//       })
  
      
//       return(
//         <div className="App">
//         <Searchbox changeHandler={onsearchChange} />
//         <Cardlist filteredMonster={filteredMonster}   />
//         </div>
  
  
//    ) }
  
//   }

// Searchbox.js

// class Searchbox extends Component{
   
//     render(){
//        const onsearchChange=this.props.changeHandler;
      
//        return( <div>
//        <input 
//        type="search" 
//        className='search box' 
//        placeholder='enter text to search the monster'
//        onChange={onsearchChange}  />
//        </div>)
//     }   
//    }

//   Cardlist.js
  
//   class Cardlist extends Component{


//     render(){
//         const {filteredMonster}=this.props
       
//         return <div className="Cardlist">
//         {filteredMonster.map((monster, index)=>{ return <div key={index}> <h1> {monster.name}</h1> </div> })}
//         </div>
//     }
    
//     }


// code 5...creating the components  final code
// APP.JS
// class App extends Component{
//     constructor(){
//       super()
    
//   this.state={
//     monster:[],
//     searchField:''
//   }
  
//   }  
  
//   componentDidMount (){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((value1)=>{return value1.json()
//     })
//     .then((value2,index)=>{this.setState( {monster:value2, id:index})
//     console.log(this.state.monster)
//   })
  
  
//   }
  
//   // anonymous function
//   onsearchChange=(e)=>{let searchField=e.target.value.toLocaleLowerCase()
//   this.setState(()=>{return {searchField}})}
  
  
    
//     render (){
//       const {monster, searchField}=this.state;
//       const {onsearchChange}=this;
      
//       // not an anonymous function
     
//       let filteredMonster=monster.filter((monster)=>{
//         return monster.name.toLocaleLowerCase().includes(searchField)  
//       })
  
      
//       return(
//         <div className="App">
//         <Searchbox changeHandler={onsearchChange} name='search-box' />
//         <Cardlist filteredMonster={filteredMonster} id={monster.id}  />
//         </div>
  
  
//    ) }
  
//   }

//   SEARCH BOX

//   class Searchbox extends Component{
   
//     render(){
//        const onsearchChange=this.props.changeHandler;
//        const name=this.props.name
      
//        return( <div>
//        <input 
//        type="search" 
//        className={name }
//        placeholder='enter text to search the monster'
//        onChange={onsearchChange}  />
//        </div>)
//     }   
//    }

//    CARDLIST

   
// class Cardlist extends Component{

//     render(){
        
//         const {filteredMonster}=this.props
//          return (
//         <div>
//         <Card filteredMonster={filteredMonster}/>
//         </div>)
//     }
    
//     }

    
// CARD

// class Card extends Component{



//     render(){
//     const{filteredMonster}=this.props
    
//     return(
//     <div className="card-list">
//         {filteredMonster.map((monster, index)=>{ 
//         return <div key={index}>
//         <img src={`https://robohash.org/${monster.id}?set=set2`} height={250} alt="" />
//         <h1> {monster.name}</h1> 
//          </div>  })}
//         </div>
//     )
    
    
//     }
    
    
    
    
//     }

    