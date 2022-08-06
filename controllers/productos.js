const mysql_conn = require( '../helpers/mysql_conn' );

const getProducts = async () => {
  const product = await mysql_conn.awaitQuery(`select * from producto`)
  return product;
};

const getProduct = async ( id ) =>  await mysql_conn.awaitQuery(`select * from producto where id = ?`, id);

const deleteProduct = async ( id ) => await mysql_conn.awaitQuery(`delete from producto where id = ?`, [id] );

const newProduct = async ( producto )   =>  await mysql_conn.awaitQuery(`INSERT INTO producto SET ?`, producto ); 

const updateProduct = async ( id, producto, costo ) => await mysql_conn.awaitQuery(`update producto set producto = "${ producto }", costo = ${ costo } where id = ${ id }` );

module.exports = {
  getProducts,
  getProduct,
  deleteProduct,
  newProduct,
  updateProduct
}