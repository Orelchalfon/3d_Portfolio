import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainNavbar from './Components/Navigation/MainNavbar';
import { About, Contact, Home, Projects } from './Pages';
const App = () => {
  return (
    <main
      className="
        bg-gradient-to-b from-gray-100 to-gray-200
        "
    >
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path="/3d-portfolio/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
