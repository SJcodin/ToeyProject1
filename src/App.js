import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from './pages/Main';
import Login from './pages/Login';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main/> }/>
          <Route path="login" element={ <Login/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
