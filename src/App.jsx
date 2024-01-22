import "./assets/css/mybootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProfile from "./components/MyProfile";
import MyNavBar from "./components/MyNavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MyNavBar />
              <MyProfile />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
