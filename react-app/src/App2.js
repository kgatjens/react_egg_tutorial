import React from 'react';

//const App = () => <h1>Hello</h1>
//https://egghead.io/lessons/react-state-basics

/*
class App extends React.Component {
  render(){
    //return React.createElement('h1', null, 'Hello EggHeads')
    //return <h1>Hello Series</h1> 
    //return <h1>Hello Series</h1> <b>bold</b> // error, only one is allowed
    return (
      <div>
        <h1>Hello</h1>
        <b>bold</b> 
      </div>
    )
  }
}
*/

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      txt2: 'this is the state txt',
      cat2: 0
    }
  }

  update(e){
    this.setState({txt2: e.target.value})
  }

  render(){
   // let txt = this.props.txt
    return (
    <div>
         /* <input type="text" onChange={this.update.bind(this)} />
          <h1>{this.state.txt2} - {this.state.cat2}</h1> */

          <Widget update={this.update.bind(this)} />
    </div>

    //return <h1>{txt}</h1>  
    )
  }
}

const Widget = (props) => 
  <input type="text" onChange={props.update} />

export default App

/*
App.propType = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}
*/

//another way to create a component

