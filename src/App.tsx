import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SigIn from './pages/Login';
import Register from './pages/register';

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigIn/>}/>
          <Route path='/registro' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
