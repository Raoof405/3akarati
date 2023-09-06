import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import MainHome from "./components/MainHome.jsx/MainHome";
import Login from "./components/login/login";
import House from "./components/Posts/home.jsx/house";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<MainHome />} />
            <Route path="login" element={<Login />} />

            <Route path="posts">
              <Route path="House" element={<House />} />
       
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
