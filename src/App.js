import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import PlaceToStay from "./components/pages/PlaceToStay";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/place-to-stay" element={<PlaceToStay />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
