import "./App.css";
import "./variables.css";
import "./App.css";
import ProductItem from "./components/ProductItem";

function App() {
  return (
    <div className="App">
      <h3>hiiiiiiii</h3>
      <ProductItem
        name={"sewar"}
        price={50}
        img={
          "https://i.pinimg.com/1200x/27/f7/50/27f75066046b5e7092fcaca009586bdb.jpg"
        }
      />
    </div>
  );
}

export default App;
