import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import FooterPage from "./pages/FooterPage";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import CleanPage from "./pages/CleanPage";
import PlantPage from "./pages/PlantPage";
import NewsPage from "./pages/NewsPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clean" element={<CleanPage />} />
        <Route path="/plant" element={<PlantPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <FooterPage />
    </BrowserRouter>
  );
}

export default App;
