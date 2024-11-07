import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 方法二  在调用时直接传参 方法二在于需要自己书写判断promise状态
export const fetchTodos = createAsyncThunk(
  "toDos/fetchTodos",
  async (obj, { dispatch, getState }) => {
    let res = await axios.get(" http://123.207.32.32:8000/home/multidata");

    // 添加日志
    dispatch(addToDoList(res.data.data.banner.list));
    //   return res.data.data.banner.list; 方法一需要返回数据 然后在extraReducers中监听
  }
);

const todosReducer = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
  },
  reducers: {
    addToDoList(state, { payload }) {
      state.todoList = payload;
    },
  },
  extraReducers: (builder) => {
    //   方法一
    // builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
    //   state.todoList = payload;
    // });
    // builder.addCase(fetchTodos.rejected, (state, action) => {
    //   console.log("rejected");
    // });
    // builder.addCase(fetchTodos.pending, (state, action) => {
    //   console.log("pending");
    // });
  },
});
export const { addToDoList } = todosReducer.actions;

export default todosReducer.reducer;
