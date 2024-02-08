import './App.css'
import { Navbar } from './components/nav-bar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Costs, DeterminationKb, FragmentTheory, PowderFactor, StemmingDecking } from './pages';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/powder-factor" element={<PowderFactor />} />
          <Route path="/determination-kb" element={<DeterminationKb />} />
          <Route path="/costs" element={<Costs />} />
          <Route path="/fragment-theory" element={<FragmentTheory />} />
          <Route path="/stemming-decking" element={<StemmingDecking />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App
