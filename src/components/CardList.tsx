import ProductCard from "./ProductCard";
import { Product } from "../App";

interface Props {
  products: Product[];
}

const CardList = ({ products }: Props) => {
  return (
    <div className="d-inline-flex p-2 flex-wrap justify-content-around align-items-center">
      {products.map((product: Product) => {
        return (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
