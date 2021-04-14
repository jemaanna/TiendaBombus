import http from '../config/config'

class rolesservice{
    verroles() { 
        return http.get("/viewroles");
    }
} 

export default new rolesservice();