import React, { Component } from 'react';
import Chore from './Chores/Chore';
class People extends Component {

//functions here
//render block
  render() {

  let chores = (
    <div>
    {this.props.chores.map((chore, choreOwner) => {
      return <Chore 
      onDragStart={(chore, choreOwner) => this.props.onDragStart(chore, choreOwner)}
      chore={chore}
      choreOwner={this.props.name}/>
    })}
    </div>
  )

   return(

     <div 
     className="person">
     <h3>{this.props.name}</h3>
     <ul>{chores}</ul>
     </div>
   )
}
}
export default People



