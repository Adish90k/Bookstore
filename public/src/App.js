
import './App.css';
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Addbook from './components/Addbook';
// import Header from './components/Header';
import Book from './components/Book/Book'
import Update from './components/Update';

function App() {
  return (
    <>
 
<Router>
  <Routes>
<Route path='/' exact element={<Book/>}/>
<Route path='/about' exact element={<Aboutus/>}/>
<Route path='/add' exact element={<Addbook/>}/>
{/* <Route path='/books' exact element={<Book/>}/> */}
<Route path='/update/:id' exact element={<Update/>}/>
</Routes>
</Router>
    </>
  );
}

export default App;
