import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      <Navbar bg='primary' variant='dark' style={{ marginBottom: '50px' }}>
        <Container>
          <Navbar.Brand>Listar Usuarios</Navbar.Brand>
          <Navbar.Brand onClick={handleOnClick}>Logout</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
