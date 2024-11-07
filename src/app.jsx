
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count:0
    };
  }
    render() {
        let count = this.state.count;
        return (
            <div> {count}</div>
        )
    }
}
export default App;