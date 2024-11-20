
import React from "react";
import { Link, Route, Routes, useNavigate, useRoutes } from "react-router-dom";


import "../day3/store/style.css"
import routes from "../router/index.js"

export default function App(props) {
  const navigate = useNavigate();

  function goHome(path) {
    navigate(path);
  }
  function navigateTo(path, id) {
    navigate(path + "/" + id);
  }
  return (
    <div>
      <div>
        <div className="header">Header
          <div className="nav">
            {/* <Link to="/home">Home</Link> 渲染出来为普通的a标签 */}
            <button onClick={e => goHome("/home")}>Home</button>
            <button onClick={e => navigateTo("/about", 111)}>about</button>
            <Link to={"/about?name=why&age=18"}>携带参数</Link>
          </div>
          <hr />
        </div>
        <div className="content">
          {/* 映射关系 */}
          {useRoutes(routes)}
          {/* <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="/about" element={<About />} />
            path="*" 通配 没有路径匹配时会渲染
            <Route path="*" element={<Home />} />
          </Routes> */}
        </div>
        <div className="footer">
          <hr />
          Fotter</div>
      </div>
    </div>
  );
}

