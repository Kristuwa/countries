import { CountryPage } from "./pages/CountryPage";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:id" element={<CountryPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
