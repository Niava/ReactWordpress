import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:{},
      date:"",
      content:{}
    }
  }

  componentDidMount(){
    return fetch('http://reactwp:8889/wp-json/wp/v2/posts/')
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson.length);
      const { title, date, content } =  responseJson[0];
      //console.log({ title, date, content });
      this.setState({ title, date, content });
    })
    .catch((error) => {
      console.error(error);
    });               
  }

  render() {
    return (
      <div>
      {this.state.date}
      <br/>
      {this.state.title.rendered}
      <br/>
      {this.state.content.rendered}
      </div>
    );
  }

}


export default App;
