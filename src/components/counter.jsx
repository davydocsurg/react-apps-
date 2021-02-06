import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 9,
  };

  // apply custom styles
  styles: {
    fontWeight: "bold",
  };
  render() {
    return (
      // <React.Fragment >
      <div className="container text-center mt-5">
        <div className="card shadow-sm">
          <div className="card-header bg-dark text-white">Counter</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <span style={this.styles} className={this.getBadgeClasses()}>
                  {this.formatCount()}
                </span>
              </div>

              <div className="col-md-6">
                <button className="btn btn-success btn-sm">Increment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      /* </React.Fragment> */
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.state.count === 0 ? "warning" : "info";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <span className=""> Zero</span> : count;
  }
}

export default Counter;
