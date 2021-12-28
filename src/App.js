import "./styles.css";
import Nav from "../src/components/Nav";
import { Header } from "../src/components/Header";
import { Cards } from "./components/Cards";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Cards />
    </div>
  );
}
