import ProductList from "../components/productsList";
import ProductsForm from "../components/productsForm";

interface Props {}

const ProductPage = (props: Props) => {
  
  return (
    <>
      <ProductsForm />
      <ProductList />
    </>
  );
};

export default ProductPage;
