import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersStart, deleteUserStart } from '../redux/actions';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

const UsersInfo = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteUserStart(id));
  };

  return (
    <div className='container table_component'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/editUser/${user.id}`}>
                    <Button variant='secondary'>Update</Button>
                  </Link>
                  &nbsp;
                  <Button
                    variant='danger'
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersInfo;
