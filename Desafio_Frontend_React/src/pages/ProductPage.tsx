import { useState, useEffect } from "react";
import { Product } from "my-types";
import { getAllProducts, deleteProduct } from "../api/ProductAPI";

interface Props {}

const ProductPage = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then((data: any) => setProducts(data));
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = confirm("Delete the product?");
    if (!confirmed) return;

    await deleteProduct(id);
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
        <div className="bg-gray-100 px-6 py-4 text-lg font-semibold text-gray-800">
          All Products
        </div>

        <div className="px-6 py-4">
          <h2 className="text-lg font-medium mb-4">Filter</h2>

          <div className="flex flex-wrap gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="Text input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Proveedor
              </label>
              <input
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="Text input"
              />
            </div>

            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Filtrar
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 py-4">
          <h2 className="text-lg font-medium mb-4">Results</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-100 text-xs uppercase font-medium text-gray-600">
                <tr>
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">Nombre</th>
                  <th className="px-4 py-2">Descripcion</th>
                  <th className="px-4 py-2">Precio</th>
                  <th className="px-4 py-2">Cantidad</th>
                  <th className="px-4 py-2">Modify</th>
                  <th className="px-4 py-2">Delete</th>
                </tr>
              </thead>

              <tbody>
                {Array.isArray(products) && products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-2">{product.id}</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-600 hover:underline">
                        {product.Nombre}
                      </button>
                    </td>
                    <td className="px-4 py-2">{product.Descripcion}</td>
                    <td className="px-4 py-2">{product.Precio}</td>
                    <td className="px-4 py-2">{product.Cantidad}</td>
                    <td className="px-4 py-2">
                      <button
                        type="button"
                        onClick={() => confirm("Save the changes?")}
                        className="text-yellow-600 hover:text-yellow-800"
                      >
                        {/* Icono modificar */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        type="button"
                        onClick={() =>
                          {handleDelete(product.id)}
                        }
                        className="text-red-600 hover:text-red-800"
                      >
                        {/* Icono eliminar */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr className="text-xs text-gray-500 uppercase">
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">Nombre</th>
                  <th className="px-4 py-2">Descripcion</th>
                  <th className="px-4 py-2">Precio</th>
                  <th className="px-4 py-2">Cantidad</th>
                  <th className="px-4 py-2">Modify</th>
                  <th className="px-4 py-2">Delete</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
