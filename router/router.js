const { Router } = require( 'express' );
const router = new Router();

const { 
        getProducts, 
        deleteProduct, 
        newProduct, 
        getProduct,
        updateProduct 
      } = require( '../controllers/productos' );

//----------------------------------------------------------------------
// Obtengo todos los productos y los renderizo
router.get( '/', async ( _, res ) => {
  const productos = await getProducts();
  res.render( 'index.hbs', { productos });
});

//----------------------------------------------------------------------
// Elimino un producto selecionado y redirijo a la lista de productos
router.get( '/eliminar/:id', async ( req, res ) => {
  const id = req.params.id;
  await deleteProduct( id );
  res.redirect( '/' );
});

//----------------------------------------------------------------------
// Vista para editar producto
router.get( '/editar/:id', ( req, res ) => {
  const id = req.params.id;

  console.log( id );
  res.render( 'producto_editar.hbs');
});

//----------------------------------------------------------------------
// Renderiza un nuevo producto
router.get( '/producto_nuevo', ( _, res ) => {
  res.render( 'producto_nuevo.hbs');
});

//----------------------------------------------------------------------
// Renderiza un nuevo producto
router.post( '/producto_nuevo', async ( { body }, res ) => {
  const product  = { producto: body.producto, costo: body.costo };
  await newProduct( product );
  res.redirect( '/' );
});

//----------------------------------------------------------------------
// Renderiza un nuevo producto
router.get( '/producto_editar/:id', async ( req, res ) => {
  const id = req.params.id;
  const producto = await getProduct( id );
  res.render( 'producto_editar.hbs', { producto } );

});

//----------------------------------------------------------------------
// Renderiza un nuevo producto
router.post( '/producto_editar/:id', async ( req, res ) => {

  const { id } = req.params;
  const { producto, costo } = req.body;

  await updateProduct( id, producto, costo );
  res.redirect( '/' );
});

module.exports = router;