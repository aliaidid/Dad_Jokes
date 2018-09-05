import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      title:'',
      jokes:''
    }
  }
  componentDidMount(){
    var url = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
    
    axios.get(url).then((getJokes)=>{
      this.setState({title: getJokes.data.setup});
      this.setState({jokes: getJokes.data.punchline});
    })
  }
  showjokes(){
    var url = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
    
    axios.get(url).then((getJokes)=>{
      console.log(getJokes.data.setup);
      console.log(getJokes.data.punchline);
      this.setState({title: getJokes.data.setup});
      this.setState({jokes: getJokes.data.punchline});
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="card text-right mx-auto mt-5" style={{width: 500}}>
          <div className="card-body">
            <h5 className="card-title">{this.state.title}</h5>
            <p className="card-text">{this.state.jokes} 
            <br/>
            <i className="em em-laughing"></i></p>
            <button onClick={()=>{this.showjokes()}} className="btn btn-danger center">Reload <i className="em em-repeat "/> </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
