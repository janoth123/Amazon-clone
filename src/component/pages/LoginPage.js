import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AmazonLogInLogo from '../img/AmazonLogInLogo..png';

function LoginPage() {
  const naigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = '';

  const [validate, setValidate] = useState(false);

  const handleValidation = () => {
    if (email === '' || password === '') {
      setValidate(true);
    } else {
      // localStorage.getItem('Users', JSON.parse(validate));
      // localStorage.setItem('Users', JSON.stringify(validate));
      alert('success');
      naigate('/');
    }
  };
  return (
    <>
      <Link to='/'>
        <img className='loginLogo' src={AmazonLogInLogo} alt='' />
      </Link>
      <div className='signIn__Container'>
        <div className='logIn__Content'>
          <h3>Sign in</h3>
          <form onClick={handleValidation}>
            <div>
              <div>
                <label htmlFor='Email__number'>
                  Email or mobile phone number
                </label>

                <div>
                  <input
                    type='text'
                    aria-label='Email Field'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {validate.email === '' ? <p>Email is required</p> : null}
                </div>

                <label htmlFor='Email__number'>Password</label>

                <div>
                  <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {validate.password === '' ? (
                    <p>Password is required</p>
                  ) : null}
                </div>
              </div>

              <button
                className='btnLoginContinue'

                // type='submit'
              >
                Login
              </button>

              <p>
                By continuing, you agree to Amazon's{' '}
                <a href='!#'>
                  Conditions of <br /> Use
                </a>{' '}
                and <a href='!#'>Privacy Notice</a>
              </p>

              <span>
                ►
                <a className='needHelp' href='!#'>
                  {' '}
                  Need Help?
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>

      <div className='new__reg'>
        <center>
          <h6>New to Amazon?</h6>
          <button className='btnCreateAccount'>
            <Link
              to='Registration'
              style={{ color: 'black', textDecoration: 'none' }}
            >
              Create your Amazon account
            </Link>
          </button>
        </center>
      </div>

      <center className='logInFooter'>
        <div className='logFooterEnd'>
          <div className='logContent'>
            <ul>
              <li>
                <Link> Conditions of Use</Link>
              </li>
              <li>
                <Link>Privacy Notice</Link>
              </li>
              <li>
                <Link>Help</Link>
              </li>
            </ul>
            <p>&copy; 1996-2022, Amazon,Inc. or its affiliates</p>
          </div>
        </div>
      </center>
    </>
  );
}

export default LoginPage;
