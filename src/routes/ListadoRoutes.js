import { Route, Routes } from 'react-router-dom';
import UpdateUser from '../pages/UpdateUser';
import UsersInfo from '../pages/UsersInfo';
import Header from '../components/Header';

function ListadoRoutes() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/users' element={<UsersInfo />} />
        <Route path='/addUser' element={<UpdateUser />} />
        <Route path='/editUser/:id' element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default ListadoRoutes;
