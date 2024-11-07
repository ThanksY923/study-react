import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../modules/conter";
import todosReducer from "../modules/todos";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});

// 打印日志
const logDispatch = new Map();
function middleWare(store) {
  const next = store.dispatch;
  function logAndDispatch(action) {
    logDispatch.set(action, { ...store.getState() });
    next(action);
    console.log("派发后", logDispatch);
  }
  store.dispatch = logAndDispatch;
}

middleWare(store);

export default store;
