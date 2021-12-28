import "./styles.css";
import Nav from "../src/components/Nav";
import { Header } from "../src/components/Header";
import { Cards } from "./components/Cards";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Cards />
      <Cta />
      <Footer />
    </div>
  );
}
