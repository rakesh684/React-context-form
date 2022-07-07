import React from 'react';
import './App.css';
import Header from './Header';
import {UserContextConsumer} from './userContext';
class App extends React.Component {
  state={
    newUsername:""
  }
  handleChange=(e)=>{
    const {name,value}=e.target
    this.setState({[name]:value})
  }
  render(){
    return (
      <div>
        <Header /> 
        <UserContextConsumer >
             {({username,changeUsername})=>(
              <main>
                <p className='main'>No new Notificatios,{username}! 🎉</p>
                <input 
                  type="text"
                  name='newUsername'
                  placeholder='New Username'
                  value={this.state.newUsername}
                  onChange={this.handleChange}
                />
                <button onClick={()=>changeUsername(this.state.newUsername)}>Change Username</button>
              </main> 
             )}
        </UserContextConsumer>
      </div>
    );
  }
}

export default App;
