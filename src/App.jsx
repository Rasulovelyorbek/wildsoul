import Almond from "./components/Almond";
import Concept from "./components/Concept";
import Header from "./components/Header";
import Kakao from "./components/Kakao";
import Navbar from "./components/Navbar";
import Way from "./components/Way";
import Words from "./components/Words";
import Halva from "./components/Halva";
import "./index.css";
import Bite from "./components/Bite";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Kakao />
      <Way />
      <Almond />
      <Words />
      <div className="back">
        <Concept />
        <Halva />
        <Bite />
        <Recipes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
