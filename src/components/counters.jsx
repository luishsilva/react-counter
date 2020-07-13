import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // object destructuring Arguments
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m2">
          Reset
        </button>

        {counters.map((counter) => (
          <Counter
            key={
              counter.id
            } /* used internaly by React we cant access or change that value*/
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
