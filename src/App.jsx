import { PostAcc } from './components/Accesorio/PostAcc';
import { PutAcc } from './components/Accesorio/PutAcc';
import { DeleteAcce } from './components/Accesorio/DeleteAcce';
import { Post_tipoa } from './components/tipo_arma/Post_tipoa';
import { Put_tipoa } from './components/tipo_arma/Put_tipoa';
import { Delete_tipoa } from './components/tipo_arma/Delete_tipoa';
import { Post_tipod } from './components/tipo_disparo/Post_tipod';
import { Put_tipod } from './components/tipo_disparo/Put_tipod';
import { Delete_tipod } from './components/tipo_disparo/Delete_tipod';
import { Post_fabi } from './components/fabricante/Post_fabi';
import { Put_fabi } from './components/fabricante/Put_fabi';
import { Delete_fabi } from './components/fabricante/Delete_fabi';
import { Post_cali } from './components/calibre/Post_cali';
import { Put_cali } from './components/calibre/Put_cali';
import { Delete_cali } from './components/calibre/Delete_cali'; 
import { Post_camu } from './components/camuflaje/Post_camu';
import { Put_camu } from './components/camuflaje/Put_camu';
import { Delete_camu } from './components/camuflaje/Delete_camu';
import { Post_arma } from './components/arma/Post_arma';
import { Put_arma } from './components/arma/Put-arma';
import { Delete_arma } from './components/arma/Delete_arma';
import { InicioSesion } from './InicioSesion';
import { Registro } from './Registro';
import { EditarPost } from './EditarPost';
import { CrearPost } from './CrearPost';
import { Muro } from './Muro';
import { EditUsuario } from './components/CrudUsuario/EditUsuario';
import { FormularioUsuarios } from './components/CrudUsuario/FormularioUsuarios';
import { ReporteUsuario } from './components/CrudUsuario/ReporteUsuario';
import { UsuarioCrud } from './components/CrudUsuario/UsuarioCrud';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element = {<InicioSesion/>} />
      <Route path='/Registro' element = {<Registro/>} />
      <Route path='/editarPost/:idPost' element = {<EditarPost/>} />
      <Route path='/muro' element = {<Muro/>} />  
      <Route path='/crearPost' element = {<CrearPost/>} /> 
      <Route path='/EditUsuario' element= {<EditUsuario/>} />
        <Route path='/FormularioUsuarios' element = {<FormularioUsuarios/>} />
        <Route path='/ReporteUsuario' element = {<ReporteUsuario/>} />
        <Route path='/UsuarioCrud' element = {<UsuarioCrud/>} />
        <Route path='/Post' element= {<PostAcc/>} />
        <Route path='/Put' element = {<PutAcc/>} />
        <Route path='/Delete' element = {<DeleteAcce/>} />
        <Route path='/Post_tipoa' element = {<Post_tipoa/>} />
        <Route path='/Put_tipoa' element = {<Put_tipoa/>} />
        <Route path='/Delete_tipoa' element = {<Delete_tipoa/>} />
        <Route path='/Post_tipod' element = {<Post_tipod/>} />
        <Route path='/Put_tipod' element = {<Put_tipod/>} />
        <Route path='/Delete_tipod' element = {<Delete_tipod/>} />
        <Route path='/Post_fabi' element = {<Post_fabi/>} />
        <Route path='/Put_fabi' element = {<Put_fabi/>} />
        <Route path='/Delete_fabi' element = {<Delete_fabi/>} />
        <Route path='/Post_cali' element = {<Post_cali/>} />
        <Route path='/Put_cali' element = {<Put_cali/>} />
        <Route path='/Delete_cali' element = {<Delete_cali/>} />
        <Route path='/Post_camu' element = {<Post_camu/>} />
        <Route path='/Put_camu' element = {<Put_camu/>} />
        <Route path='/Delete_camu' element = {<Delete_camu/>} />
        <Route path='/Post_arma' element = {<Post_arma/>} />
        <Route path='/Put_arma' element = {<Put_arma/>} />
        <Route path='/Delete_arma' element = {<Delete_arma/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App; 

