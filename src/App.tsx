import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import NavBar from "./components/Navbar/NavBar";
// import useSortedData from "./utilities/useSortedData";
import data from "./assets/data.json";
import Advisory from "./components/Advisory";
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
    sortData(sortOrder);
  };
  const sortData = (sortOrder: string) => {
    if (sortOrder == "") {
      let sortedData = data.item.products
        .slice() //preserves original array
        .sort((a, b) => b.averageRating! - a.averageRating!);
      setSortedData(sortedData);
      setAdvisory("");
    }
    if (sortOrder == "2") {
      let sortedData = data.item.products
        .slice() //preserves original array
        .sort((a, b) => a.price.priceIncTax - b.price.priceIncTax);
      setSortedData(sortedData);
      setAdvisory("");
    }
    if (sortOrder == "3") {
      let sortedData = data.item.products
        .slice() //preserves original array
        .sort((a, b) => b.price.priceIncTax - a.price.priceIncTax);
      setSortedData(sortedData);
      setAdvisory("");
    }
    if (sortOrder == "4") {
      let nonNullValues = data.item.products.reduce((acc, curr) => {
        let { discountPercentage } = curr.price;
        discountPercentage !== null ? (acc = acc + 1) : (acc = acc + 0);
        return acc;
      }, 0);
      if (nonNullValues <= 0) {
        setAdvisory("There are no discounts available on your selected items");
      }
      let sortedData = data.item.products
        .slice() //preserves original array
        .sort(
          (a, b) => b.price.discountPercentage! - a.price.discountPercentage!
        );
      if (nonNullValues > 0) {
        setSortedData(sortedData);
      }
    }
  };

  return (
    <div className="App">
      <NavBar onSelect={handleSort} selectedSortOrder={sortOrder} />
      <Advisory advisory={advisory} />
      <CardList data={sortedData} />
    </div>
  );
}

export default App;
