import React from 'react';
const Chore = (props) => {

   return(

     <div draggable
     className="chore"
     onDragStart={(chore, choreOwner) => props.onDragStart(props.chore, props.choreOwner)}>
     <p>{props.chore}</p>
     </div>
   )
}
export default Chore
