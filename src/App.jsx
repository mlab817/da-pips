import {Route, Routes} from "react-router-dom";
import Home from "./pages/home.page";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  )
}

export default App
