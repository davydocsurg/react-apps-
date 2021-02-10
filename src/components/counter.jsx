import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  // apply custom styles
  styles: {
    fontWeight: "bold",
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) {
  //     return <p>No tags</p>;
  //   }

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // constructor() {
  //   // set handleIncrement() to reference the current object
  //   super();
  //   // console.log(this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = (product) => {
  //   console.log(product);
  //   // console.log("increment prop", this);
  //   this.setState({ count: this.state.count + 1 });
  // };

  render() {
    // console.log("props", this.props);

    return (
      // <React.Fragment >
      <div className="container text-center mt-5">
        <div className="card shadow-sm">
          <div className="card-header bg-dark text-white">
            {this.props.children}
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 mb-2">
                <span style={this.styles} className={this.getBadgeClasses()}>
                  {this.formatCount()}
                </span>
              </div>

              <div className="col-md-4">
                <button
                  onClick={() => this.props.onIncrement(this.props.counter)}
                  className="btn btn-success btn-sm"
                >
                  Increment
                </button>
                <br />
                <br />
                <button
                  onClick={() => this.props.onDecrement(this.props.counter)}
                  className="btn btn-secondary btn-sm"
                >
                  Decrement
                </button>
              </div>

              <div className="col-md-4 mt-2">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                  Delete
                </button>
              </div>

              {/* <div className="col-md-6">{this.renderTags()}</div> */}
            </div>
          </div>
        </div>
      </div>
      /* </React.Fragment> */
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "info";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <span className=""> Zero</span> : count;
  }
}

export default Counter;
