import ProductsForm from "../components/productsForm";
import ProductList from "../components/productsList";
import CategoryPieChart from "../components/CategoryPieChart"; // 👈 importa el gráfico

interface Props {}

const ProductPage = (props: Props) => {
  return (
    <>
      <ProductsForm />
      <ProductList />
      <CategoryPieChart /> {/* 👈 aquí se muestra la gráfica */}
    </>
  );
};

export default ProductPage;
