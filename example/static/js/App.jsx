import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentCount: 0
    };

    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
   var intervalId = setTimeout(this.timer, 1000);
   this.setState({intervalId});
  }

  componentWillUnmount() {
     clearInterval(this.state.intervalId);
  }

  timer() {
    this.setState({ currentCount: this.state.currentCount + 1 });
    var intervalId = setTimeout(this.timer, 1000);
    this.setState({intervalId});
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand>
          <NavbarBrand href="/">Example</NavbarBrand>
        </Navbar>
        {this.state.currentCount}
      </div>
    );
  }
}
