import { useEffect, useState } from "react";
import "./App.css";
import data from "./assets/data.json";
import CardList from "./components/CardList";
export interface Data {
  item: {
    products: Product[];
  };
}

export interface Product {
  productName: string;
  id: string;
  image: {
    url: string;
    attributes: {
      imageAltText: string;
    };
  };
  price: {
    priceIncTax: number;
    discountPercentage: null;
  };
  averageRating: number | null;
}
function App() {
  const [listData, setListData] = useState<Data>(data);
  // useEffect(() => {
  //   setListData(data);
  // }, []);

  return (
    <div className="App">
      <CardList />
    </div>
  );
}

export default App;
