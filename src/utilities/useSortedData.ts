import { useState } from "react";
import { Product } from "../App";
import data from "../assets/data.json";

function useSortedData(sortOrder: string) {
  const [sortedData, setSortedData] = useState<Product[]>(data.item.products);

  if (sortOrder == "") {
    let sortedData = data.item.products
      .slice() //preserves original array
      .sort((a, b) => b.averageRating! - a.averageRating!);
    setSortedData(sortedData);
  }
  if (sortOrder == "2") {
    let sortedData = data.item.products
      .slice() //preserves original array
      .sort((a, b) => b.price.priceIncTax - a.price.priceIncTax);
    setSortedData(sortedData);
  }
  if (sortOrder == "3") {
    let sortedData = data.item.products
      .slice() //preserves original array
      .sort((a, b) => a.price.priceIncTax - b.price.priceIncTax);
    setSortedData(sortedData);
  }
  if (sortOrder == "4") {
    let nonNullValues = data.item.products.reduce((acc, curr) => {
      let { discountPercentage } = curr.price;
      discountPercentage !== null ? (acc = acc + 1) : (acc = acc + 0);
      return acc;
    }, 0);
    if (nonNullValues <= 0) {
      console.log("there are no discounts available on your selected items");
    }
    let sortedData = data.item.products
      .slice() //preserves original array
      .sort(
        (a, b) => b.price.discountPercentage! - a.price.discountPercentage!
      );
    if (nonNullValues > 0) {
      setSortedData(sortedData);
    } else {
      setSortedData(sortedData);
      // setMessage("there are no discounts available on your selected items");
    }
  }
  return sortedData;
}

export default useSortedData;
