import { Link } from 'react-router-dom';
import '../admin/AdminNav.css';

function AdminNav() {
  return (
    <div className='admin__Nav'>
      <Link className='Link' to='/Dashboard'>
        <b>Dashboard</b>
      </Link>
      <Link className='Link' to='/Users'>
        <b>Users</b>
      </Link>
      <Link className='Link' to='/Product'>
        <b>Products</b>
      </Link>
      <Link className='Link' to='/EditUsers'>
        <b>Edit-Users</b>
      </Link>
      <Link className='Link' to='/EditProducts'>
        <b>Edit-Products</b>
      </Link>
    </div>
  );
}

export default AdminNav;
