import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import "./App.css";

const Shop = () => {
  return <h1>I am the Shop page</h1>;
};

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
    <footer>
      <p>&copy; Copyrights 2024 Yihua Zhang - Hazem Twair</p>
    </footer>
  </>
);

export default App;
