import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserStart, getUserStart } from '../redux/actions';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
};

const UpdateUser = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { user } = useSelector((state) => state.data);
  const { firstName, lastName, email } = formValue;
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getUserStart(id));
      setFormValue({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email) {
      dispatch(updateUserStart({ id, formValue }));
    }
  };
  const onInputChange = (e) => {
    const { id, value } = e.target;
    setFormValue({ ...formValue, [id]: value });
  };

  return (
    <>
      <div className='form_component'>
        <Form onSubmit={handleSubmit}>
          <div>
            <Form.Group className='mb-3' controlId='firstName'>
              <Form.Label>First name</Form.Label>
              <Form.Control
                value={firstName || ''}
                onChange={onInputChange}
                type='text'
                placeholder='First name'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='lastName'>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                value={lastName || ''}
                onChange={onInputChange}
                type='text'
                placeholder='Last name'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email || ''}
                onChange={onInputChange}
                type='email'
                placeholder='Email'
              />
            </Form.Group>
          </div>
          <div className='form_buttons'>
            <Button variant='primary' type='submit'>
              Update
            </Button>
            &nbsp;
            <Link to={`/users`}>
              <Button variant='secondary'>Back</Button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default UpdateUser;
