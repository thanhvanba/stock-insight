import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import AppRoutes from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";

AOS.init();
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
