import ProductsForm from "../components/productsForm";
import ProductList from "../components/productsList";
import CategoryPieChart from "../components/CategoryPieChart";
import ProductQuantityBarChart from "../components/ProductQuantityBarChart"; // 👈 nuevo

const ProductPage = () => {
  return (
    <>
      <ProductsForm />
      <ProductList />
      <CategoryPieChart />
      <ProductQuantityBarChart /> {/* 👈 aquí se muestra la gráfica de barras */}
    </>
  );
};

export default ProductPage;
