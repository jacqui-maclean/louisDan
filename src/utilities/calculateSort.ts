import { Product } from "../App";

const calculateSort = (
  sortOrder: string,
  sortData: Product[],
  onCalculateSort: (data: Product[], message: string) => void
) => {
  if (sortOrder == "") {
    let sortedData = sortData
      .slice() //preserves original array
      .sort((a, b) => b.averageRating! - a.averageRating!);
    onCalculateSort(sortedData, "");
  }
  if (sortOrder == "2") {
    let sortedData = sortData
      .slice() //preserves original array
      .sort((a, b) => a.price.priceIncTax - b.price.priceIncTax);
    onCalculateSort(sortedData, "");
  }
  if (sortOrder == "3") {
    let sortedData = sortData
      .slice() //preserves original array
      .sort((a, b) => b.price.priceIncTax - a.price.priceIncTax);
    onCalculateSort(sortedData, "");
  }
  if (sortOrder == "4") {
    let nonNullValues = sortData.reduce((acc, curr) => {
      let { discountPercentage } = curr.price;
      discountPercentage !== null ? (acc = acc + 1) : (acc = acc + 0);
      return acc;
    }, 0);
    if (nonNullValues <= 0) {
      onCalculateSort(
        sortData,
        "There are no discounts available on your selected items"
      );
    } else {
      let sortedData = sortData
        .slice() //preserves original array
        .sort(
          (a, b) => b.price.discountPercentage! - a.price.discountPercentage!
        );
      onCalculateSort(sortedData, "");
    }
  }
  return null;
};

export default calculateSort;
