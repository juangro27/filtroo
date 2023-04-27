import { API_URL } from "@env";
import axios, { AxiosInstance } from "axios";

class ProductService {
    api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: `${API_URL}`,
        });
    }

    getProducts(limit: number = 8) {
        return this.api.get(`/products?limit=${limit}`);
    }

    getProductDetails(id: number) {
        return fetch(`${this.api}/products/${id}`);
    }
}

const productService = new ProductService();
export default productService;
