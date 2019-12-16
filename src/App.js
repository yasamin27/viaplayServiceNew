import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        items: []
    };
    this.imageList = this.imageList.bind(this);
}

  imageList(props) {
    const items = props.items
    var pics = []
    for (let [index, value] of Object.entries(items)) {
      pics.push(<img alt="" src={value.content.images.landscape.url}/>);
    }
    return (
      <ul>{pics}</ul>
    );
  }

  componentDidMount() {
    fetch('/pc-se/serier/samtliga')
      .then(response => response.json())
      .then(data => {
        const images = data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
        this.setState({
          items: images
        })
      })
  }

  render () {
    return(
      <div className="images">
      {this.imageList(this.state)}
      </div>
    )
  }
}
export default App;
