//@ts-ignore
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import VNIndexWidget from "./components/stock";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <VNIndexWidget />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
