import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contactus from './pages/contact';
import Aboutus from './pages/about';
import Home from './pages/home';
import Languageoption from './component/language-dropdown';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/contactus' element={<Contactus/>}/>
            <Route path='/languageoption' element={Languageoption}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;