import { useState } from "react";
import data from "./assets/data.json";
import calculateSort from "./utilities/calculateSort";
import CardList from "./components/CardList";
import NavBar from "./components/Navbar/NavBar";
import Advisory from "./components/Advisory";
import "./App.css";
import ResultCount from "./components/ResultCount";
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
  const [sortOrder, setSortOrder] = useState<string>("");
  const [sortedData, setSortedData] = useState<Product[]>(data.item.products);
  const [advisory, setAdvisory] = useState<string>("");
  const handleSort = (sortOrder: string) => {
    setSortOrder(sortOrder);
    calculateSort(sortOrder, sortedData, handleSortedData);
  };
  // A function that receives the calculated value and sets it as state in the parent component
  const handleSortedData = (result: Product[], message: string) => {
    setSortedData(result);
    setAdvisory(message);
  };

  return (
    <div className="App">
      <NavBar onSelect={handleSort} selectedSortOrder={sortOrder} />
      <ResultCount count={sortedData.length} />
      <Advisory advisory={advisory} />
      <CardList data={sortedData} />
    </div>
  );
}

export default App;
