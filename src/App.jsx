import { PostAcc } from './components/PostAcc';
import { PutAcc } from './components/PutAcc';
import { DeleteAcce } from './components/DeleteAcce';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<PostAcc/>} />
        <Route path='/Put' element = {<PutAcc/>} />
        <Route path='/Delete' element = {<DeleteAcce/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App; 

