import './App.css'
import { Navbar } from './components/nav-bar';
import { Routes, Route, HashRouter } from "react-router-dom";
import { Costs, DeterminationKb, FragmentTheory, PowderFactor, Presentation, StemmingDecking } from './pages';

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/powder-factor" element={<PowderFactor />} />
          <Route path="/determination-kb" element={<DeterminationKb />} />
          <Route path="/costs" element={<Costs />} />
          <Route path="/fragment-theory" element={<FragmentTheory />} />
          <Route path="/stemming-decking" element={<StemmingDecking />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App
