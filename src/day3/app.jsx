import React, { PureComponent } from "react";
// import store from "./store/index";
import { connect } from "react-redux";
import { increment } from "./modules/conter";
import { addToDoList, fetchTodos } from "./modules/todos";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getToDos();
  }
  addCounter(number) {
    this.props.addCounter(number);
  }
  render() {
    const count = this.props.count;
    const list = this.props.todos;
    return (
      <div>
        {count}
        <button onClick={() => this.addCounter(5)}>+5</button>
        <div>
          <ul>
            {list.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const initState = (state) => {
  return {
    count: state.counter.count,
    todos: state.todos.todoList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addCounter: (number) => {
    dispatch(increment(number));
  },
  pushToDoList(list) {
    dispatch(addToDoList(list));
  },
  getToDos() {
    dispatch(fetchTodos({}, dispatch));
  },
});

export default connect(initState, mapDispatchToProps)(App);
