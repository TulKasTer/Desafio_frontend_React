# Desafio_frontend_React


## 📦 1. Crear categorías

```bash
curl -X POST http://localhost:3000/categories -H "Content-Type: application/json" -d '{"Nombre": "Electrónica"}'
curl -X POST http://localhost:3000/categories -H "Content-Type: application/json" -d '{"Nombre": "Ropa"}'
curl -X POST http://localhost:3000/categories -H "Content-Type: application/json" -d '{"Nombre": "Alimentos"}'
curl -X POST http://localhost:3000/categories -H "Content-Type: application/json" -d '{"Nombre": "Juguetes"}'
```

---

## 👩‍💼 2. Crear un proveedor

```bash
curl -X POST http://localhost:3000/suppliers -H "Content-Type: application/json" -d '{
  "Nombre": "Proveedor Test",
  "Contacto": "Laura Pérez",
  "Telefono": "6621234567",
  "Correo": "laura@demo.com",
  "Direccion": "Calle de los Datos 456"
}'
```

---

## 🛒 3. Crear productos 

```bash
# Electrónica (categoryId: 1)
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"Nombre":"Laptop","Descripcion":"HP Pavilion","Precio":15000,"Cantidad":5,"supplierId":1,"categoryId":1}'
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"Nombre":"Tablet","Descripcion":"Samsung Galaxy Tab","Precio":7000,"Cantidad":10,"supplierId":1,"categoryId":1}'

# Ropa (categoryId: 2)
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"Nombre":"Camisa","Descripcion":"Camisa blanca de algodón","Precio":300,"Cantidad":25,"supplierId":1,"categoryId":2}'
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"Nombre":"Pantalón","Descripcion":"Jeans azul","Precio":500,"Cantidad":15,"supplierId":1,"categoryId":2}'

# Alimentos (categoryId: 3)
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"Nombre":"Galletas","Descripcion":"Galletas de chocolate","Precio":50,"Cantidad":40,"supplierId":1,"categoryId":3}'
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"Nombre":"Cereal","Descripcion":"Cereal integral 500g","Precio":60,"Cantidad":35,"supplierId":1,"categoryId":3}'

# Juguetes (categoryId: 4)
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"Nombre":"Rompecabezas","Descripcion":"1000 piezas","Precio":120,"Cantidad":8,"supplierId":1,"categoryId":4}'
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"Nombre":"Pelota","Descripcion":"Pelota antiestrés","Precio":90,"Cantidad":3,"supplierId":1,"categoryId":4}'
```

