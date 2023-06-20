import React from "react";


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
      
      setTimeout(() => {
        console.log('componentdidmount')
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }
    componentDidUpdate() {
        console.log('componentdidupdate')
      document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
        console.log('render')
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
        </div>
      );
    }
  }

  export default App