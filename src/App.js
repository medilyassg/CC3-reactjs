import { Route, Routes } from 'react-router';
import './App.css';
import Acceuil from './components/Acceuil/Acceuil';
import DetailUser from './components/DetailUser/DetailUser';
import ListTodo from './components/Listtodo/ListTodo';
import ListUser from './components/ListUser/ListUser';
import User from './components/User/User';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Acceuil />}>
          <Route  index element={<ListUser />} />
          <Route path='taches/:id'element={<ListTodo />} />
          <Route path='details/:id' element={<DetailUser />} />
        </Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
