import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserStart } from '../redux/actions';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(loginUserStart({ email, password }));
      if (localStorage.getItem('token')) {
        navigate('/users');
      }
    }
  };
  const onInputChange = (e) => {
    const { id, value } = e.target;
    setFormValue({ ...formValue, [id]: value });
  };

  return (
    <>
      <div className='login_title'>
        <h3>Listado Sopra</h3>
      </div>
      <div className='login_component'>
        <div className='form'>
          <Form onSubmit={handleSubmit}>
            <div>
              <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email || ''}
                  onChange={onInputChange}
                  type='email'
                  placeholder='Email'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password || ''}
                  onChange={onInputChange}
                  type='password'
                  placeholder='Password'
                />
              </Form.Group>
            </div>
            <div>
              <Button variant='secondary' type='submit'>
                Login
              </Button>
            </div>
          </Form>
        </div>
        <div className='description'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially
        </div>
      </div>
    </>
  );
};

export default Login;
