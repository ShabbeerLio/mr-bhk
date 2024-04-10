import './App.css';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
