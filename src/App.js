import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import ProductList from "./Component/Body/ProductList";
import ModalUI from "./UI/ModalUI";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />

      <h1>Hello Ankit</h1>
    </div>
  );
}

export default App;
