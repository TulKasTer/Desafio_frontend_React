import React, { useState, useEffect } from "react";
import { Product, NewProduct } from "my-types";

interface Props {
  initialData?: Product; // Datos iniciales para edición
  onSubmit: (product: NewProduct) => void;
  onCancel: () => void;
  isEditing?: boolean; // Para saber si estamos editando o creando
}

const ProductForm  = ({initialData,onSubmit, onCancel,isEditing = false,}: Props ) => {
  const [formData, setFormData] = useState<NewProduct>({
    Nombre: "",
    Descripcion: "",
    Precio: 0,
    Cantidad: 0,
    csategoryId: 0, 
    supplierId: 0

  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        Nombre: initialData.Nombre,
        Descripcion: initialData.Descripcion,
        Precio: initialData.Precio,
        Cantidad: initialData.Cantidad,
        csategoryId: initialData.csategoryId || 0,
        supplierId: initialData.supplierId || 0,
      });
    }
  }, [initialData]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "Precio" || name === "Cantidad" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías añadir validación
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="nombre"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="descripcion"
          className="block text-sm font-medium text-gray-700"
        >
          Descripción
        </label>
        <textarea
          name="descripcion"
          id="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="precio"
          className="block text-sm font-medium text-gray-700"
        >
          Precio
        </label>
        <input
          type="number"
          name="precio"
          id="precio"
          value={formData.precio}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="stock"
          className="block text-sm font-medium text-gray-700"
        >
          Stock
        </label>
        <input
          type="number"
          name="stock"
          id="stock"
          value={formData.stock}
          onChange={handleChange}
          required
          min="0"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      {/* Agrega otros campos aquí */}

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isEditing ? "Guardar Cambios" : "Crear Producto"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
