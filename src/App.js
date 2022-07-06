import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import ListadoRoutes from './routes/ListadoRoutes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/*' element={<ListadoRoutes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
