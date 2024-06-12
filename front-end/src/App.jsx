import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./components/login/Login";
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/">
      <Route index element={<Home/>}/>
      <Route path="hotel">
        <Route index element={<List/>}/>
        <Route path=":id" element={<Hotel/>}/>
     
      </Route>
      <Route path="/login" element={<Login/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
    )
}

export default App;
