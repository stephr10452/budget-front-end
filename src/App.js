import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import Container from "react-bootstrap/Container";

function App() {
  return (
<div className ="App">
  <Container>
  <Router>
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Index />} />
        <Route path="/transactions/new" element={<New />} />
        <Route path="/transactions/:index" element={<Show />} />
        <Route path="/transactions/:index/edit" element={<Edit />} />
      </Routes>
    </main>
  </Router>
  </Container>
</div>

  )
}

export default App;
