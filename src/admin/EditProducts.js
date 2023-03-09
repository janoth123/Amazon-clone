/* eslint-disable no-sequences */
import { useContext, useState } from 'react';
import '../admin/Product.css';
import Footer from '../component/pages/Footer';
import { ManageContext } from '../component/pages/MyContext';
import AdminNav from './AdminNav';

function EditProducts() {
  const { product } = useContext(ManageContext);

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const [productvalidate, setProductValidate] = useState(false);

  // validating Form
  const productValidation = () => {
    if (
      image === '' ||
      name === '' ||
      category === '' ||
      price === '' ||
      quantity === '' ||
      description === ''
    ) {
      setProductValidate(true);
    } else {
      console.log(productValidation);
    }
  };
  // Creating Product
  const handleDeleteProduct = (id) => {
    fetch(`http://159.65.21.42:9000/product/${id}`, {
      method: 'Delete',
    })
      .then((response) => response.json())
      .then((resp) => console.log(resp));
  };
  return (
    <>
      <AdminNav />

      <div className='E-content'>
        <h3>Product edit page</h3>
        <form
          method='POST'
          action='http://159.65.21.42:9000/create/product'
          encType='multipart/form-data'
          className='usersEdit'
        >
          <div>
            <div>
              <label htmlFor='Image'>Image</label>
              <div>
                <input
                  type='file'
                  name='image'
                  id='Image'
                  placeholder='Please upload file'
                  onChange={(x) => setImage(x.target.value)}
                />
                {productvalidate & (image === '') ? (
                  <p className='err'>Image is required</p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor='Name'>Product Name</label>
              <div>
                <input
                  type='text'
                  name='name'
                  id='Name'
                  placeholder='Product Name'
                  onChange={(x) => setName(x.target.value)}
                />
                {productvalidate & (name === '') ? (
                  <p className='err'>Product Name is required</p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor='Category'>Category</label>
              <div>
                <input
                  type='text'
                  name='category'
                  id='Category'
                  placeholder='Enter Category'
                  onChange={(x) => setCategory(x.target.value)}
                />
                {productvalidate & (category === '') ? (
                  <p className='err'>Category is required</p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor='Price'>Price</label>
              <div>
                <input
                  type='number'
                  name='price'
                  id='Price'
                  placeholder='Enter Price'
                  onChange={(x) => setPrice(x.target.value)}
                />
                {productvalidate & (price === '') ? (
                  <p className='err'>Price is required</p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor='Quantity'>Quantity</label>
              <div>
                <input
                  type='number'
                  name='quantity'
                  id='Quantity'
                  placeholder='Enter Quantity'
                  onChange={(x) => setQuantity(x.target.value)}
                />
                {productvalidate & (quantity === '') ? (
                  <p className='err'>Quantity is required</p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor='Description'>Description</label>
              <div>
                <input
                  type='text'
                  name='description'
                  id='Description'
                  placeholder='Enter Description'
                  onChange={(x) => setDescription(x.target.value)}
                />
                {productvalidate & (description === '') ? (
                  <p className='err'>Description is required</p>
                ) : null}
              </div>
              <span className='mt-4 gap-2'>
                <button type='button' className='btn_update'>
                  Update/Edit Product
                </button>

                {/* button */}
                <button
                  type='submit'
                  className='btn_update'
                  onClick={() => {
                    productValidation();
                  }}
                >
                  Create Product
                </button>
              </span>
              {/* <Quantity */}
            </div>
          </div>
        </form>

        <div className='u_cnt'>
          {product.length > 0 ? (
            product.map((editProduct) => {
              return (
                <div className='u_container' key={editProduct._id}>
                  <img
                    src={`http://159.65.21.42:9000${editProduct.image}`}
                    alt='img'
                  />
                  <div style={{ height: '200px', lineHeight: '10px' }}>
                    <p>Name: {editProduct.name}</p>
                    <p>Category: {editProduct.category}</p>
                    <p>Price:$ {editProduct.price}</p>
                    <p>Quantity: {editProduct.quantity}</p>
                    <p>Description: {editProduct.description}</p>
                  </div>
                  <span className='d-flex gap-3 '>
                    <button
                      className='btnDel'
                      onClick={() => handleDeleteProduct(editProduct._id)}
                    >
                      Delete
                    </button>
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

export default EditProducts;
