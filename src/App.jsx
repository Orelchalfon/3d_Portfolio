import { Route, Routes } from 'react-router-dom';
import { About, Contact, Home, Projects } from './Pages';
const App = () => {
  return (
    <>
      nav
      <main
        className="
    
        flex h-svh min-h-svh
        items-center
        justify-center
        bg-black-500 text-white
    
        "
      >
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
