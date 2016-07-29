import React from 'react'

const chatBox = props => {
  return (
    <div> 
      <ul>
        {props.messages.map((x,i) =>(
          <li key={i}>{x}</li>
        ))}
      </ul>

      <form onSubmit={props.submitMessage.bind(this)}>
        <input type="text" ref={(ref) => props.getMessage(ref)}/>
      </form>
    </div>
  )
};
export default chatBox