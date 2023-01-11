import { Route, Routes, Outlet } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./components/routes/home/home";

const Shop = () => {
  return (
    <div>
      <h1>
        I am the shop page!
      </h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;