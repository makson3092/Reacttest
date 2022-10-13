import React from "react";
import ListName from "../ListName/ListName";
import "./click.css";

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
    if (this.state.isToggleOn) {
      alert("Component TurnOff !");
    } else {
      alert("Component TurnOn !");
    }
  }

  render() {
    return (
      <div className="click">
        {this.state.isToggleOn ? <ListName /> : null}
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "Викл" : "Вкл"}
        </button>
      </div>
    );
  }
}

export default ClickCounter;
