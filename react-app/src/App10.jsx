//maps component to create array of data
import React from 'react';

class App extends React.Component {

  render(){
    return(
      <Parent>
        <div className="childA"> </div>
        <div className="childB"> </div>
      </Parent>
    )
  }
}


class Parent extends React.Component{
  render(){
    // console.log(this.props.children)
    //   let items = React.Children
    //     .forEach(this.props.children, child => console.log(
    //       child.props.className))
    //   let items = React.Chidren.toArray(this.props.children)
    let items = this.props.children.map()
    console.log(items)
    return null
  }
}

export default App

