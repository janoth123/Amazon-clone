import { useContext, useState } from 'react';
import '../admin/Users.css';
import Footer from '../component/pages/Footer';
import { ManageContext } from '../component/pages/MyContext';
import AdminNav from './AdminNav';

const EditUsers = () => {
  const { users } = useContext(ManageContext);
  const [id, setId] = useState('');

  // Adding user
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [validateuser, setValidateUser] = useState(false);
  // conditions-Validation
  const authenticate = () => {
    if (name === '' || phone === '' || email === '') {
      setValidateUser(true);
    } else {
      handleNewUser();
    }
  };
  // Handling NewUsers(Create)
  const handleNewUser = () => {
    fetch('http://159.65.21.42:9000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        password: password,
      }),
    })
      .then((Response) => Response.json())
      .then((resp) => console.log(resp));
  };

  // Handling delete
  const handleDelete = (id) => {
    fetch(`http://159.65.21.42:9000/user/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((warn) => console.log(warn));
  };

  // Updateding and Editing
  const handleUpdate_Edit = (i) => {
    const user = users[i];
    setId(user._id);
    setName(user.name);
    setPhone(user.phone);
    setEmail(user.email);
    setPassword(user.password);

    console.log(user);
  };

  const handleUpdate = () => {
    fetch(`http://159.65.21.42:9000/user/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
        phone: phone,
      }),
    })
      .then((response) => response.json())
      .then((err) => console.log(err));
  };

  return (
    <>
      <AdminNav />
      <div className='E-content'>
        <h3>Users</h3>
        <form className='usersEdit'>
          <div>
            <div>
              <label htmlFor='name'>Full Name</label>
              <div>
                <input
                  type='text'
                  name=''
                  id='name'
                  placeholder='please enter name'
                  value={name}
                  minLength={6}
                  onChange={(x) => setName(x.target.value)}
                />
                {validateuser & (name === '') ? (
                  <p className='err'>name is required</p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor='Phone'>Phone</label>
              <div>
                <input
                  type='text'
                  name=''
                  value={phone}
                  id='Phone'
                  placeholder='Phone Number'
                  onChange={(x) => setPhone(x.target.value)}
                />
                {validateuser & (phone === '') ? (
                  <p className='err'>phone number is required</p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor='Email'>Email</label>
              <div>
                <input
                  type='text'
                  name=''
                  id='Email'
                  value={email}
                  placeholder='Enter Email'
                  onChange={(x) => setEmail(x.target.value)}
                />
                {validateuser & (email === '') ? (
                  <p className='err'>email is required</p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor='Password'>Password</label>
              <div>
                <input
                  type='Password'
                  name=''
                  id='Password'
                  value={password}
                  placeholder='Enter Password, at list six(6)characters'
                  minLength={6}
                  onChange={(x) => setPassword(x.target.value)}
                />
                {validateuser & (password === '') ? (
                  <p className='err'>password is required</p>
                ) : null}
              </div>
            </div>

            <span>
              <button
                type='button'
                className='btn_update'
                onClick={() => handleUpdate()}
              >
                Update Edit
              </button>
              <button
                type='button'
                className='btn_update'
                onClick={(e) => {
                  e.preventDefault();
                  authenticate();
                }}
              >
                Create User
              </button>
            </span>
          </div>
        </form>
      </div>

      <div className='userHead'>
        {users.length > 0 ? (
          users.map((userz, i) => {
            return (
              <div className='userChild' key={userz._id}>
                <p>Name: {userz.name}</p>
                <p>Phone: {userz.phone}</p>
                <p>Email: {userz.email}</p>
                <span className='d-flex gap-3 btn_edit'>
                  <button
                    className='btnDel'
                    onClick={() => handleDelete(userz._id)}
                  >
                    Delete
                  </button>
                  <button
                    className='btnEdit'
                    onClick={() => handleUpdate_Edit(i)}
                  >
                    Edit/Update
                  </button>
                </span>
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
};

export default EditUsers;
