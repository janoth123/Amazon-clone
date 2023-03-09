import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AmazonLogInLogo from '../img/AmazonLogInLogo..png';

function Registration() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const [regvalidate, setRegVallidate] = useState([]);
  // const [users, setUsers] = useState([...users, name, email, password]);

  // const signIn = () => {
  //   setUsers((prev) => prev + 1);
  //   console.log(users);
  // };

  const handleReg = (e) => {
    e.preventDefault();
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      confirmpassword === '' ||
      password !== confirmpassword
    ) {
      setRegVallidate(true);
    } else {
      // console.log(regvalidate);
      localStorage.setItem('Users', JSON.stringify(regvalidate));
      // alert('Registration successful');
      navigate(`/`);
      alert(`Registration Succesful, Welcome ${name}`);
    }
  };

  useEffect(() => {
    localStorage.setItem('Users', JSON.stringify(regvalidate));
  }, [regvalidate]);

  return (
    <>
      <Link to='/'>
        <img className='loginLogo' src={AmazonLogInLogo} alt='' />
      </Link>
      <div className='registration__Container'>
        <div className='registration__Content'>
          <h3>Create account</h3>
          <form onSubmit={handleReg}>
            <div>
              <div>
                <label htmlFor='name '>Your name</label>

                <div>
                  <input
                    type='text'
                    id='name'
                    aria-label='Name Field'
                    onChange={(e) => setName(e.target.value)}
                    placeholder='First and last name'
                  />
                  {regvalidate & (name === '') ? (
                    <p className='err'>Name is required!</p>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor='Email__number'>Mobile number or email</label>

                <div>
                  <input
                    type='text'
                    id='Email__number'
                    aria-label='Email or Phone number field'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter email or phone number'
                  />
                  {regvalidate & (email === '') ? (
                    <p className='err'>Email or Phone Number Required!</p>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor='password'>Password</label>

                <div>
                  <input
                    type='password'
                    id='password'
                    aria-label='Password Field'
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='At least 6 characters'
                    minLength={6}
                  />
                  {regvalidate & (password === '') ? (
                    <p className='err'>Password must be atlist 6 character</p>
                  ) : null}
                  <p className='passwordAlert'>
                    ¡ Passwords must be at least 6 characters.
                  </p>
                </div>

                <div>
                  <input
                    type='password'
                    id='confirmPassword'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder='At least 6 characters'
                    minLength={6}
                  />
                  {regvalidate &
                  (confirmpassword !== password || confirmpassword === '') ? (
                    <p className='err'>Password doesn't match</p>
                  ) : null}
                </div>
              </div>

              <button className='btnRegistration' type='submit'>
                Continue
              </button>

              <p>
                By continuing, you agree to Amazon's{' '}
                <a href='!#'>
                  Conditions of <br /> Use
                </a>{' '}
                and <a href='!#'>Privacy Notice</a>
              </p>

              <div>
                <p>
                  Already have an account? &nbsp;{' '}
                  <Link to='/Login'>Sign in</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className='new__reg'>
        <center>
          <h6>New to Amazon?</h6>
          <button className='btnCreateAccount'>
            Create your Amazon account
          </button>
        </center>
      </div>

      <center className='logInFooter'>
        <div className='logFooterEnd'>
          <div className='logContent'>
            <ul>
              <li>Conditions of Use</li>
              <li>Privacy Notice</li>
              <li>Help</li>
            </ul>
            <p>&copy; 1996-2022, Amazon,Inc. or its affiliates</p>
          </div>
        </div>
      </center>
    </>
  );
}

export default Registration;
