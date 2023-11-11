// import logo from './logo.svg';
// import TodoList from './component/toDo';
// import RegisterForm from './component/Registration';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
import Header from './component/Header';
import Pages from './component/Pages';
import './styles/App.scss'
import './styles/header.scss'


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Pages />} />
        </Routes>
        {/* <Footer/> */}
      </Router>


      {/* <RegisterForm/> */}
     {/* <TodoList/>*/}
    </div>
  );
}

export default App;
