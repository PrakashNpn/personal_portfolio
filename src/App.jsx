import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="absolute inset-0 bg-background-main bg-cover bg-center bg-fixed z-[-10] "></div>
        <div className="absolute inset-0 bg-black/60 z-[-5]"></div>

        <StarsCanvas />
        <div className="relative z-1">
          <div className="relative z-10">
            <Navbar />
            <Hero />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  );
};

export default App;
