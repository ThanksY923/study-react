import React, { PureComponent } from "react";
// import store from "./store/index";
import { connect } from "react-redux";
import { increment } from "./modules/conter";
import { addToDoList, fetchTodos } from "./modules/todos";
import Home from '../router/home';
import { Link, NavLink, Route, Routes } from "react-router-dom";
import "../day3/store/style.css"

class App extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getToDos(); // 获取数据 
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
        <div>
          <div className="header">Header
            <div className="nav">
              {/* <Link to="/home">Home</Link> 渲染出来为普通的a标签 */}
              <div className="nva">
                <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })} className={({ isActive }) => isActive ? 'active' : ''({})}>Home</NavLink>
              </div>
            </div>
            <hr />
          </div>
          <div className="content">
            {/* 映射关系 */}
            <Routes>
              <Route path="/home" element={<Home />} />
              {/* path="*" 通配 没有路径匹配时 */}
              {/* <Route path="*" element={<Home />} /> */}
            </Routes>
          </div>
          <div className="footer">
            <hr />
            Fotter</div>
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
