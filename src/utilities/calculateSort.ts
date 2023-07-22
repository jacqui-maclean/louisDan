import { Product } from "../App";
//this utility function calculates the sort order and then uses a callback function (onCalculateSort) to update the state of the parent component
//the callback function received two parameters: the sorted data and a message to display in case there are no discounts available
const calculateSort = (
  sortOrder: string,
  sortData: Product[],
  onCalculateSort: (data: Product[], message: string) => void
) => {
  if (sortOrder == "") {
    let sortedData = sortData.sort(
      (a, b) => b.averageRating! - a.averageRating!
    );
    onCalculateSort(sortedData, "");
  }
  if (sortOrder == "2") {
    let sortedData = sortData.sort(
      (a, b) => a.price.priceIncTax - b.price.priceIncTax
    );
    onCalculateSort(sortedData, "");
  }
  if (sortOrder == "3") {
    let sortedData = sortData.sort(
      (a, b) => b.price.priceIncTax - a.price.priceIncTax
    );
    onCalculateSort(sortedData, "");
  }
  if (sortOrder == "4") {
    let nonNullValues = sortData.reduce((acc, curr) => {
      let { discountPercentage } = curr.price;
      discountPercentage !== null ? (acc = acc + 1) : (acc = acc + 0);
      return acc;
    }, 0);
    if (nonNullValues <= 0) {
      //all the items have null discountPercentage, so there is no value in sorting them
      onCalculateSort(
        sortData,
        "There are no discounts available on your selected items"
      );
    } else {
      let sortedData = sortData.sort(
        (a, b) => b.price.discountPercentage! - a.price.discountPercentage!
      );
      onCalculateSort(sortedData, "");
    }
  }
  return null;
};

export default calculateSort;
