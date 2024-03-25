import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export const PostAcc = () => {
     // Logica de la vista
     const url = 'http://localhost:5000/api/accesorios'
     //Hooks: Componente nativo de REACT que se encarga de enlazar el contenido de la vista (HTML) la logica del componente en si
 
     const [bocas, setBoca] = useState();
 
     const [canions, setCanion] = useState();
 
     const [empunaduras, setEmpunadura] = useState();
 
     const [miras, setMira] = useState();
 
     const [culatas, setCulata] = useState();
 
 
     const bocaHandler = (event) => {
 
         const { name, value } = event.target;
         setBoca(value);
 
     }
 
     const canionHandler = (event) => {
 
         const { name, value } = event.target;
         setCanion(value);
 
     }
 
     const empunaduraHandler = (event) => {
 
         const { name, value } = event.target;
         setEmpunadura(value);
 
     }
 
     const MiraHandler = (event) => {
 
         const { name, value } = event.target;
         setMira(value);
 
     }
 
     const culataHandler = (event) => {
 
         const { name, value } = event.target;
         setCulata(value);
 
     }
 
 
     const submitHandler = async () => {
 
         event.preventDefault();
         const data = {
             boca: bocas,
             canion: canions,
             empunadura: empunaduras,
             mira: miras,
             culata: culatas
         }
 
         const result = await axios.post(url, data);
         const resultData = (await result).data;
 
         console.log(result);
         console.log(resultData);
 
     }
 
 
 
     return (
         <>
             <div className='container mt-5' >
                 <form onSubmit={submitHandler} >
                     <fieldset>
                         <legend>Ingresar Accesorios</legend>
 
                         <div className="form-group row">
                             <label className="col-sm-2 col-form-label">Boca del arma</label>
                             <div className="col-sm-10">
                                 <input type="text" className="form-control-plaintext"
                                     name="bocas"
                                     onChange={bocaHandler}
                                 />
                             </div>
                         </div>
 
 
                         <div className="form-group row">
                             <label className="col-sm-2 col-form-label">Cañon del arma</label>
                             <div className="col-sm-10">
                                 <input type="text" className="form-control-plaintext"
                                     name="canions"
                                     onChange={canionHandler} />
                             </div>
                         </div>
 
                         <div className="form-group row">
                             <label className="col-sm-2 col-form-label">Empuñadura del arma</label>
                             <div className="col-sm-10">
                                 <input type="text" className="form-control-plaintext"
                                     name="empunaduras"
                                     onChange={empunaduraHandler} />
                             </div>
                         </div>
 
                         <div className="form-group row">
                             <label className="col-sm-2 col-form-label">Mira del arma</label>
                             <div className="col-sm-10">
                                 <input type="text" className="form-control-plaintext"
                                     name="miras"
                                     onChange={MiraHandler} />
                             </div>
                         </div>
 
                         <div className="form-group row">
                             <label className="col-sm-2 col-form-label">Culata del arma</label>
                             <div className="col-sm-10">
                                 <input type="text" className="form-control-plaintext"
                                     name="culatas"
                                     onChange={culataHandler} />
                             </div>
                         </div>
 
                         <button type="submit" className="btn btn-primary w-100">Ingresar Accesorios</button>
                         <br/> 
                           <Link to="/Put">Actualizar Accesorios</Link>
                           <br/>
                           <Link to="/Delete">Eliminar Accesorios</Link>
                     </fieldset>
                 </form>
                
             </div>
             
         </>
     )
}
