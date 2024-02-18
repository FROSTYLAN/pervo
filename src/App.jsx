import './App.css'
import { Navbar } from './components/nav-bar';
import { Routes, Route, HashRouter } from "react-router-dom";
import { Costs, DeterminationKb, FragmentTheory, PowderFactorImperial, PowderFactorMether, Presentation } from './pages';

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/powder-factor-mether" element={<PowderFactorMether />} />
          <Route path="/powder-factor-imperial" element={<PowderFactorImperial />} />
          <Route path="/determination-kb" element={<DeterminationKb />} />
          <Route path="/costs" element={<Costs />} />
          <Route path="/fragment-theory" element={<FragmentTheory />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App
