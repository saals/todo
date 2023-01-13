import React from 'react';

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const NoFound = () => <div>404</div>

class HistoryApiRoute extends React.Component {
  state = {
    location: window.location
  }

  componentDidMount() {
    window.addEventListener('popstate', () => {
      this.setState({ location: window.location })
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    window.history.pushState(null, null, e.target.href);
    this.setState({ location: window.location })
    console.log(e.target.href)
  }

  render() {
    const { location } = this.state

    let RouteItem
    switch (location.pathname) {
      case '/':
        RouteItem = Home;
        break;
      case '/about':
        RouteItem = About;
        break;
      default:
        RouteItem = NoFound;
    }

    return <>
      <ul>
        <li><a href="/" onClick={this.handleClick}>Home</a></li>
        <li><a href="/about" onClick={this.handleClick}>About</a></li>
      </ul>
      <RouteItem />
    </>
  }
}

export default HistoryApiRoute;
