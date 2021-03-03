const express = require ('express');
const morgan = require ('morgan');
const flash = require ('connect-flash');
const cors = require ('cors');



//Inicializacion 

const app = express();

//Setting Configuracion

app.set('port', process.env.PORT || 4000);





//Middlewares

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(flash());


app.use(require('./database'));
//Rutas
app.use(require('./routes/producto'));
app.use(require('./routes/usuario'));
app.use(require('./routes/carritocompras'));
app.use(require('./routes/categoria'));
app.use(require('./routes/direcciones'));
app.use(require('./routes/tarjetacredito'));
app.use(require('./routes/roles'));




// inciar servidor

app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});


