import './App.css';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Property from './Pages/Property/Property';
import PropertyDetail from './Components/PropertyDetail/PropertyDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/property" exact element={<Property/>}/>
          <Route path="/Property-detail" exact element={<PropertyDetail/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
