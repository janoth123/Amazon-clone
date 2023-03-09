import { createContext, useEffect, useState } from 'react';

export const ManageContext = createContext();

export default function MyContext({ children }) {
  const [product, setProduct] = useState([]);
  const [users, setUsers] = useState([]);
  const [newuser, setNewUser] = useState([]);
  const [cartContent, setCartContent] = useState([]);

  useEffect(() => {
    fetch(`http://159.65.21.42:9000/products`)
      .then((response) => response.json())
      .then((warn) => {
        const amazonProduct = [];
        warn.map((a, i) => {
          if (a.category === 'Janoth') {
            amazonProduct.push(a);
          }
        });
        setProduct(amazonProduct);
      });

    // users
    fetch(`http://159.65.21.42:9000/users`)
      .then((response) => response.json())
      .then((resp) => setUsers(resp));

    // cart
    // const cartContent = JSON.parse(localStorage.getItem('amazon__cart'));
    // setCartContent(cartContent);
  }, [users]);

  const exportData = {
    product,
    setProduct,
    users,
    setUsers,
    newuser,
    setNewUser,
    cartContent,
    setCartContent,
  };
  return (
    <ManageContext.Provider value={exportData}>
      {children}
    </ManageContext.Provider>
  );
}
