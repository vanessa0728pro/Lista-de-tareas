import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Menu from "./Menu";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <CSSReset />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
