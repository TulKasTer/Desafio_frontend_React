import './App.css';
import ProductPage from './pages/ProductPage';

interface Props {}

export default function App(props: Props) {
  return (
    <div className="p-6">
      <ProductPage />
    </div>
  );
}
