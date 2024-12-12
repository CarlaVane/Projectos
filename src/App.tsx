import "./App.css";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import HighProducts from "./Pages/Produtos/HighlightProducts";
import ProductsShowCase from "./Pages/Produtos/ProductsShow";

function App() {
  return (
    <>
      <Header />
      <HighProducts />
      <ProductsShowCase />
      <Footer />
    </>
  );
}

export default App;
