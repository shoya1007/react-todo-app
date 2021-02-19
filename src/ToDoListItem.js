import React from "react";
import "./ToDoListItem.css";

class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  render() {
    return (
      <div className="ToDoListItem">
        <div className="ToDoListItem-title">{this.props.title}</div>
        <div className="ToDoListItem-description">{this.props.description}</div>
      </div>
    );
  }
}

export default ToDoListItem;
