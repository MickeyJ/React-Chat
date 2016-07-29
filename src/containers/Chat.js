import React, {Component} from 'react'

import {ChatBox} from '../components'
import {socket} from '../helpers/constants'

class Chat extends Component {
  constructor(props) {
    super(props);
  }
  getMessage(ref){
    this.message = ref
  }
  componentDidMount(){
    socket.on('test', (data) => {
      console.log('DATA FROM SERVER', data);
    })
  }
  submitMessage(e) {
    e.preventDefault();
    socket.emit('messageFeed', this.message.value)
  }
  render() {
    return (
      <div>
        <ChatBox
          messages={['Hey', 'Fuck you', 'No!']}
          submitMessage={this.submitMessage.bind(this)}
          getMessage={this.getMessage.bind(this)}
        />
      </div>
    )
  }
}
export default Chat
