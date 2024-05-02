import { CountryPage } from "./pages/CountryPage";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        icon={false}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<CountryPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
