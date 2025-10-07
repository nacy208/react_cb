
//component = html + js+css
import './components/todo/todo.css';

import Header from './components/layout/header.jsx';
import Footer from './components/layout/footer.jsx';
import { Outlet } from 'react-router-dom';



const App = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

//<outlet />  children
