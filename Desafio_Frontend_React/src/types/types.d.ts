declare module "my-types"{
    
    export interface Product{
        id:number;
        Nombre:string;
        Descripcion: string;
        Precio: number;
        Cantidad: number;
        categoryId: number;
        supplierId: number;

    }
}