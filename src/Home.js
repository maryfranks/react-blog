import React, {Component} from 'react';

class Home extends Component {

constructor(props) {
  super(props)
  this.state = {
    shakespeare: ""
  }
}

componentDidMount() {
  var base = this
  let poemApi = 'http://ShakeItSpeare.com/api/poem';
  fetch(poemApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
          base.setState({ shakespeare: json.poem });
      }).catch((ex) => {
        console.log('An error occured while parsing!', ex)
      })
  }


  render() {
       let poetry = this.state.shakespeare;
     if (this.state.shakespeare){
       return (
         <div>
           <h1>My favorite Shakespeare poem:</h1>
           {poetry}
         </div>
       )
     }
     return (
       <div>
         <h1>My favorite Shakespeare poem:</h1>
         Loading...
       </div>
     )
  }
}
export default Home
