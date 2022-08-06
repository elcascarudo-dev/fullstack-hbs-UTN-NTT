require('dotenv').config();
const express = require("express");
const app = express();

const hbs = require("hbs");
const port = process.env.PORT || 8085;


// ------------------- handlebars ---------------------------
app.set( "veiw engine", "hbs" );
hbs.registerPartials(__dirname + "/views/partials");

// meddware
app.use("/assets", express.static( __dirname + "/public" ) );
app.use( express.urlencoded({ extended: false }));

app.use( require("./router/router") );

app.listen( port, () => {
  console.log( `Escuchando en el puerto ${ port }` );
});