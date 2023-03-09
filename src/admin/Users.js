import { useContext } from 'react';
import Footer from '../component/pages/Footer';
import { ManageContext } from '../component/pages/MyContext';
import AdminNav from './AdminNav';

function Users() {
  const { users } = useContext(ManageContext);
  // console.log(users);

  return (
    <>
      <AdminNav />
      <h3 className='p-content'>Users</h3>
      <div className='userHead'>
        {users.length > 0 ? (
          users.map((userz) => {
            return (
              <div className='userChild' key={userz._id}>
                <p>Name: {userz.name}</p>
                <p>Phone: {userz.phone}</p>
                <p>Email: {userz.email}</p>
              </div>
            );
          })
        ) : (
          <p>please wait data is loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Users;
