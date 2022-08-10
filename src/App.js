import Navbar from "./components/Navbar";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Forredux from "./components/Forredux";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>

      <Route path="/Detail:id" element={<Detail/>}>
      </Route>

      <Route path="/Forredux" element={<Forredux/>}>
      </Route>

    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
