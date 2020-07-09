const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

/* MIDDLEWARE 
   Un middleware es una instrucción o callback que se va a ejecutar siempre que se envie una petición (cada ingreso a una URL)
*/

/*En este caso, defino como estatica mi carpeta public. Todos los archivos dentro de la misma serán publicos.
y para cualquier petición mostrará el HTML dentro de public*/

app.use(express.static(__dirname + '/public'));


/* CONFIGURACIONES */

/*HBS (vistas contenido dinamico y vistas parciales)
partials: bloques de codigo que se pueden reutilizar. Ej. un navbar
*/

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

/* PETICIONES

Cada vez que se recibe una peticion GET con "/", se ejecutará una funcion function(req,res){}
    * req es lo que recibe el navegador
    * res es lo que responde el servidor (el objeto que le voy a devolver al navegador)
    * res.end es con lo que voy a finalizar la peticion.
    * res.send si quiero enviar algo como un JSON como salida
    * res.render si quiero mostrar una vista HTML (o hbs)

    NOTA: (req, res)=> {} es lo mismo que poner function(req, res){}
*/


app.get('/', function(req, res) {

    res.render('home', {
        nombre: "Evelin",
        anio: new Date().getFullYear()
    });
});

app.get('/about', function(req, res) {

    res.render('about', {
        anio: new Date().getFullYear()
    });
});

/* El app.listen puede recibir tambien un callback. Esto quiere decir que una vez que el app.listen se 
levante en el puerto 3000 */

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
})