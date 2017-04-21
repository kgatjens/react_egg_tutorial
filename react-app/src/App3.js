import React from 'react';

class App extends React.Component {

  render(){
    return (
      <Button>I <Heart2 /> React</Button>
    )
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}

class Heart2 extends React.Component{
  render(){
    return <span>&hearts;$</span>
  }
}

export default App