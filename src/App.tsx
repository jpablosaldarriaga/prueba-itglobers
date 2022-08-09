import Navbar from "./layout/Navbar";
import { Route, Routes } from "react-router-dom";
import AirlineForm from "./components/AirlineForm";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<AirlineForm airlineName="Avianca" />} />
          <Route
            path="avianca"
            element={<AirlineForm airlineName="Avianca" />}
          />
          <Route path="vivair" element={<AirlineForm airlineName="Vivair" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
