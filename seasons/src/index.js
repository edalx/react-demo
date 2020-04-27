import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, lon: null, errorMessage: null }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      pos => {
        this.setState({ lat: pos.coords.latitude })
      },
      err => this.setState({ errorMessage: err.message })
    )
  }

  renderHelper() {
    if (!this.state.errorMessage && this.state.lat) {
      return <div>
        <SeasonDisplay propState={this.state} />
      </div>
    }
    return <div><Spinner /></div>
  }
  
  render() {
    return (
      <div className="border red">
        {this.renderHelper()}
      </div>
    );
  }
}

ReactDom.render(
  <App />, document.querySelector('#root')
);