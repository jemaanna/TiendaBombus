import http from '../config/config'

class productsservice{
    verproducts() { 
        return http.get("/viewproduct");
    }
} 

export default new productsservice();