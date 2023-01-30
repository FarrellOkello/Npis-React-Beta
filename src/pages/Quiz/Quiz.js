import { Component } from "react";

export default class Quiz extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrease() {
    // this.setState((state, props) => {
    //   return {
    //     count: state.count + props.increment,
    //   };
    // });

    this.setState((state, props) => ({
      count: state.count + props.increment,
      // }
      // })
    }));
    // this.setState({
    //   count: this.state.count + this.props.increment,
    // });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h1>The count is :{this.state.count}</h1>
          <button onClick={this.handleIncrease.bind(this)}>
            Increase count
          </button>
        </div>
      </div>
    );
  }
}

// import { useState } from "react";

// export default function Quiz() {
//   const [toggle, setToggle] = useState(false);

//   const handleON = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <div style={{ flex: 4 }}>
//       <button onClick={handleON}>{toggle ? "ON" : "OFF"}</button>
//     </div>
//   );
// }
