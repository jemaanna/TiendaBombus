import http from '../config/config'

class categoriesservice{
    vercategories() { 
        return http.get("/viewcategoria");
    }
} 

export default new categoriesservice();