import http from '../config/config'

class ventasservice{
    verventas() { 
        return http.get("/viewcarrocompras");
    }
} 

export default new ventasservice();