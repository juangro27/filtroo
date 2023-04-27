import { API_URL } from "@env";
import axios, { AxiosInstance } from "axios";

class ProductService {
    api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: `${API_URL}`,
        });
    }

    getProducts() {
        return this.api.get(`/products`);
    }

    getProductDetails(id: number) {
        return fetch(`${this.api}/products/${id}`);
    }
}

const productService = new ProductService();
export default productService;
