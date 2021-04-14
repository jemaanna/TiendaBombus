import http from '../config/config'

class userservice{
    verusers() { 
        return http.get("/viewusuario");
    }
} 

export default new userservice();