import data from "../assets/data.json";
import ProductCard from "./ProductCard";

interface Data {
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

const CardList = () => {
  return (
    <div className="d-inline-flex p-2 flex-wrap justify-content-around align-items-center">
      {data.item.products.map((product: Product) => {
        return (
          <div>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
