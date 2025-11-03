import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
