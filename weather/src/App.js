import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TICTACTOE from './component/TICTACTOE';
import Timer from './component/Timer';
import Weather from './component/Weather';
import Yoshita from './component/Yoshita';
import Signup from './component/Signup';
import PrivateComponent from './component/PrivateComponent';



function App() {
  return (
    <div className="App">
    <BrowserRouter>

    <Yoshita/>
      <Routes>
      <Route element={<PrivateComponent/>}>
        <Route path='/' element={<Weather/>}></Route>
        <Route path='/time' element={<Timer/>}></Route>
        <Route path='/tic' element={<TICTACTOE/>}></Route>
        </Route>
         <Route path='/sign' element={<Signup/>}></Route>
       
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
