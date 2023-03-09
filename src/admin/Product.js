import { useContext } from 'react';
import Footer from '../component/pages/Footer';
import { ManageContext } from '../component/pages/MyContext';
import AdminNav from './AdminNav';

function Product() {
  const { product } = useContext(ManageContext);
  return (
    <>
      <AdminNav />
      <div>
        <h3 className='p-content'>Product Page</h3>

        <div className='u_cnt'>
          {product.length > 0 ? (
            product.map((editProduct) => {
              return (
                <div className='u_container' key={editProduct._id}>
                  <img
                    src={`http://159.65.21.42:9000${editProduct.image}`}
                    alt='img'
                  />
                  <p>Name: {editProduct.name}</p>
                  <p>Category: {editProduct.category}</p>
                  <p>Price: {editProduct.price}</p>
                  <p>Quantity: {editProduct.quantity}</p>
                  <p>Description: {editProduct.description}</p>
                  <span className='d-flex gap-3 '>
                    <button className='btnDel'>Delete</button>
                    <button className='btnEdit'>Edit</button>
                  </span>
                </div>
              );
            })
          ) : (
            <p>Loading,please wait...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
