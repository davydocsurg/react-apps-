import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // substitue for this.props
    const {
      onDecrement,
      onDelete,
      onIncrement,
      onReset,
      counters,
    } = this.props;

    return (
      <div>
        <div className="text-center m-2">
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={onReset}
          >
            Reset
          </button>
        </div>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            // value={counter.value}
            // id={counter.id}

            // pass the counter object instead of the individual objects
            counter={counter}
          >
            {/* {" "} */}
            <h6>Counter #{counter.id}</h6>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
